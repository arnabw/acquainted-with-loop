/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
for (let number = 1; number <= 100; number++) {
    let square = number * number;
    console.log(number);

    if (square === number || square > 100) {
        break;
    }
}
