


const artistWrapper = document.querySelector("#artistWrapper")
const menuEl = document.querySelectorAll(".mobileMenu a")[1];
const body = document.querySelector("body");
// console.log(menuEl)

menuEl.addEventListener("click", function(){
  body.classList.toggle("menu--open")
})


const resultLyrics = [];
const resultArtist = [];
const resultData = [];

 // document.addEventListener('alpine:init', () => {
 //      Alpine.data('getArtists', () => ({
 //         getAllArtists()
 //      }))
 //  })

const songs = document.querySelectorAll(".song");


songs.forEach(function(song,index){

  song.addEventListener("click", function(e){
    e.preventDefault()
    // const trackID = this.getAttribute("data-id");
    const trackID = this.dataset.id;
    fetchLyricById(trackID)
    // console.log(trackID)

  })
})


function getAllArtists(){
  fetch(`https://gongong.live/word/wp-json/wp/v2/artist`)
  .then(response => response.json())
  .then(function(data){
        console.log(data)

        data.forEach((artist,index)=>{
          const artistData = {
            artist: artist.acf.artist_name,
            trackUrl: artist.acf.lyric_track,
            artistImg: artist.acf.artist_image,
            trackSummary: artist.acf.track_summary,
            trackLyrics: artist.content.rendered,
            date: artist.date,
            trackId: artist.id
          }

          resultArtist.push(artistData)
        })

    })
  .then(data => {myData = data; console.log(myData)})

}

// getAllArtists()

function fetchPostTypeData(){
   fetch(`https://gongong.live/word/wp-json/acf/v3/lyrical`)
  .then(response => response.json())
  .then(function(data){
        console.log(data)
      // return resultData.push(data)
    })
}

function fetchLyricById(id){

  console.log(id)

  fetch(`https://gongong.live/word/wp-json/wp/v2/lyrical/${id}`)
  .then(response => response.json())
  .then(function(data){
        // console.log(data)
        resultLyrics.push(data)
    })
   .then(function(){

     saveResult(resultLyrics)

     
      window.location.pathname = "/lyrics"
    })
   .catch(err => console.log(err))
}

// save result to session storage?


function fetchArtistById(id){

  console.log(id)

  fetch(`https://gongong.live/word/wp-json/wp/v2/artist/${id}`)
  .then(response => response.json())
  .then(function(data){
        // console.log(data)
        resultArtist.push(data)
    })
   .then(function(){

     saveResult(resultArtist)

     
      window.location.pathname = "/profile"
    })
   .catch(err => console.log(err))
}


function saveResult(result){
  console.log(`${result[0].title.rendered} is the title from sessionStorage`)
  const sessionStore = window.sessionStorage;
  sessionStore.setItem("artistProfile", JSON.stringify(result))
}


function populateArtistCard(wrapperEl,trackId,imgUrl,artistName,trackName){


}

function listLyrics(video){
        const vidListEl = document.getElementById("videoList");
        const videoLink = document.createElement("a");
        videoLink.setAttribute('data-src', video.url);
        videoLink.setAttribute('href', "#")

        // const videoIcon = document.createElement("img");
        // videoIcon.setAttribute('src', "./primetech/icons/pdf.png")

        const videoText = document.createTextNode(video.title);

        videoLink.appendChild(videoText);
        vidListEl.appendChild(videoLink);
      }


const gravityconsumerKey = `ck_feace6721d506b1606dd11d5206a8ec21e5e1e4c`;
const gravityconsumerSecrect = `cs_1097f053f338b017f5740a89be26210ed0ea374b`;
const postURL = `https://gongong.live/word/gf/v2/forms/1/submissions`;


const requestForm = document.querySelector("#requestForm");


const formSubmissionHandler = (event) => {
  event.preventDefault();
  console.log(event.target)
  const formElement = event.target,
    { action, method } = formElement,
    body = new FormData(formElement);
    console.table(body)
    console.log(action)
    console.log(method)
  fetch(action, {
    method,
    mode:'cors',
    credentials:'same-origin',
    headers: {
      // 'Content-Type': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': 'http://172.28.63.241:8080',
      'Access-Control-Allow-Credentials': 'true'
    },
    referrerPolicy: 'no-referrer',
    body
  })
    .then((response) => response.json())
    .then((response) => {
      // Determine if the submission is not valid
      console.log(method, body)
      if (isFormSubmissionError(response)) {
        // Handle the case when there are validation errors
        console.log(response)
      }
      // Handle the happy path
      console.log(response)
    })
    .catch((error) => {
      // Handle the case when there's a problem with the request  
    });
};

const formElement = document.querySelector("#requestForm");

formElement.addEventListener("submit", formSubmissionHandler);

// check the dark mode pattern

function addDarkMode(){
   localStorage.setItem('darkMode','true');
}


function removeDarkMode(){
   localStorage.removeItem('darkMode');
}


function checkLocalStorage(){
  const darkMode = localStorage.getItem('darkMode');
  if(darkMode == undefined || darkMode == null){
    localStorage.setItem('darkMode','true')
  }
}


function addClassToBody(_class){
    const body = document.querySelector("body");
    body.classList.add(`${_class}`);

}

const swiperOptions = {
 
   breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 1
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    765:{
       slidesPerView: 4,
       spaceBetween: 10
    }
  },

}



// const trendingSwiper = new Swiper('.swiper-container.trending',swiperOptions)

// if(window.Swiper !== undefined ){
  const latestSwiper = new Swiper('.swiper-container.latest', swiperOptions)
// }


function reinitializeSwiper(){
    setTimeout(function(){
     
        // trendingSwiper.update();
          latestSwiper.update();

      },10)
}


    