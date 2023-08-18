class Character{
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name){
        this.name = name;
    }

    get life(){
        return this._life;
    }
    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Miranha extends Character{
    constructor(name){
        super(name);
        this._life = 100;
        this.attack = 14
        this.defense = 8
        this.maxLife = this.life
    }
}
class Ironman  extends Character{
    constructor(name){
        super(name);
        this._life = 100;
        this.maxLife = this._life;
        this.attack = 10;
        this.defense = 10;
    }
}
class Duendeverde extends Character{
    constructor(){
        super('Duende Verde');
        this._life = 100;
        this.attack = 8;
        this.defense = 12;
        this.maxLife = this._life;
    }
}

class Sandman extends Character{
    constructor(){
        super('Homen de Areia');
        this._life = 100;
        this.attack = 8;
        this.defense = 15;
        this.maxLife = this._life;
    }
}

class Stage{
    constructor(fighter1,fighter2,fighter1El,fighter2El){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }

    start(){
        this.update();
    }
    update(){
        this.fighter1El = document.querySelector('.name');
        console.log(this.fighter1El);
        this.fighter1El.innerHTML = this.fighter1.name;
        this.fighter2El = document.querySelector('.nameMonster');
        this.fighter2El.innerHTML = this.fighter2.name;
    }
}