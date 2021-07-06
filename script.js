const grid=document.getElementById('grid');
let emoji=['🌞', '🌙', '👽', '🪐', '☄️', '✨'];
let matrizSize;
let itemSize;

//randon emoji generator
const randomItems =() => {
    let emojiRandom=emoji[Math.floor(Math.random()*emoji.length)];
    return emojiRandom;
    //console.log(emojiRandom)
}

const gridGenerator = (matrizSize, itemSize) => {
    for (let row=0; row<matrizSize; row++){
        for (let column=0; column<matrizSize; column++){
            const square= document.createElement('div');
            //square size
            square.style.width = `${itemSize}px`;
            square.style.height = `${itemSize}px`;
            //square position
            square.style.position = 'absolute';
            square.style.left = `${column*itemSize}px`;
            square.style.top = `${row*itemSize}px`;
            //square style
            square.classList.add('square');
            square.style.textAlign= 'center'
            square.style.verticalAlign='center'
            square.style.fontSize='2rem';
            //starts printing emojis
            square.innerText=randomItems();
            // set attributes data to square
            square.setAttribute('data-x', column);
            square.setAttribute('data-y', row);
            //put dom at html
            grid.appendChild(square);

        }
    }
}

