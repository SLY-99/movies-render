const copyMovies = movies;


let cutMovies = copyMovies.slice(0,20);
const elWrapper = document.querySelector("#wrapper");


for (let i = 0; i < cutMovies.length; i++) {
    
    let newCard = document.createElement("div");
    let newCardBody = document.createElement("div");
    let newDateWrapper = document.createElement("div");
    let newRateWrapper = document.createElement("div");
    let newBtnWrapper = document.createElement("div");
    let newImg = document.createElement("img");
    let newTitle = document.createElement("h5");
    let newDateText = document.createElement("p");
    let newRateText = document.createElement("p");
    let newBtnTrailer = document.createElement("a");
    let newBtnInfo = document.createElement("button");
    let newBtnBookmarks = document.createElement("button");
    
    newCard.setAttribute("class" , "card me-3 mb-3");
    newCard.setAttribute("style" , "width: 22rem;");
    
    newImg.setAttribute("src" , `http://i3.ytimg.com/vi/${cutMovies[i].ytid}/maxresdefault.jpg`);
    newImg.setAttribute("class" , "card-img-top");
    newImg.setAttribute("style" , "height: 220px;");

    newCardBody.setAttribute("class" , "card-body");

    newTitle.setAttribute("class" , "card-title fw-bolder text-danger");
    newTitle.textContent = cutMovies[i].Title;

    newDateWrapper.setAttribute("class" , "d-flex");
    newDateText.setAttribute("class" , "ms-2 fw-bolder");
    newDateText.textContent = "Released: " + cutMovies[i].movie_year;

    newRateWrapper.setAttribute("class" , "d-flex");
    newRateText.setAttribute("class" , "ms-2 fw-bolder");
    newRateText.textContent = "Rate: " + cutMovies[i].imdb_rating;

    newBtnWrapper.setAttribute("class" , "pb-3");
    newBtnTrailer.setAttribute("class" , "btn btn-outline-primary btn-sm me-3");
    newBtnTrailer.setAttribute("href" , `https://www.youtube.com/watch?v=${cutMovies[i].ytid}`);
    newBtnTrailer.textContent = "Watch trailer";
    newBtnInfo.setAttribute("class" , "btn btn-outline-info btn-sm me-3");
    newBtnInfo.textContent = "More info";
    newBtnBookmarks.setAttribute("class" , "btn btn-outline-success btn-sm");
    newBtnBookmarks.textContent = "Bookmarks";

    
    
    
    elWrapper.appendChild(newCard);
    
    newCard.appendChild(newImg);
    newCard.appendChild(newCardBody);
    
    newCardBody.appendChild(newTitle);

    newCardBody.appendChild(newDateWrapper);
    newDateWrapper.appendChild(newDateText);
    
    newCardBody.appendChild(newRateWrapper);
    newRateWrapper.appendChild(newRateText);
    
    newCardBody.appendChild(newBtnWrapper);
    newBtnWrapper.appendChild(newBtnTrailer);
    newBtnWrapper.appendChild(newBtnInfo);
    newBtnWrapper.appendChild(newBtnBookmarks);
    
}

console.log(elWrapper);


