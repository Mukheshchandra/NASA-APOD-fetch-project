// console.log("hello this is ");

function loadNasaData(){
    // console.log("load nasa data");

    // let loadingimage = "https://cdn.iconscout.com/icon/free/png-256/loading-340-458525.png";
    let loadingimage1 = "https://upload.wikimedia.org/wikipedia/commons/6/66/Loadingsome.gif";
    document.getElementById("image").src = loadingimage1;

    let apikey = "OSsLvygPNZmf9mXp3QocKDdOwv2nO08ipQsXGyUJ";
    let url = "https://api.nasa.gov/planetary/apod?api_key=" 
    + apikey;

    // console.log(url);

    fetch(url).then(function(response){
        return response.json();
    }
    ).then(function(json){
        // console.log(json);

        let title = json.title;
        let date = json.date;
        let explanation = json.explanation;
        let url = json.url;
        let hdurl = json.hdurl;
        let media_type = json.media_type;

        // console.log(`url: ${url}`);
        // console.log(`hdurl: ${hdurl}`);

        document.getElementById("title").innerHTML = title;
        document.getElementById("date").innerHTML = date;
        document.getElementById("explanation").innerHTML = explanation;

        document.getElementById("image").src = hdurl;
     }).catch(function(error){
        console.log(error);
    })
}