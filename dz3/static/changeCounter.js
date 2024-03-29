function changeCounter() {
    const tegA = document.querySelector('a');
    const counter = document.querySelector('.counter');

    if (tegA.href === 'http://127.0.0.1:3000/about.html') {
        console.log(tegA.href);

        fetch('http://127.0.0.1:3000/api?' + 'index')
            .then((res) => res.json())
            .then((data) => {
                counter.textContent = data['/api?index'];
            });
    } else if (tegA.href === 'http://127.0.0.1:3000/index.html') {
        console.log(tegA.href);

        fetch('http://127.0.0.1:3000/api?' + 'about')
            .then((res) => res.json())
            .then((data) => {
                counter.textContent = data['/api?about'];
            });
    }
}

changeCounter();