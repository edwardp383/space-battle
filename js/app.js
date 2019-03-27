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
for (let i = 0; i < 6 ; i++) {
	alienFactory.generateShip()
}
console.log(alienFactory.aliens);



//our ship firing on 1st array ship
const attack =  () => {
	alienFactory.aliens[0].hull -= hero.firepower;
	return alienFactory.aliens[0].hull;
	// body...
}

console.log(attack());






//for (var i = 0; i < ; i++) {
//	if (hull <= 0){
//		remove ship
//}
//
//
//
//	else	
// }


























