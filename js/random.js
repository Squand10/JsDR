
function cheatedDice(x) {
    return Math.floor(Math.random() * x + 4)
}
//pour un dé 6, lancer dice(6)
//pour un dé 20, lancer dice(20)
//etc...
function dice(x) {
    return Math.floor(Math.random() * x + 1);
}



//Ajoute du texte au journal de combat, scroll automatiquement vers le bas du journal
function feed(x){

    document.getElementById('feed').insertAdjacentHTML("beforeend", '<p>'+x+'</p>');
    return document.getElementById('feed').scrollTop = 999999;
}


//donne plusieurs attributs à un élement
function setAttributes(el, attrs) {
    for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

export {cheatedDice, dice, feed, setAttributes};


