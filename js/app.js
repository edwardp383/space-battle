class Ship {
	constructor(hull, firepower, accuracy) {
		this.hull = hull;
		this.firepower = firepower;
		this.accuracy = accuracy
	}

}

const hero = new Ship(20, 5, .7)
const alienFactory = {
	aliens: [],
	generateShip(){
		const newAlien = new Ship(
				Math.floor(Math.random() * ((6 - 3) +1) + 3),
				Math.floor(Math.random() * ((4 - 2) + 1) + 2),
				Math.random() * (.8 - .6) + .6
			);
		this.aliens.push(newAlien);
		return newAlien;
	}

}
console.log(alienFactory.generateShip())
console.log(aliens);

