


fetch ('../componentes_serv/head_nav.html')
    .then(response => response.text())
    .then(html => {
        const head = document.getElementById('nav')
        head.innerHTML = html;
    })
    .catch(error => console.error('Nav deu erro ', error))

    
fetch ('../componentes_serv/banner.html')
.then(response => response.text())
.then(html => {
    const head = document.getElementById('banner')
    head.innerHTML = html;
})
.catch(error => console.error('banner deu erro ', error))

fetch ('../componentes_serv/servicos.html')
.then(response => response.text())
.then(html => {
    const head = document.getElementById('second')
    head.innerHTML = html;
})
.catch(error => console.error('servicos deu erro ', error))