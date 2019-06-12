export default class Perso {
    constructor(lvl, nom, vie, armor, force, agi, inte){
        this.lvl = lvl;
        this.nom = nom;
        this.vie = vie;
        this.armor = armor;
        this.force = force;
        this.agi = agi;
        this.inte = inte;
        this.xp = 0;
        this.gold = 0;
        this.x = 0;
        this.y = 0;
}

decrire(){
        return `${this.nom} est de niveau ${this.lvl} a ${this.vie} vie, ${this.armor} d'armure, ${this.force} force, ${this.agi} agilité, ${this.inte} intelligence, ${this.xp} points d'expérience et ${this.gold} pièces d'or`;
}


move(x,y){
        this.x += x;
        this.y += y;
        document.getElementById('hero').style.transform = "translate("+this.x+"px,"+this.y+"px)";
}
attack(cible){
    if (cible.nom === null) {
        console.log(`Vous frappez dans le vide`);
        return;
    }
    console.log(`${this.nom} attaque ${cible.nom}`);
        cible.vie -= this.force;
    if (cible.vie <= 0){
            this.gold += cible.gold;
            this.xp += cible.xp;
            console.log(`${cible.nom} a été vaincu. Vous Gagnez ${cible.gold} pièces d'or et ${cible.xp} points d'experience.`);
            cible.xp = null;
            cible.gold = null;
            cible.nom = null;
        } else {
        console.log(`${cible.nom} a subit ${this.force} points de dégats`);
    }

}

equip(item){
        console.log(`${this.nom} a equipé ${item.nom}`);
        this.armor += item.armor;
        this.force += item.force;
        this.agi += item.agi;
        this.inte += item.inte;
}

}