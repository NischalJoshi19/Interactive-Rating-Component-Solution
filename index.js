const cardContent = document.querySelector(".content");
const buttonsDiv = document.querySelector(".stars");
const submitBtn = document.querySelector(".btn-submit");
const rating = document.querySelector(".rating");

// variable to store the rating score
let score = 3;

// attach the event listener to the div containing the stars
buttonsDiv.addEventListener('click', function(e) { rate(e) }); 

submitBtn.addEventListener('click', submit); 

// get the star that was clicked, the target
function getTarget(e) {
    if (!e) { 
        e = window.event; 
    } 
    return e.target || e.srcElement;; 
}

// get the rating
function rate(e){
    const stars = Object.values(buttonsDiv.children);
    var target; 

    // get the button that was clicked
    target = getTarget(e);  

    // check if any of the buttons have active class
    if (stars.find(star => star.classList.contains
    ("active"))){
        // removing active class from all the stars
        stars.forEach(star => {
            star.classList.remove("active");
        });
    }

    // setting active class on the star now clicked
    target.classList.add("active");
    // setting the score to the value of the target button/star
    score = target.value;
}

// submit the rating form and show the thank you note
function submit(){
    rating.innerText = score;
    cardContent.style.transform = "rotateY(180deg)";
}