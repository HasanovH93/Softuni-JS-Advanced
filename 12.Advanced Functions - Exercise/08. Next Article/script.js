function getArticleGenerator(articles) {

    const div = document.getElementById('content')

    return function() {
        const article = articles.shift()
        const element = document.createElement('article');
        element.textContent = article

        div.appendChild(element)
    }

   
}
