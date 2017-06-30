const img = document.querySelectorAll('img');
const counter = document.querySelectorAll('.count');
const name = document.querySelectorAll(".name");
name[0].innerHTML = 'Charlie';
name[1].innerHTML = 'Clover';
let imagesArray = Array.prototype.slice.call(img);

for(let  i = 0; i < imagesArray.length; i++) {
    imagesArray[i].addEventListener('click', updateCount);
    
};

function updateCount() {
    let index = imagesArray.indexOf(this);
    counter[index ].innerHTML++;
}