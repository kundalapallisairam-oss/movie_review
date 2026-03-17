async function searchMovie(){

const name=document.getElementById("movieName").value

const res=await fetch(`http://localhost:3000/movie/${name}`)

const data=await res.json()

displayMovie(data)

}

function displayMovie(movie){

const result=document.getElementById("result")

result.innerHTML=`

<h2>${movie.Title}</h2>

<img src="${movie.Poster}" width="200">

<p>⭐ Rating: ${movie.imdbRating}</p>

<p>📅 Year: ${movie.Year}</p>

`

}