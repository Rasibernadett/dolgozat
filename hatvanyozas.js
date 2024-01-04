
function hatvanyoz(tomb, kitevo) {
    if (!(tomb instanceof Array) || typeof kitevo !== "number")
        return [];
    return tomb.map(elem => elem ** kitevo);
}