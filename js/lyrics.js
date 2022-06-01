let searchResults;

function getData(){
	
	let lyricData = JSON.parse(sessionStorage.getItem('result'))
	// console.log(lyricData)
	isLoading = false;
}


function initializeData(){
	console.log("getting data")
}


function searchLyrics(term,postType){
  let url= `http://localhost/testwp/wp-json/wp/v2/${postType}?search=${term}`;
 const result = fetch(url).then(response => response.json()).then(function(data){
 	console.log(data)
 	searchResults=data
 	
 	return {
 	
 		searchTerm: '',
 		'isSearchLoading':false,

 	}
 }).catch(err => console.log(err))
 // console.log(result)
}


function handleForm(){

	// get form values
}


