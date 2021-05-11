// Gabarito da Trybe e PR do Luiz Wendel => coisa mais linda

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

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const dragonAttack = () => getRandomInt(15, dragon.strength);

const warriorAttack = () => getRandomInt(warrior.strength, warrior.strength * warrior.weaponDmg);

const mageAttack = () => {
  const { mana, intelligence } = mage;
  const hasMana = mana >= 15;
  return {
    dmgDelt: hasMana ? getRandomInt(intelligence, intelligence * 2) : 'Não possui mana suficiente!',
    manaSpent: hasMana ? 15 : 0,
  }
};

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack();
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack();
    const mageDamage = mageTurnStats.dmgDelt;
    const { manaSpent } = mageTurnStats;
    mage.damage = mageDamage;
    mage.mana -= manaSpent;
    dragon.healthPoints -= typeof dmgDelt === 'number' ? dmgDelt : 0;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack();
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => {
    console.log(battleMembers);
    return battleMembers;
  },
};

let hasEnded = false;
let turnCounter = 0;

while (!hasEnded) {
  turnCounter += 1;
  if (battleMembers.warrior.healthPoints > 0)
    gameActions.warriorTurn(warriorAttack);

  if (battleMembers.mage.healthPoints > 0)
    gameActions.mageTurn(mageAttack);

  if (battleMembers.dragon.healthPoints > 0)
    gameActions.dragonTurn(dragonAttack);

  console.log(`Turn (${turnCounter}) result:`);
  gameActions.turnResults();

  if (battleMembers.warrior.healthPoints <= 0 && battleMembers.mage.healthPoints <= 0) {
    console.log('Defeat! Dragon wins!');
    hasEnded = true;
  }

  if (battleMembers.dragon.healthPoints <= 0) {
    console.log('Victory! The dragon has been slain!');
    hasEnded = true;
  }
}
