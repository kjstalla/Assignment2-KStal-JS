// constants for query selector
const studentIdElement = document.getElementById("myStudentId"); // gets query selectors from premade id and classes
const customNumberInput = document.getElementById("customNumber");
const customColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const imageDisplay = document.getElementById("images");
const body = document.body;

const imageArray = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg"]; // holds image paths

// function to change bg color from user input and add student id
function changeCustomColor() {
    const studentId = "Kris Stallard // 1263760"; // student id
    const userNumber = parseInt(customNumberInput.value); // allows user to enter input

    studentIdElement.textContent = `Student ID: ${studentId}`; // changes text content to student id 

    // if statement to change the background color based on what number the user enters
    if (isNaN(userNumber) || userNumber < 0 || userNumber > 100) { // if the box is empty or below 0 or over 100
        body.style.backgroundColor = "red"; // changes background color
    } else if (userNumber >= 0 && userNumber <= 20) {
        body.style.backgroundColor = "green";
    } else if (userNumber > 20 && userNumber <= 40) {
        body.style.backgroundColor = "blue";
    } else if (userNumber > 40 && userNumber <= 60) {
        body.style.backgroundColor = "orange";
    } else if (userNumber > 60 && userNumber <= 80) {
        body.style.backgroundColor = "purple";
    } else if (userNumber > 80 && userNumber <= 100) {
        body.style.backgroundColor = "yellow";
    }
}

// function to change bg color from random no.
function changeRandomColor() {

    const randomNumber = Math.ceil(Math.random() * 100); // generates a random number 1-100
    console.log(randomNumber); // shows the number in the console

    if (randomNumber >= 0 && randomNumber <= 20) { // changes the background color based on the randomly generated number
        body.style.backgroundColor = "green";
    } else if (randomNumber > 20 && randomNumber <= 40) {
        body.style.backgroundColor = "blue";
    } else if (randomNumber > 40 && randomNumber <= 60) {
        body.style.backgroundColor = "orange";
    } else if (randomNumber > 60 && randomNumber <= 80) {
        body.style.backgroundColor = "purple";
    } else if (randomNumber > 80 && randomNumber <= 100) {
        body.style.backgroundColor = "yellow";
    }
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 

    if (imageSelect.options.length > 1) return; // checks length condition and prevents duplicates

    imageArray.forEach((src, index) => { // built in for loop to cycle through the imageArray
        const option = document.createElement("option"); // creates the element for the image
        option.value = src; // sets the value of the current index to an option
        option.textContent = `Image ${index + 1}`; // sets the text for the dropdown
        imageSelect.appendChild(option); // appends the option to the dropdown
    });
}

// function to change image
function changeImage() {

    const selectedValue = imageSelect.value; // gets the users selected image value

    if (selectedValue) { // if the user does select a image
        imageDisplay.src = selectedValue; // updates the src and alt of the iamge
        imageDisplay.alt = `Picture of ${selectedValue}`;
        imageDisplay.style.display = "block"; // if there is a src it will be display block
    } else { // if the user does not select a image
        imageDisplay.src = ""; // does not update the src and alt of the image
        imageDisplay.alt = "";
        imageDisplay.style.display = "none"; // stops placeholder box from showing
    }
}

// event listeners for on click event of buttons and select
customColorButton.addEventListener("click", changeCustomColor); // allows buttons to be clicked
randColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("click", addList);

// event listeners for on change event of select
imageSelect.addEventListener("change", changeImage); // allows image to be changed