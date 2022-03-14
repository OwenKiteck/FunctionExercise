function fozzieBear(){
    console.log(`Wacka Wacka!`);
}
fozzieBear();
console.log(`==================`);


function beaker(speak){
    console.log(speak);
    console.log(speak);
    console.log(speak);
    console.log(speak);
}
beaker(`Meep`);
console.log(`==================`);


function muppetShow(a, b){
    if (a === `Muppet` && b === `Show`){
        console.log(`It's time to play the music. It's time to light the lights.`);
    }
}
muppetShow();
muppetShow(`Muppet`, `Show`);
console.log(`==================`);


function kermit(){
    return `Kermit The Frog`;
}
console.log(kermit());
console.log(`==================`);


function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    } else {
        return false;
    }
}
console.log(muppetShowSeasons());
console.log(muppetShowSeasons(5));
console.log(`==================`);


const manOrMuppet = function (){
    console.log(`Am I a man or am I a Muppet?`);
}
manOrMuppet();
console.log(`==================`);

rainbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me";
console.log(rainbowConnection());
console.log(`==================`);

// 8.) Answer: no
// 9.) Answer: yes

const newMuppetsMovies = [
    `The Muppets`,
    `Muppets Most Wanted`,
];

const upperMovies = newMuppetsMovies.map(function(u){
    return u.toUpperCase()
});
console.log(upperMovies);