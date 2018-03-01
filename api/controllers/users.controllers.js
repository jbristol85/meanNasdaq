var mongoose = require('mongoose');
var User = mongoose.model('User');
var Stock = mongoose.model('Stock');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

module.exports.register = function(req, res) {
	console.log('registering user');

	var username = req.body.username;
	var name = req.body.name || null;
	var password = req.body.password;

	User.create({
		username: username,
		name: name,
		password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)) //encrypted password requiring npm bcrypt-nodejs
	}, function(err, user) {
		if (err) {
			console.log(err);
			res.status(400).json(err);
		}
		else {
			console.log('user created', user);
			res.status(201).json(user);
		}
	});
};

module.exports.login = function(req, res) {
	console.log('logging in user');
	var username = req.body.username;
	var password = req.body.password;

	User.findOne({
		username: username
	}).exec(function(err, user) {
		if (err) {
			console.log(err);
			res.status(400).json(err);
		}
		else {
			if (bcrypt.compareSync(password, user.password)) {
				console.log('user found', user);
				var token = jwt.sign({ username: user.username }, 's3cr3t', { expiresIn: 3600 });
				res.status(200).json({ success: true, token: token });
			}
			else {
				res.status(401).json('Unauthorized');
			}
		}
	});
};

module.exports.authenticate = function(req, res, next) {
	var headerExists = req.headers.authorization;
	if (headerExists) {
		var token = req.headers.authorization.split(' ')[1];
		jwt.verify(token, 's3cr3t', function(error, decoded) {
			if (error) {
				console.log(error);
				res.status(401).json('unauthorized');
			}
			else {
				req.user = decoded.username;
				next();
			}
		});
	}
	else {
		res.status(403).json('No token provided');
	}

};


var _addSaved = function(req, res, user) {
	// console.log('_addSaved', req.body);
	user.saved.push({
		savedStock: req.body.savedId
	});
	user.save(function(err, userUpdated) {
		if (err) {
			res
				.status(500)
				.json(err);
		}
		else {
			res
				.status(201)
				.json(userUpdated.saved[userUpdated.saved.length - 1]);
		}
	});
};

module.exports.savedStock = function(req, res) {
	console.log(" POST savedStock", req.params);

	var username = req.params.user;
	console.log('username', username);


	User
		.findOne({ username: username })
		// .select(-password)
		.exec(function(err, doc) {
			console.log(doc);

			if (err) {
				console.log("Error finding saved");
				res
					.status(500)
					.json(err);
			}
			else if (!doc) {
				console.log("Saved not in database");
				res
					.status(404)
					.json({
						"message": "search not found " + doc
					});

			}
			if (doc) {
				_addSaved(req, res, doc);
			}
			// else {
			// 	res
			// 		.status(200)
			// 		.json(doc);
			// }
		});
};
module.exports.getUser = function(req, res) {
	var username = req.params.user;
	User
		.findOne({ username: username })
		.exec(function(err, doc) {
			if (err) {
				console.log("Error finding saved");
				res
					.status(500)
					.json(err);
			}
			else if (!doc) {
				console.log("Saved not in database");
				res
					.status(404)
					.json({
						"message": "search not found " + doc
					});

			}
			if (doc) {
				res
					.status(200)
					.json(doc);
			}
		});
};

var _addSearch = function(req, res, user) {
	// console.log('_addSaved', req.body);
	user.searches.push({
		savedSearch: req.params.searchId
	});
	user.save(function(err, userUpdated) {
		if (err) {
			res
				.status(500)
				.json(err);
		}
		else {
			res
				.status(201)
				.json(userUpdated.searches[userUpdated.searches.length - 1]);
		}
	});
};

module.exports.saveSearch = function(req, res) {
	console.log(" POSTed savedSearch", req.params);
	console.log("saveSearch", req.params.searchId);
	var username = req.params.user;
	console.log('username', username);


	User
		.findOne({ username: username })
		// .select(-password)
		.exec(function(err, doc) {
			console.log(doc);

			if (err) {
				console.log("Error finding searches");
				res
					.status(500)
					.json(err);
			}
			else if (!doc) {
				console.log("searches not in database");
				res
					.status(404)
					.json({
						"message": "search not found " + doc
					});

			}
			if (doc) {
				_addSearch(req, res, doc);
			}
			// else {
			// 	res
			// 		.status(200)
			// 		.json(doc);
			// }
		});
module.exports.userSearched = function(req, res){
	console.log('Get the searched Stocks');

	User 
		.findOne({username:username})
		.select('searches')
		.exec(function(err, search){
			console.log('userSearched', search)
			if (err){
				console.log('Error finding searches');
				res
					.status(500)
					.json(err);
			}
			// }else {
			// 	console.log("Found searches", search.length);
			// 	Stock
			// 		.find({_id: 'search.searches.savedSearch'})
			// 		.exec(function(err, stock){
			// 		res
			// 		.json(stock);
			// 		})
					
			
			});
		


};

};