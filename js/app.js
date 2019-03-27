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
	while(hero.hull > 0){
		alienFactory.aliens[0].hull -= hero.firepower;
		if(alienFactory.aliens[0].hull <= 0){
			alienFactory.aliens.splice(0, 1);
			console.log("Alien ship destroyed!")
			break
		} else {
			hero.hull -= alienFactory.aliens[0].firepower;
		}
	}
	return `Your hull is at ${hero.hull}. ${alienFactory.aliens.length} alien ships remain.`;
}

console.log(attack());



























