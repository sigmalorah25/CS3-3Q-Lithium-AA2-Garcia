function popuGrowth() {
    let initialPopu = parseFloat(prompt('Input the Initial Population: '));
    let growthRate = parseFloat(prompt('Enter a number between 1-100: ')/100);
    let t = parseFloat(prompt('Enter a number of an hour: '));

    let finalPopu = Math.round((initialPopu)*(Math.E**(growthRate*t)));

    let monsterLocation = prompt('Enter the location of the monster: ');
    let monsterName = prompt('Enter the name of the monster: ');
    let monster = (monsterLocation.concat(' ', monsterName)).toUpperCase();
    
    document.getElementById('result').innerHTML = `After ${t} hours, the population of ${monster} has risen to ${finalPopu}!!!`;

}