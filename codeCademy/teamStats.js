// This is a simple app that will focus on getters and setters in oop

// The team object which contains arrays of objects with the player data and game data
const team = {
	_players: [
		{ fristName: 'Jerry', lastName: 'Seinfeldt', age: 22 },
		{ fristName: 'George', lastName: 'Costanza', age: 51 },
		{ fristName: 'Cosmo', lastName: 'Kramer', age: 58 },
	],
	_games: [
		{ opponent: 'Shitters', teamPoints: 20, opponentPoints: 21 },
		{ opponent: 'Springfield', teamPoints: 12, opponentPoints: 31 },
		{ opponent: 'South Park', teamPoints: 1, opponentPoints: 92 },
	],
	// Getter for players
	get players() {
		return this._players;
	},
	// Getter for games
	get games() {
		return this._games;
	},
	// Method that will copy the same style as the objects and pushes new players to the array
	addPlayer(newFirstName, newLastName, newAge) {
		let player = {
			firstName: newFirstName,
			lastName: newLastName,
			age: newAge,
		};
		// we are using the Getter from before to reference the _player data without compromizing the privacyt
		this.players.push(player);
	},
	addGame(newOpponent, newTeamPoints, newOpponentPoints) {
		let game = {
			opponent: newOpponent,
			teamPoints: newTeamPoints,
			opponentPoints: newOpponentPoints,
		};
		this.games.push(game);
	},
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);

team.addGame('Titans', 100, 98);
console.log(team._games);
