# Tic Tac Boo

Tic Tac Boo is a spookier version of the popular game, Tic Tac Toe.
[Click here to play, if you dare!](https://anderssonlinda.github.io/tictacboo/)
## How to play

Tic Tac Toe is traditionally played on a 3 x 3 grid and with circles and crosses for tokens. The game takes two players who takes turns to choose where to place their token. The first player to have three tokens in a row, vertically, horizontally or diagonally. 
In Tic Tac Boo you choose a colour for your token and the grid is made up of windows on a building.

## Development
### Technologies used:
- HTML
- CSS
- JavaScript

### Planning

I made a very rough plan (see roughplan.pdf) including initial ideas and thoughts about design, features, technical solutions and inspiration photos. I also set goals of when different part should be finished (ex. Basic functions completed by 3pm day one) to make sure the project was getting completed in a timely manner. 

### Developing stage

I stared of with making a very basic model of the game by placing nine divs within a div to represent the building. That allowed me to make all the basic functions of the game and making sure it was all working seamlessly. When I had created a basic Tic Tac Toe I started styling it with CSS. When it looked closer to what I had planned I reassessed how much time had passed and how much time I had left and decided to add more features before polishing the CSS to the game’s final design. 

## Problems 

### Fixed problems 
-	How to freeze game 
When a player had a winning combination the players could still click on the windows which could mean there would be two winners so I solved that by removing the event listeners on all the windows when one of the players got three in a row. 

-	Clicking same window twice 
Player 2 could click the same window that player 1 had already chosen, I solved this by removing the event listener on the window after it had been clicked the first time. 

-	Fade out the instruction ghost 
I wanted the ghost with instructions of how to customize the colour and/or name to fade out and stay hidden when clicked. I tried adding CSS animation and it would fade out but pop back in. Then I tried to hide the element but it would hide it before the fade out was completed so I thought of what would make the ghost stay transparent instead so with changing the opacity to 0 after the fade out instead of changing visibility created the effect I was after. 

-	Background gradient
I used CSS positioning to fix the building to the bottom of the page but then it wouldn’t let me make the gradient background on the body element. I solved this by making giving the HTML element a height of 100% which then allowed me to use a gradient as background on the body element. 

-	Centre the game in the browser  
I centred the game but there was too much spacing in between the element when the screen was wide. To solve that I had to wrap all the elements of the game in two divs, the outer div to centre the content in the browser and an inner one width a max width so elements wouldn’t stretch out further than that. I had to make them two separate ones because the inner one has a fixed position to fix it to the bottom of the page. 

### Problems to solve 

-	Improve design for mobile
I’ve started making it functional for small screens but it needs improvement. It looks ok for most small screens but not all. Where the players choose colour and name is too small for touch screen so I would like to add a solution for that.

-	Make player customisation more intuitive 
I added the instruction ghost to tell the players where they can customise their name and colour but I would like to make this more intuitive so the ghost is not needed. 

## Lessons 

It would’ve been wise to plan for the small screen version when constructing the big screen version to make the transition between the two as smooth as possible. 

The importance of readable code became very obvious when I started to add more features and styling. Being able to clearly understand what code does or what it targets saves so much time and makes the work flow run a lot smoother. 
