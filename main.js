//function takes two arrays of numbers
function arrayMadness(a, b) {
    // Ready, get set, GO!!!
    let newA = 0
    let newB = 0
    for ( let i = 0; i < a.length; i++) {
      newA += a[i]**2
    } for (let j = 0; j < b.length; j++) {
      newB += b[j]**3
    }
    if (newA > newB) {
      return true 
    } else {
      return false
    }
  }


console.log(arrayMadness([2,3,4],[2,2,2])) // => true
console.log(arrayMadness([2,3,4],[2,3,4])) // => false
console.log(arrayMadness([22,33,44],[12,12,12])) // => false
