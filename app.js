const btn = document.querySelector('.btn');
const hexBtn = document.querySelector('.btn-hex');
const container = document.querySelector('.container');
const textColor = document.querySelector(".color");
const colorName = document.querySelector('.color-name');

btn.addEventListener('click', function() {
    
    const colors = ['blue', 'red', 'grey','pink','purple','green','lightorange','lightgreen'];
    
      
        let number = Math.floor((Math.random()*colors.length));
        container.style.backgroundColor = colors[number];
        textColor.style.color = 'darkorange';
        textColor.innerText = colors[number];
        console.log(number);
    });

const hexArr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

hexBtn.addEventListener('click', function () {
    
    let randomNumber = function() {
        return  Math.floor(Math.random() * hexArr.length);
    }
    let colorCode ='#';
    
    for (let i = 0; i < 6; i++) {
        colorCode += hexArr[randomNumber()];
    }
    container.style.backgroundColor = colorCode;
    textColor.innerText = colorCode;
});







