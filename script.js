const apiKey = '074389147fd64000a7cb196c412d7d7f';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

// Fetch news from the API
async function fetchNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

// Display news on the page
function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';  // Clear previous content

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        // Create image element (use a placeholder if image is not available)
        const imageUrl = article.urlToImage || 'https://via.placeholder.com/400';
        const newsImage = `<img src="${imageUrl}" alt="News Image">`;

        // Create news item content
        newsItem.innerHTML = `
            ${newsImage}
            <h2>${article.title}</h2>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;

        newsContainer.appendChild(newsItem);
    });
}

// Fetch and display the news when the page loads
window.onload = () => {
    fetchNews();
};
