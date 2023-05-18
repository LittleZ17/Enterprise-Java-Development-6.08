//import movies from "./data.js";
// The `movies` array from the file `./data.js`.
//console.log('movies: ', movies);



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors() {
  let directors = movies.map((movie) => {
    return movie.director;
  });

  let bonusDirectors = directors.filter((movie, i) => {
    return directors.indexOf(movie) === i;
  });
  //return directors;
  return bonusDirectors;
}
console.log(getAllDirectors());


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() {
  let stevenDramaMovies = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
  return stevenDramaMovies.length;
}
console.log(howManyMovies())

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {
  let scores = movies.map((movie) => {
    return movie.score;
  })
  let result = scores.reduce((acc, res) => {
    return acc + res;
  }, 0)

  //Devuelto como number
  // result = result/scores.length
  // result = Math.round(result * 100) / 100

  //Devuelto como string
  result = (result / scores.length).toFixed(2);
  return result
}
console.log(scoresAverage())

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {
  let dramaMovies = movies.filter(movie => {
    return movie.genre.includes("Drama")
  })
  let scores = dramaMovies.map((movie) => {
    return movie.score
  })
  let result = scores.reduce((acc, res) => {
    return acc + res;
  }, 0)
  resultAvrg = (result / scores.length).toFixed(2);
   //console.log(dramaMovies);
  // console.log(result);
  return resultAvrg
}
console.log(dramaMoviesScore());


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let copyMovies = [...movies]
  let sortedMovies = copyMovies.sort((a, b) => {
    if (a.year === b.year) {

      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    }
    return a.year - b.year
  })
  //Comprobacion del array original esta intacto!!
  console.log("Original Array ------>>", movies[0])
  console.log("Copy Array ------>>", sortedMovies[0])
  return sortedMovies;
}
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let copyMovies = [...movies]
  let sorted = copyMovies.sort((a,b) => {
    if(a.title.toLowerCase() < b.title.toLowerCase()){
      return -1;
    }else if(a.title.toLowerCase() > b.title.toLowerCase()){
      return 1;
    }else{
      return 0;
    }
  })
  if(movies.length < 20) return sorted;
  return sorted.slice(0,20)
}
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  let copyMovies = [...movies]

  copyMovies.map((movie) => {
    let str = movie.duration;
    //ALGUN CHAR DEL STR COINCIDA CON DIGITOS
    let numbers = (str.match(/\d+/g).map(Number));
    let hour = numbers[0] * 60;
    let min = numbers[1];
    movie.duration = hour + min;
    return movie
  })
  return copyMovies;
}
console.log(turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { 
   yearScore = {};

  let r = movies.map(movie =>{
    const {year, score} = movie;

    if(year in yearScore){
      yearScore[year].push(score);
    }else{
      //creame un objeto (key-value) nuevo
      yearScore[year] = [score];
    }
  });
  
  let bestYear = null;
  let bestAvgScore = 0;

  Object.keys(yearScore).forEach(year=> {
    const score = yearScore[year];
    const avgScore = score.reduce((total, score) => total + score, 0) / score.length;

    if (avgScore > bestAvgScore) {
      bestAvgScore = avgScore.toFixed(2);
      bestYear = year;
    }
  });

  let prhase = `The best year was << ${bestYear} >> with an average score of << ${bestAvgScore} >>`

  return prhase;

}
console.log(bestYearAvg())


