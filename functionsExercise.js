function fozzieBear() {
    console.log(`Wacka Wacka!`);
}
fozzieBear();
console.log(`==================`);


function beaker(speak) {
    for (i = 1; i <= 4; i++) {
        console.log(speak);
    }
}
beaker(`Meep`);
console.log(`==================`);


function muppetShow(a, b) {
    if (a === `muppet` && b === `Show`) {
        console.log(`It's time to play the music`);
    }
}
muppetShow();
muppetShow(`muppet`, `Show`);
console.log(`==================`);


function kermit() {
    return `Kermit The Frog`;
}
kermit();
console.log(`==================`);


function muppetShowSeasons(seasons) {
    if (seasons === 5) {
        return true;
    } else {
        return false;
    }
}
muppetShowSeasons();
muppetShowSeasons(5);
console.log(`==================`);


const manOrMuppet = function (){
    console.log(`Am I a man or am I a Muppet?`);
}
manOrMuppet();
console.log(`==================`);

rainbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me";
console.log(`==================`);

// 8.) Answer: no
// 9.) Answer: yes

const newMuppetsMovies = [
    `The Muppets`,
    `Muppets Most Wanted`,
];

const newArray = newMuppetsMovies.map()