const btn = document.getElementById('btn')
const boxesContainer = document.getElementById('boxes');

btn.addEventListener('click', () => {
    boxesContainer.classList.toggle('big')
});

createBoxes()

function createBoxes() {
    for(let i = 0; i < 4; i ++){
        for(let j = 0; j < 4; j ++){
            const box = document.createElement('div');
            box.classList.add('box')
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
            boxesContainer.appendChild(box);
        }
    }
}










// function createBoxes() {
//     let y = 0;
//     let x = 0;
//     for(let i = 0; i < 4; i++) {
//         x = 0;
//         for(let j = 0; j < 4; j++){
//             const box = document.createElement('div')
//             box.classList.add('box')
//             box.style.backgroundPosition = `${x}px ${y}px`
//             boxesContainer.appendChild(box)
//             x -= 125;
//         }
//         y -= 125;
//     }
// }