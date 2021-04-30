const wakeUp = () => console.log('Acordando!!');

const breakfast = () => console.log('Bora tomar café!!');

const goingToSleep = () => console.log('Partiu dormir!!');

const doingThings = (action) => action(action);

doingThings(wakeUp);

doingThings(breakfast);

doingThings(goingToSleep);