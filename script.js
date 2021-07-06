const grid=document.getElementById('grid');
let emoji=['🌞', '🌙', '👽', '🪐', '☄️', '✨'];
let matrizSize;
let itemSize;

//random emoji generator
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

//select level 
const selectLevel = () => {
    swal({
        title: 'Nuevo Juego',
        buttons: {
            facil: {
                text: 'Fácil',
                value: 'easy',
                className: 'btn-play',
            },
            medio: {
                text: 'Medio',
                value: 'normal',
                className: 'btn-play',
            },
            dificil: {
                text: 'Difícil',
                value: 'hard',
                className: 'btn-play',
            },
        },
    }).then((value) => {
    switch(value) {

        case 'easy':
            matrizSize=9
            itemSize=56
            gridGenerator(matrizSize, itemSize);
            break;
            
        case 'normal':
            matrizSize=8
            itemSize=63
            gridGenerator(matrizSize, itemSize);
            break;
            
        case 'hard':
            matrizSize=7
            itemSize=72
            gridGenerator(matrizSize, itemSize);
            break;

        default:
            swal({icon:'error'});
            selectLevel();
        }
            
    });
}





//rules card
// Swal.fire({
//     title: '¡Bienvenida!',
//     html: '<p class="modal">En MatcheADAs tu objetivo es juntar tres o más ítems del mismo tipo,ya sea en fila o columna. Para eso, selecciona un ítem y a continuación un ítem adyacente para intercambiarlos de lugar.<br>Si se forma un grupo, esos ítems se eliminarán y ganarás puntos.¡Sigue armando grupos de 3 o más antes de que se acabe el tiempo!</p><br><span class="modal">CONTROLES</span><p class="modal">Click izquierdo: selección</p><p class="modal">Enter o Espacio: selección</p><p class="modal">Flechas o WASD: movimiento e intercambio</p>',
//     confirmButtonText: 'JUGAR',
//     padding:'1rem',
//     backdrop:true,
//     customClass: {
//         confirmButton: 'btn-play'
//     },
//     showConfirmButton: true,
//     confirmButtonColor: '#f87372',
//     confirmButtonAriaLabel: 'Iniciar el juego',

// }).then(() => {
//     selectLevel();
// });