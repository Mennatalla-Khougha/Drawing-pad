const fixed = document.getElementById('check-fixed')
const hover = document.getElementById('check-hover')
const boxes = document.getElementById('boxes')
const clear = document.getElementById('clear')
const input = document.getElementById('number')

//Create the boxes of the board.
let board  
createBoxes()
function createBoxes(){
    input.addEventListener('input', () => { 
        let boxesNumber = input.value;
        for(let i = 0; i < boxesNumber; i++){
            const box = document.createElement('div')
            box.classList.add('box')
            boxes.appendChild(box)
            
            clear.addEventListener('click', () => removeColor(box))

            if(hover.checked){
                box.addEventListener('mouseover', () => setColor(box))
                box.addEventListener('mouseout', () => removeColor(box))
            }else {
                box.addEventListener('mouseover', () => setColor(box))

            } 
        };
        
        removeBoxes()
        function removeBoxes() {
            const squares = document.querySelectorAll('.box')
            const extra =  squares.length - boxesNumber
            if (boxesNumber > 0) {
                for(let i = 0; i < extra; i++){
                    squares[i].remove()
                }
            }
        }
    });

} 

//Get a random color 
const colorsArray =  ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D', '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933', '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
function getRandomColor(){
    return colorsArray[Math.floor(Math.random() * colorsArray.length)];
}
// Create the drawing when the mouse enter the board
function setColor(ele){
    const color = getRandomColor();
    ele.style.backgroundColor = color
    ele.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

// Create the hoverboard effect when hover radio is clicked.
function removeColor(ele){
    ele.style.backgroundColor = '#1d1d1d'
    ele.style.boxShadow ='0 0 2px #000'
}