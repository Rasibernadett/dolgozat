function otoslotto() {
    const lottoszamok = [];
    while (lottoszamok.length < 5) {
        const lottoszam = Math.floor(Math.random() * 90 + 1);
        if (!lottoszamok.includes(lottoszam))
            lottoszamok.push(lottoszam);
    }
    lottoszamok.sort((a, b) => a - b);

    return lottoszamok;
}