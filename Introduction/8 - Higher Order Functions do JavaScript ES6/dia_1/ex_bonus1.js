const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Exercício 1
const dragonDamage = () => dragon.damage = 15 + (Math.ceil(Math.random() * dragon.strength));

// Exercício 2
const warriorDamage = () => warrior.damage = warrior.strength + (Math.ceil(Math.random() * (warrior.strength * warrior.weaponDmg)));

// Exercício 3
const mageMana = () => (mage.mana >= 15) ? mage.mana -= 15 : mage.damage = 'Não possui mana suficiente';

const mageTurn = (block) => {
  return {
    damage: mage.intelligence + (Math.ceil(Math.random() * (mage.intelligence * 2))),
    mana: block(),
  }
}

mageTurn(mageMana);