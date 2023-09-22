function counting() {
    let i;

    for(i=0 ; i<5 ; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 100);
    }
}

function counting() {
    for(let i=0 ; i<5 ; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 100);
    }
}

counting();