// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Albert Poliarco" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type

// Code to update name display 

// Event listener for clicks on the "+" button for Ginger Bread cookies
// HINT: You can delete this console.log after you no longer need it!

// TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked

let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
// TODO: Hook up event listeners for the rest of the buttons

document.getElementById('credit').textContent = `Created by ${yourName}`


// Gingerbread
let addGbBtn  = document.getElementById('add-gb').addEventListener('click', function() {
    gb += 1
    document.getElementById('qty-gb').textContent = gb
    console.log('Ginger bread + button was clicked!')
})
let minusGbBtn = document.getElementById('minus-gb').addEventListener('click', function() {
    gb - 1
    let minusGB  = document.getElementById('qty-gb').textContent = gb
    console.log('Ginger bread - button was clicked!')
})






// Chocolate Chip
let addCcbtn  = document.getElementById('add-cc').addEventListener('click', function() {
    cc +1
    document.getElementById('qty-cc').textContent = cc
    console.log('Chocolate Chip cookie + button was clicked!')
})
let minusCcbtn = document.getElementById('minus-gb').addEventListener('click', function() {
    cc - 1
    let minusCc  = document.getElementById('qty-gb').textContent = cc
    console.log('Chocolate Chip cookie - button was clicked!')
})



// Sugar Sprinkle
let addSsClicked  = document.getElementById('add-sugar').addEventListener('click', function() {
    sugar + 1
    document.getElementById('qty-sugar').textContent = sugar
    console.log('Sugar Sprinkle cookie + button was clicked!')
})
let minusSsClicked = document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar -1
    let minusSs  = document.getElementById('qty-sugar').textContent = sugar
    console.log('Sugar Sprinkle cookie - button was clicked!')
})
// Total:

let total = gb + cc + sugar;