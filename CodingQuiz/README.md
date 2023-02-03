# Coding-Quiz

## Description

As an up and coming coder myself, I often feel that there are a lot of small functions or statements that I forget. It is important for someone aspiring to join the field to be spending time studying things you've already learned just as much as new things. With that being said, i felt it was worth creating a quiz for up and coming coders to refresh their basics in a fun and easy setting. This exists to stop coders from forgetting the important things that they may have learned early on in their studies. While craeting this I learned how to beter manipulate what can be seen on a webpage using display and append functions.

## Installation

This project requires no installation for usage rather than opening the website, following the link in a browser of your choice, and then using the buttons to activate the functions of the website. The project was built using git bash and microsoft visual code.

## Usage

The website shows two buttons, one that starts the quiz and one that shows your high scores. You can hit start, which will then show you a question and start a timer. Once the question is answered, it will send you to another question. After the third question, you will be shown your score and have an opportunity to enter your initials. After this you will be returned to the start quiz and view top scores buttons. Click start to restart the quiz and click topscores to reveal your top scores.

![Alt text](/Module4/Assets/screenshot.PNG)

## Credits

The completion of this project was aided by the efforts and assets of the rutgers computer science bootcamp. The lessons and challenges from the javascript, html, and api sections of the of the class served as a backbone for the construction of this project.

## License

This project was completed using the MIT license.


## Features

Features that are present in this website are a button with an event listener that starts a function. This function changes the display of the button and the quiz to show the questions, or it changes the display to show the top scores. This allows the user to complete the scores in the same container that they would do everything else on the website for ease of use. The timer is done using a setinterval function that has the time remaining value drop by one second. Upon completion of the quiz, a form with a submission box is shown in order for the user to enter their initials to be stored along with their response. The user score and their initials are stored in an array post completion of the quiz. The score and initials can then be accessed from the topscores button.