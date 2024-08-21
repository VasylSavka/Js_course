const colors_hex = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#00FFFF",
    "#FF00FF",
    "#800000",
    "#008000",
    "#000080",
    "#808000",
    "#008080",
    "#800080",
    "#C0C0C0",
    "#808080",
    "#000000",
    "#FFFFFF",
    "#FFA500",
    "#FF1493",
    "#8A2BE2",
    "#228B22",
    "#ADFF2F",
    "#483D8B",
    "#FF69B4",
    "#4682B4",
    "#DC143C",
    "#DA70D6",
    "#F4A460",
    "#FFE4B5",
    "#6B8E23",
    "#00FF7F",
    "#F08080",
    "#BA55D3",
    "#90EE90",
    "#2E8B57",
    "#7FFFD4",
    "#C71585",
    "#8B008B",
    "#FF6347",
    "#D2691E",
    "#6495ED",
    "#D8BFD8",
    "#FFFACD",
    "#00BFFF",
    "#4169E1",
    "#8B4513",
    "#FFDAB9",
    "#ADD8E6",
    "#F5DEB3",
    "#FFDEAD",
]

const button = document.querySelector('.random');
const circleArea = document.querySelector('.circle-area');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

button.addEventListener('click', () => {
    circleArea.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        const circle = document.createElement('div');
        const random = Math.floor(Math.random() * 50) + 1;
        const randomX = Math.floor(Math.random() * (windowWidth - circle.clientWidth));
        const randomY = Math.floor(Math.random() * (windowHeight - circle.clientHeight));
        const randomColor = colors_hex.find((el, i) => random === i ? el : '');


        circle.classList.add('circle');
        circle.style.backgroundColor = randomColor;
        circle.style.left = randomX + 'px';
        circle.style.top = randomY + 'px';
        circleArea.appendChild(circle);
    }
})