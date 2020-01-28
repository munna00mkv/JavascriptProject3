console.log("This is index.js");
// 22c6853cc3694e6895d32e0bedcc6342
//Initialize the news api parameters
let source= 'bbc-news';
let apiKey = '22c6853cc3694e6895d32e0bedcc6342';
//Grab the news container

let newsAccordion = document.getElementById("newsAccordion");
//create a get request
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);
xhr.onload = function(){
    if(this.status ===200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml ="";
        articles.forEach(function(element,index) {
            // console.log(element,index);
            let news = `
         
        <div class="card">
                <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                  <b> Breaking News${index+1}:</b> ${element["title"]}
                    </button>
                </h2>
                </div>

                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                <div class="card-body">
                ${element["content"]}.<a href="${element["url"]}" target="_blank">Read More here</a>
                </div>
            </div>
         </div>     
                        `
                        newsHtml += news;

                    });
        newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log("Some Error Occurd");    }

}
xhr.send();
