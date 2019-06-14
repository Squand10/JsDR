import {cheatedDice} from "./random.js";
import {setAttributes} from "./random.js";

export default class World {
    constructor() {
        this.height = cheatedDice(8);
        this.width = cheatedDice(8);
    }



    //Construit le damier avec une id propre à chaque case
    buildLevel() {
        let table = document.querySelector('table');
        for (let i = 0; i < this.width; i++) {
            let row = table.insertRow(i);
            for (let j = 0; j < this.height ; j++) {
                if ((j%2==0&i%2!=0)|(j%2!=0&i%2==0)) {
                    let col = row.insertCell(j);
                    setAttributes(col,{"class":"brown", "id":""+i+""+j+""});
                } else {
                    let col = row.insertCell(j);
                    setAttributes(col,{"class":"black", "id":""+i+""+j+""});
                }
            }
        }
    }
}