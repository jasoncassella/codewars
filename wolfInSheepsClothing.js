function warnTheSheep(queue) {
  if (queue[queue.length - 1] === 'wolf') {
    return 'Pls go away and stop eating my sheep';
  } else {
    const sheepInDanger = (queue.length - queue.indexOf('wolf') - 1);
    return `Oi! Sheep number ${sheepInDanger}! You are about to be eaten by a wolf!`;
  }
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));