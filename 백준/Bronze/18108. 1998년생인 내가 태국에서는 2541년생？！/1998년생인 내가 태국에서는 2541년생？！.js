const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("", (year) => {
    const transedYear = transformYear(year);
    printYear(transedYear);
    rl.close();
})

function transformYear(year) {
    return year - 543;
}

function printYear(year){
    console.log(year);
}

