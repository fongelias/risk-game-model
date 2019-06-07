# risk-game-model
a model of [risk](https://www.hasbro.com/common/instruct/risk.pdf) games for analysis of competitive strategies

## Design
### Classes
#### Game
A board with a state given by a number of turns and the actions taken by players during them
#### Players
Classes which take action on a board during their turn
#### Board
A series of countries and the armies that occupy them
#### Countries
An area that is occupied by an army
#### Armies
A player owned force used to occupy countries
#### Turns
An abstraction of the passage of time in the game
#### Actions
A choice that a Player can make during their turn


