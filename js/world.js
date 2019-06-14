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
        /*
        for(var l=1; l<9; l++) // CREER 8 LIGNES
        {
            document.querySelector('#table').write('<tr>');
            for(var c=1; c<9; c++) // CREER 8 CASES PAR LIGNE
            {

                if (nombre/2 == Math.round(nombre/2)) // classe CHANGE UNE CASE SUR DEUX (SI NOMBRE EST PAIR OU PAS)
                {var classe="caseBrun"}
                else
                {var classe="caseBlanc"}

                document.write('<td><a onMouseOver="position('+l+','+c+')"><div id="'+l+'|'+c+'" class="'+classe+'"></div></a></td>'); // CREATION DES CASES (position('+l+','+c+') EST COMPLETE PAR UNE FONCTION DE LOCALISATION DES CASES DANS UN AUTRE SCRIPT)
                nombre++;
            }
            nombre++;
            document.write('</tr>');
        }
        document.write('</table>');

    </script>
    }
}

/*
export default function world(size)
{
    // On présupose que le damier est carré,
    // C'est à dire  que son nombre de colone est égale à son nombre de ligne

    var ligne = new Array(size);


    for ( let i = 0 ; i < size ; i++)
    {
        let colonne = new Array(size);
        ligne[i] = colonne; // A chaque ligne, on ajoute les colonnes

        for (let j = 0; j < size; j++)
        {
            // Dans chaque case on test de savoir si on est sur un numéro de case pair ou impair
            // Pour cela, on additionne de sa position dans les lignes et dans les colonnes.

            ligne[i][j] = ( ((i+j)%2)== 0  ? 1 : -1);
        }
    }

    return(ligne);
};
*/
