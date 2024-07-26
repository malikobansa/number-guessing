
const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const myResult = document.getElementById('myResult');
const myImage = document.getElementById('myImage');

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;

mySubmit.onclick = () => {
    let guess = Number(myText.value);

    // Clear previous image
    myImage.innerHTML = '';

    if (isNaN(guess)) {
        myResult.textContent = "Please enter a valid number";
    } else if (guess < minNum || guess > maxNum) {
        myResult.textContent = `Please enter a valid number between ${minNum} - ${maxNum}`;
    } else {
        attempts++;
        let img = document.createElement('img');
        img.setAttribute("style", "width:300px; height:300px");

        if (guess < answer) {
            myResult.textContent = "TOO LOW! TRY AGAIN!";
            img.src = '/img/sad.svg';
        } else if (guess > answer) {
            myResult.textContent = "TOO HIGH! TRY AGAIN!";
            img.src = '/img/sad.svg';
        } else {
            myResult.textContent = `CORRECT! The answer was ${answer}. It took you ${attempts} attempts`;
            img.src = '/img/success.svg';
        }
        myImage.appendChild(img);
    }
};