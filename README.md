# SEI 23 (Project 1 - Simon Game)

## Game flow:
1. Player will start the game by pressing any keyboard button.
2. First, the game will flash a random color, player is require to click on the same color. 
3. After clicking the correct color, one of the button will randomly flash again. Player is require to press the buttons in order.
4. If the player chose the wrong button, game over.
5. The game will keep on adding the pattern and the player is required to press the pattern in order from starting to the end.

## Project Structure:
- HTML: Create basic layout for the four Simon Button and text display.
- CSS: Styling of the buttons, text and background. Animation is also used from CSS with DOM manipulation of CSS by adding/removing classes.
- JavaScript: Game logics, control the game flows by using conditional statements,arrays, functions and intervals.
- DOM manipulation: Using eventlistener such as "click", "keypress", audio etc to make the game interactive to the player.

## Minimum functionality:
- [x] Have simple animation and sounds when the button was being pressed and randomly selected by the program.
- [x] Able to play the game continuously until the user press wrong button
- [x] When game-over, the user is able to restart and start the game again to it's original state
- [ ] Record the highest score user has so-far

## Further:
- Add additional difficulty for the player to choose from. E.g. Backward sequence/More buttons
- Instead of the normal simon game color, add more color and randomly assigned by the program.
- 

## Reference: 
#### Simon Game: 
- https://www.ultraboardgames.com/simon/index.php
