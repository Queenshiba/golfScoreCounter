var strokes = document.getElementById('scoreInput')
var par = document.getElementById('parInput')
var form = document.getElementById('form')
var result = document.getElementById('result')
var reset = document.getElementById('reset')
var dots = document.getElementById('dots')

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    dots.textContent = ""
    console.log(golfScore(par.value, strokes.value))
   
    result.textContent = golfScore(par.value, strokes.value)
});
reset.addEventListener("click",()=> {
    strokes.value = ""
    par.value = ""
    result.textContent = ""
    console.log("reset")
})


var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
// function golfScore(par, strokes) {
  
//     if (strokes === 1) {
//         return "Hole-in-one!"
//     } else if (strokes <= par - 2) {
//         return "Eagle"
//     } else if (strokes === par - 1) {
//         return "Birdie"
//     } else if (strokes === par) {
//         return "Par"
//     } else if (strokes === par + 1) {
//         return "Bogey"
//     } else if (strokes === par + 2) {
//         return "Double Bogey"
//     } else if (strokes >= par + 3) {
//         return "Go Home!"
//     }

//     return "Change Me";
   
// }
function golfScore(par, strokes) {

    if (strokes < 2) {
    return "Hole-in-one!";
    } else if (par == par && strokes <= par-2) {
    return "Eagle";
    } else if (par == par && strokes <= par-1) {
    return "Birdie";
    } else if (par == par && strokes === par) {
    return "Par";
    } else if (par == par && strokes === par+1) {
    return "Bogey";
    } else if (par == par && strokes === par+2) {
    return "Double Bogey";
    } else if (par == par && strokes >= par+3) {
    return "Go Home!";
    } 
      return "Change Me";
    }
// Change these values to test
// console.log(golfScore(5, 5));
