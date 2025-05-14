ServerEvents.recipes(event => {
    event.remove({ id: 'minecraft:firework_rocket' });
    event.remove({ id: 'minecraft:firework_rocket_simple' });
    event.remove({ id: 'minecraft:firework_star' });
    event.remove({ id: 'minecraft:firework_star_fade' });
});