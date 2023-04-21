console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(data => {
            for (const element of data.message) {
                const img = document.createElement('img');
                img.src = element;
                const dogDiv = document.querySelector('#dog-image-container');
                dogDiv.appendChild(img);
            }
        });
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
        .then(data => {
            for (const key in data.message) {
                if (data.message[key] != '') {
                    for (const element of data.message[key]) {
                        const li = document.createElement('li');
                        li.textContent = element + ' ' + key;
                        li.style.cursor = 'pointer';
                        li.className = 'listItem';
                        const ul = document.querySelector('#dog-breeds');
                        ul.appendChild(li);
                    }
                } else {
                    const li = document.createElement('li');
                    li.textContent = key;
                    li.style.cursor = 'pointer';
                    li.className = 'listItem';
                    const ul = document.querySelector('#dog-breeds');
                    ul.appendChild(li);
                }
            }
        });
    const dropdown = document.querySelector('#breed-dropdown');
    dropdown.addEventListener('click', function() {
        if (dropdown.value === 'a') {
            const li = document.querySelectorAll('.listItem');
            for (const element of li) {
                const letters = element.textContent.split('');
                if (letters[0] != 'a') {
                    element.style.display = 'none';
                }
                if (letters[0] === 'a') {
                    element.style.display = '';
                }
            }
        } else if (dropdown.value === 'b') {
            const li = document.querySelectorAll('.listItem');
            for (const element of li) {
                const letters = element.textContent.split('');
                if (letters[0] != 'b') {
                    element.style.display = 'none';
                }
                if (letters[0] === 'b') {
                    element.style.display = '';
                }
            }
        } else if (dropdown.value === 'c') {
            const li = document.querySelectorAll('.listItem');
            for (const element of li) {
                const letters = element.textContent.split('');
                if (letters[0] != 'c') {
                    element.style.display = 'none';
                }
                if (letters[0] === 'c') {
                    element.style.display = '';
                }
            }
        } else if (dropdown.value === 'd') {
            const li = document.querySelectorAll('.listItem');
            for (const element of li) {
                const letters = element.textContent.split('');
                if (letters[0] != 'd') {
                    element.style.display = 'none';
                }
                if (letters[0] === 'd') {
                    element.style.display = '';
                }
            }
        } else if (dropdown.value === 'All') {
            const li = document.querySelectorAll('.listItem');
            for (const element of li) {
                const letters = element.textContent.split('');
                element.style.display = '';
            }
        }
    });
});

document.addEventListener('click', function(e) {
    if (e.target.parentNode.id === 'dog-breeds') {
        e.target.style.color = 'red';
    }
});
