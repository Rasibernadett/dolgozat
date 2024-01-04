function szepTomb(tomb) {
    if (!(tomb instanceof Array))
        return false;
    if (tomb.length <= 1)
        return true;

    const tipus = typeof tomb[0];

    for (let i = 1; i < tomb.length; i++)
        if (typeof tomb[i] !== tipus)
            return false;
    return true;
}