# Beer Quiz
The summer is right in the corner and what's better than a cold beer in the sun after work?
Why not combine a cold beer along with our game?
In this game the user will test their general knowledge about beer.

The player will be asked 9 questions in a randomly order and they will gain 100 points for each correct answer.
![Responsive Screenshot](/assets/images/Am%20I%20Responsive.png)

## Features
* The Beer Quiz logo & Heading
    * Featured at the top center regardless of device screen-size.
    * Visible for the player so that they know the name of the game.
    * Logo is clickable and refers to index.html.
![Logo and Heading Screenshot](/assets/images/logoheading.png)

* Home page
    * This area lets the player to play the game or to check the leaderboard page.
![Home page Screenshot](/assets/images/home-container.png)

* The Game Area
    * This page lets the user directly jump into the game and will retrieve a random question with 4 available choices.
    * The question-container will randomly choose one of the 9 questions.
    * If answer is correct the score will update with 100 and choice-box's background-color will turn green.
    * If answer is incorrect the choice-box's background-color will turn red.
    * Whether the answer is correct / incorrect the question counter will update with +1 when next question shows up after 1s delay.
![Game area Screenshot](/assets/images/game-area.png)

* The result page
    * Featured with the player's score.
    * The player will have the option to save their score with a username to the Leaderboard page.
    * The username and score will be saved locally on user's device and not online.
![Result page Screenshot](/assets/images/results-area.png)

* Leaderboard page
    * Featured with the top 5 latest highscores.
    * The highscore list is ordered by the best score.
![Leaderboard page Screenshot](/assets/images/scoreboard-page.png)

## Testing
* The site was tested and fully working in the following browsers: Chrome, Brave and Safari (iOS).
* I have confirmed that the site is responsive on smaller and bigger screen devices (desktop & mobile).
* I have confirmed that all Javascript functions are working without errors. (Question counter, new question, randomize question, start game, score update, correct/incorrect answer, save username / score)
* I have confirmed that all buttons and links are working and that all visible text are easy to see and follow for the user.

### Bugs
* When I first deployed the website I noticed that the player wouldn't proceed to the result page (end.html) after the last question was submitted. 
I went back to game.js and saw that I haven't use a relative path to that page.

### Validator Testing
* HTML
    * No errors were returned when passing through the [Official W3C Validator](https://validator.w3.org/)
* CSS
    * No errors were found when passing through the [Official Jigsaw Validator](https://jigsaw.w3.org/css-validator/)
* Javascript
    * No errors were found when passing through the official [Jshint validator](https://jshint.com/)
        - The metrics that returned of these 3 javascript files:
        - **highscore.js** = There is only one function in this file. It takes one argument. This function contains only one statement. Cyclomatic complexity number for this function is 1.

        - **game.js** = There are 7 functions in this file. Function with the largest signature take 1 arguments, while the median is 1. Largest function has 11 statements in it, while the median is 2. The most complex function has a cyclomatic complexity value of 4 while the median is 1.

        - **end.js** = There are 3 functions in this file. Function with the largest signature take 2 arguments, while the median is 1. Largest function has 7 statements in it, while the median is 1. The most complex function has a cyclomatic complexity value of 1 while the median is 1.

### Unfixed Bugs
No unfixed bugs found.

## Deployment

* The site was deployed through Github pages. The steps are following:
    * In the Github repository, go to Settings
    * On the left drop down menu, select Pages
    * In the source section, select Branch:main.
    * Once you select the main Branch, the page will provide a link to the complete website.
You find the link here: [Beer Quiz](https://teodorstrom.github.io/beer-quiz){:target="\_blank"}

## Credits
* The core javascript code and structure of code is inspired and learned from [James Q Quick](https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript)
* Colors chosen are:
    * Orange #f78536
    * Whiteblue #dfebed
    * Blue #497285
    * Darkblue #2b4450


