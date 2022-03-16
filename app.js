const sunX = window.innerWidth / 2 - 25;
const sunY = window.innerHeight / 2 - 25;


const sun = document.querySelector('.sun');
sun.style.left = `${sunX}px`;
sun.style.top = `${sunY}px`;

const mercury = {
    speed: 0.05,
    theta: 0,
    radius: 70,
    el: document.querySelector('.mercury')
};

const venera = {
    speed: 0.09,
    theta: 4,
    radius: 100,
    el: document.querySelector('.venera')
};

const earth = {
    speed: Math.random() * 0.01 + 0.02,
    theta: Math.random() * 2 * Math.PI,
    radius: 140,
    el: document.querySelector('.earth')
};

const mars = {
    speed: Math.random() * 0.01 + 0.02,
    theta: Math.random() * 2 * Math.PI,
    radius: 250,
    el: document.querySelector('.mars')
};

planets = [
    mercury,
    venera,
    earth,
    mars
]


function updatePlanet(planet){
    planet.theta += planet.speed;
    //заставляем ходить по кругу
    planet.el.style.left = `${Math.cos(planet.theta) * planet.radius + sunX + 25}px`;
    planet.el.style.top = `${Math.sin(planet.theta) * planet.radius + sunY + 25 }px`;
}

setInterval(() => {
    planets.forEach(updatePlanet);
}, 100);