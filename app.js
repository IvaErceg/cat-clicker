(function() {
    const cats = {
        charlie: {
            name: 'Charlie',
            img: 'charlie',
            count: 0
        },

        clover: {
            name: 'Clover',
            img: 'clover',
            count: 0
        },

        flux: {
            name: 'Flux',
            img: 'flux',
            count: 0
        }, 

        react: {
            name: 'React',
            img: 'react',
            count: 0
        }, 

        spinx: {
            name: 'Spinx',
            img: 'spinx',
            count: 0
        }
    }

    const listView = {
        init: function() {
            this.render();
        },
        render: function() {
            const catList = document.querySelector('#cat-list');
            const data = controller.getKeys();
            data.forEach(function(el) {
                const name = document.createElement('li');
                name.appendChild(document.createTextNode(`${el.toUpperCase()}`));
                catList.appendChild(name);
                name.addEventListener('click', function(e) {imageView.init(e.target.innerHTML)});
            });
                     
        }
    }

    const imageView = {
        init: function(target) {
            imageView.render(target);
        },
        updateView: function (data) {
            const catArea = document.querySelector('#cats');
             catArea.innerHTML = `
                    <p>${data.name}</p>
                    <img src="${data.img}.jpg"/>
                    <p>Clicked: ${data.count} ${(data.count == 1) ? 'time' : 'times'} </p>`
        },
        render: function(cat) {
                const data = controller.getValues(cat.toLowerCase());
                return function(cat) { 
                    controller.update(cat);
                    imageView.updateView(cat);  //closure! We need to be able to save cat data for each cat in seperate scope, so we can access it later, so we pass cat as an parameter of an inner function
                }(data)},

        imageClick: function (cat) {
                controller.update(cat);
                imageView.updateView(cat);
                     
        }
    }


    const controller = {
        init: function() {
            listView.init();
        },
        getKeys: function() {
            return Object.keys(cats);
        },
        getValues: function(cat) {
            return cats[cat];
        },
        update: function(cat) {
            cat.count++;
        }
        }
    
    controller.init();    
 })();