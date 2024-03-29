import Perso from './perso.js';
import Mob from './mob.js';
import Item from './item.js';
import World from './world.js';
import {setAttributes} from "./random.js";
import {dice} from "./random.js";


const squand = new Perso(1, 'Squand', 150, 0, 50, 45, 45);
const csq = new Item('Casque', 14, 10 ,10 ,10);
let gobelin = new Mob ("Gobelin", 110, 10 , 30 , 5);

let level1=new World();
level1.buildLevel();



//Position Héros
let heroSpawn = document.getElementById(''+squand.x+''+squand.y+'');
let createHero = document.createElement("img");
setAttributes(createHero,{"src":"images/dude.png","id":"hero"});
heroSpawn.appendChild(createHero);



document.addEventListener("keydown", (e)=> {
    if (e.code === 'ArrowUp') {
        squand.move(0,-94);
        squand.x+=1;
        squand.y+=1;

    }
});


document.addEventListener("keydown", (e)=>{
    if (e.code === 'ArrowRight') {
        squand.move(94, 0);
    }
});

document.addEventListener("keydown", (e)=>{
    if (e.code === 'ArrowDown') {
        squand.move(0, 94);
    }
});


document.addEventListener("keydown", (e)=>{
    if (e.code === 'ArrowLeft') {
        squand.move(-94, 0);
    }
});





//Touche Attaque
document.getElementById('attack').addEventListener("click", function(){
    let target = prompt("Indiquez la cible(ex: gobelin)");
    squand.attack(eval(target));
});
document.addEventListener("keydown", (e)=> {
    if (e.code === 'KeyT') {
        let target = prompt("Indiquez la cible(ex: gobelin)");
        squand.attack(eval(target));
    }
});



//Fait spawn les gobelins aléatoirement sur le damier (empêche deux gobelins sur la même case)

for (let i=0; i<4; i++){
    let gobSpawn = document.getElementById(""+dice(level1.width-1)+""+dice(level1.height-1)+"");
    let createGob = document.createElement("img");
    setAttributes(createGob,{"src":"images/gob.png","id":"gob"+i+"","class":"gobelins"});

    let nodeGob = document.querySelectorAll(".gobelins");
    for (let j=0; j<4; j++) {
        if(gobSpawn.contains(nodeGob[j])){
            gobSpawn = document.getElementById(""+dice(level1.width-1)+""+dice(level1.height-1)+"");
            j=-1;
        }
    }
    gobSpawn.appendChild(createGob);
}



