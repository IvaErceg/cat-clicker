const cats = {
    charlie: {
        name: 'Charlie',
        img: 'cat',
        count: 0
    },

    clover: {
        name: 'Clover',
        img: 'cat2',
        count: 0
    },

    flux: {
        name: 'Flux',
        img: 'cat3',
        count: 0
    }, 

    react: {
        name: 'React',
        img: 'cat4',
        count: 0
    }, 

    spinx: {
        name: 'Spinx',
        img: 'cat5',
        count: 0
    }
}

const list = document.querySelector('#cat-list');
const catArea = document.querySelector('#cats');

for(let cat in cats) {
    const name = document.createElement('li');
    name.appendChild(document.createTextNode(`${cat.toUpperCase()}`))
    list.appendChild(name);
    name.addEventListener('click', function(){
         return function(obj) {   //closure! We need to be able to save cat data for each cat in seperate scope, so we can access it later, so we pass cat as an parameter of an inner function
            cats[obj].count++;
            catArea.innerHTML = `
            <p>${cats[obj].name}</p>
            <img src="${cats[obj].img}.jpg"/>
            <p>Clicked: ${cats[obj].count} ${(cats[obj].count == 1) ? 'time' : 'times'} </p>`
            }(cat)});           
}
