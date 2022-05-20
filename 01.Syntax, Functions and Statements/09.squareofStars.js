function squareOfStars(size) {
    let line = '* '.repeat(size);

    for (let i = 0; i < size; i++) {
        console.log(line);
    }
}
squareOfStars(10)