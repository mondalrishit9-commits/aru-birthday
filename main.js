const message = `Happy Birthday Arunika ✨

I honestly didn’t want to make something ordinary for you.

So I made this little space just to remind you that
you’re genuinely one of the prettiest energies I’ve ever seen.

Not just by face —
but by the calm and softness you carry.

I hope this year gives you happiness,
peace,
success,
and moments that make you smile unexpectedly.

And selfishly…
I hope I get to see that smile more often 🌸

— Rishit`;

let index = 0;

function typeEffect(){

    if(index < message.length){

        document
        .getElementById("typing")
        .innerHTML += message.charAt(index);

        index++;

        setTimeout(typeEffect,35);
    }
}

window.onload = typeEffect;

/* stars */

const starsContainer =
document.querySelector('.stars');

for(let i=0;i<120;i++){

    let star =
    document.createElement('div');

    star.classList.add('star');

    star.style.left =
    Math.random()*100+'vw';

    star.style.top =
    Math.random()*100+'vh';

    star.style.animationDuration =
    Math.random()*3+2+'s';

    starsContainer.appendChild(star);
}

/* hearts */

function createHeart(){

    const heart =
    document.createElement('div');

    heart.classList.add('heart');

    heart.innerHTML='💖';

    heart.style.left =
    Math.random()*100+'vw';

    heart.style.fontSize =
    Math.random()*20+15+'px';

    heart.style.animationDuration =
    Math.random()*5+5+'s';

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);
}

setInterval(createHeart,400);

/* countdown */

const birthday =
new Date("July 7, 2026 00:00:00").getTime();

setInterval(()=>{

    const now =
    new Date().getTime();

    const distance =
    birthday-now;

    const days =
    Math.floor(distance/
    (1000*60*60*24));

    document
    .getElementById("countdown")
    .innerHTML =
    `Only ${days} days until Arunika’s special day 🎂`;

},1000);

/* popup */

function showMessage(){

    document
    .getElementById("popup")
    .classList.add('show');
}

/* glow effect */

document.addEventListener('mousemove',(e)=>{

    const glow =
    document.querySelector('.glow');

    glow.style.left =
    e.clientX - 250 + 'px';

    glow.style.top =
    e.clientY - 250 + 'px';
});