var API_KEY = "AIzaSyCvV0QiBHagMXK2mvi2R0ml7JS8EKXjmY0";
var video = '';
var videos = document.getElementById("videos");
document.getElementById("search").defaultValue = " ";
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault();
        var search = document.getElementById("search").value;
        if(search!=" "){
            videoSearch(API_KEY, search, 16);
        }    
    });
});

function run(id) {
    let textCont = document.getElementById(`${id}`).textContent;
    //console.log("Text is:", textCont);
    document.getElementById('search').value = textCont;
    videoSearch(API_KEY, textCont, 16);
}

function videoSearch(key, search, maxResults) {
    // Clearing the old content
    videos.innerHTML = "";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                //console.log(data);
                data.items.forEach(function (item) {
                    video = `
                        <iframe id="player" type="text/html" width="420" height="340"
                         src="https://www.youtube.com/embed/${item.id.videoId}"
                         frameborder="0" allowfullscreen></iframe>
                     `;

                    videos.innerHTML += video;
                });
            } else {
                console.error("Error fetching data: " + xhr.status);
            }
        }
    };
    xhr.send();
}
