const apiKey = '074389147fd64000a7cb196c412d7d7f';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

const carousel = document.getElementById('carousel');
const newsContainer = document.getElementById('news-container');
let currentSlide = 0;

// Fetch news from the API
async function fetchNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const articles = data.articles;
        displayCarousel(articles.slice(0, 5)); // First 5 articles as carousel
        displayNews(articles.slice(5)); // Remaining articles in the grid
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

// Function to display the carousel for the first 5 news articles
function displayCarousel(articles) {
    carousel.innerHTML = ''; // Clear the previous carousel

    articles.forEach(article => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');

        const imageUrl = article.urlToImage || 'https://via.placeholder.com/400';
        carouselItem.innerHTML = `
            <img src="${imageUrl}" alt="News Image">
            <h2>${article.title}</h2>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;

        carousel.appendChild(carouselItem);
    });
}

// Function to display remaining news in the grid
function displayNews(articles) {
    newsContainer.innerHTML = '';  // Clear previous content

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const imageUrl = article.urlToImage || 'https://via.placeholder.com/400';
        newsItem.innerHTML = `
            <img src="${imageUrl}" alt="News Image">
            <h2>${article.title}</h2>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;

        newsContainer.appendChild(newsItem);
    });
}

// Carousel controls
document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? (carousel.childElementCount - 1) : currentSlide - 1;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide >= carousel.childElementCount - 1) ? 0 : currentSlide + 1;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
});

// Fetch and display the news when the page loads
window.onload = () => {
    fetchNews();
};
