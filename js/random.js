function cheatedDice(x) {
    return Math.floor(Math.random() * x + 4)
}
function dice(x) {
    return Math.floor(Math.random() * x + 1);
}
//pour un dé 6, lancer dice(6)
//pour un dé 20, lancer dice(20)
//etc...


function feed(x){

    document.getElementById('feed').insertAdjacentHTML("beforeend", '<p>'+x+'</p>');
    return document.getElementById('feed').scrollTop = 999999;
}
//Ajoute du texte au journal de combat



export {cheatedDice, dice, feed};


