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

const warriorDamage = () =>
  warrior.strength + (Math.ceil(Math.random() * (warrior.strength * warrior.weaponDmg)));

const warriorTurn = (block) => {
  warrior.damage = block => block();
  dragon.healthPoints -= warrior.damage;
}

const mageMana = () => 
  mage.mana < 15
  ? mage.damage = 'Não possui mana suficiente'
  : mage.mana -= 15;

const mageTurn = (block) => {
  if (typeof mage.damage === 'number') dragon.healthPoints -= mage.damage;
  mage.damage = mage.intelligence + (Math.ceil(Math.random() * (mage.intelligence * 2)));
  mage.mana = block();
}

const dragonDamage = () => 15 + (Math.ceil(Math.random() * dragon.strength));

const dragonTurn = (block) => {
  dragon.damage = block();
  mage.healthPoints -= dragon.damage;
  warrior.healthPoints -= dragon.damage;
}

const turnResult = () => {
  console.log(battleMembers);
  return battleMembers = { mage, warrior, dragon };
}

const gameActions = {
  warriorTurn: warriorTurn(warriorDamage),
  mageTurn: mageTurn(mageMana),
  dragonTurn: dragonTurn(dragonDamage),
  turnResult,
};
