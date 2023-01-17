// first create an array of image

let arr = ["img1","img2","img3","img4","img5"];



function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
console.log(shuffleArray(arr))
