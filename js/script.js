import Perso from './perso.js';
import Mob from './mob.js';
import Item from './item.js';
import World from './world.js';

const squand = new Perso(1, 'Squand', 150, 0, 50, 45, 45);
const csq = new Item('Casque', 14, 10 ,10 ,10);
let gob = new Mob ("Gobelin", 110, 10 , 30 , 5);



document.getElementById('up').addEventListener("click", function(){
    squand.move(0,-94);
});
document.getElementById('right').addEventListener("click", function(){
    squand.move(94, 0);
});
document.getElementById('down').addEventListener("click", function(){
    squand.move(0, 94);
});
document.getElementById('left').addEventListener("click", function(){
    squand.move(-94, 0);
});

document.getElementById('attack').addEventListener("click", function(){
    let target = prompt();
    squand.attack(eval(target));
});




console.log(csq.decrire());
console.log(squand.decrire());
console.log(gob.decrire());

let level1=new World();
level1.buildLevel();
