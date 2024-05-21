document.getElementById('yes-button').addEventListener('click', function() {
    window.location.href = 'https://www.imdb.com/name/nm1013044/';
});

document.getElementById('no-button').addEventListener('click', function() {
    document.getElementById('entry-page').classList.add('hidden');
    document.getElementById('main-page').classList.remove('hidden');
    fetchNews();
});

function fetchNews() {
    const apiKey = 'YOUR_NEWS_API_KEY';
    const url = `https://newsapi.org/v2/everything?q=Drake&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            data.articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('article');
                articleElement.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                newsContainer.appendChild(articleElement);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
}
