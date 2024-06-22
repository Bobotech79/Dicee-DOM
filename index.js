

// Get random numbers between 1 - 6
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;

    // Get a random dice
    const randomDice = "dice"+randomNumber1+".png";

    // Get images source with random dice
    const randomImageSource = "/images/"+randomDice;

// Randomise player one dice
    const image1 = document.querySelectorAll("img") [0]; 

// 👆 this selects all image tags and then chooses the first [index 0]

// Now target the attribute - src  of image1 and change set the image to random
    image1.setAttribute("src", randomImageSource);

// Let's create another randomiser for player 2
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

// random dice for player 2
    const randomDice2 = "/images/dice"+randomNumber2+".png";

// Let's randomise player two

    const image2 = document.querySelectorAll("img") [1]; 
// 👆 this selects image tag [index 1] 

// Now set element
    image2.setAttribute("src", randomDice2);


if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = '😎 Player one wins';
} else if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').innerHTML = 'Player two wins 😎';
} else {
  document.querySelector('h1').innerHTML = 'Draw! 🤝';
}