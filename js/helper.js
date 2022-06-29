let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY + diffY));

}

let getDistanceHint = distance => {
    if (distance < 100) {
        return "HIRVIENDOOOOOOOO"
    } else if (distance < 200) {
        return "recontra caliente";
    } else if (distance < 300) {
        return "caliente";
    } else if (distance < 450) {
        return "tibio";
    } else if (distance < 550) {
        return "frioooooo";
    } else if (distance < 600) {
        return "recontra frio";
    } else {
        return "helado";
    }    
  }