angular.module('meannasdaq').controller("MainController", MainController);

function MainController (){
    var vm = this;
    vm.title = "This is the title";
    
        $.ajax({
        method: "GET",
        url: "https://newsapi.org/v2/everything",
        data: { q: "nasdaq", sortBy: "relevancy", language: 'en', apiKey: 'cebe8b63bb6d40d3954665264fbeb149' },
        success: function(response) {

            if (response.status === "ok") {
                console.log("newsapi", response);
                vm.articles = response.articles;
                console.log('newsapi vm.articles', vm.articles[1])
                // for (var i = 0; i < data.articles.length; i++) {
                //     var articles = document.createElement("OPTION");
                //     articles.setAttribute("value", data.sources[i].title);
                //     articles.innerHTML = data.articles[i].name;
                //     document.getElementById("selection").appendChild(articles);
                //     // jsonData.push(JSON.parse(data));
                // }

            }
        }

    });
}