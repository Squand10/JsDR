export default function cheatedDice(x){
    return Math.floor(Math.random()*x+4)
}

export function dice(x){
    return Math.floor(Math.random()*x +1);
}

 //pour un dé 6, lancer dice(6)
//pour un dé 20, lancer dice(20)
//etc...
