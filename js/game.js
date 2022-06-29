const WIDTH = 700;
const HEIGH = 700;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

let $map = document.getElementById('map');
let $distance = document.getElementById('distance')
let clicks = 0;

$map.addEventListener('click', function (e) {
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`

    if (distance < 50) {
        alert(`buenaaaaaaaaaaaaaaaaaa, en ${clicks} clicks.` )
        location.reload();
    }
})