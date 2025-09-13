


fetch ('componentes/head_nav.html')
    .then(response => response.text())
    .then(html => {
        const head = document.getElementById('nav')
        head.innerHTML = html;
    })
    .catch(error => console.error('Nav deu erro ', error))

    
fetch ('componentes/banner.html')
.then(response => response.text())
.then(html => {
    const head = document.getElementById('banner')
    head.innerHTML = html;
})
.catch(error => console.error('banner deu erro ', error))

fetch ('componentes/servicos.html')
.then(response => response.text())
.then(html => {
    const head = document.getElementById('second')
    head.innerHTML = html;
})
.catch(error => console.error('servicos deu erro ', error))