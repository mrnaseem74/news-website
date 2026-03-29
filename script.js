// ================================
// script.js for Daily Trend News
// Using CORS proxy for GitHub Pages
// ================================

// ---------- Step 1: NewsAPI Setup ----------
const NEWS_API_KEY = "ac15a6137d2f4874a62d6659dda5c553"; // Replace with your actual NewsAPI key

async function fetchTopNews() {
  // CORS proxy: https://api.allorigins.win/raw?url=
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${NEWS_API_KEY}`;
  const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(apiUrl)}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    const main = document.querySelector("main");
    main.innerHTML = ""; // Clear existing content

    if (!data.articles || data.articles.length === 0) {
      main.innerHTML = "<p>No news found at the moment.</p>";
      return;
    }

    data.articles.forEach(article => {
      const newsItem = document.createElement("article");
      newsItem.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description || "No description available"}</p>
        <a href="${article.url}" target="_blank">Read More</a>
      `;
      main.appendChild(newsItem);
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    const main = document.querySelector("main");
    main.innerHTML = "<p>Unable to load news at the moment. Please try again later.</p>";
  }
}

// ---------- Step 2: TikTok Trends Placeholder ----------
function loadTikTokTrends() {
  const main = document.querySelector("main");
  
  const tiktokArticle = document.createElement("article");
  tiktokArticle.innerHTML = `
    <h2>Trending TikTok Videos</h2>
    <ul>
      <li>#DanceChallenge – 2M views</li>
      <li>#FunnyPets – 1.5M views</li>
      <li>#LifeHacks – 1.2M views</li>
      <li>#CookingTips – 900K views</li>
      <li>#TravelVlog – 800K views</li>
    </ul>
    <p>Note: TikTok trending data updated manually for demo.</p>
  `;
  
  main.appendChild(tiktokArticle);
}

// ---------- Step 3: Google Trends Placeholder ----------
function loadGoogleTrends() {
  const main = document.querySelector("main");
  
  const googleArticle = document.createElement("article");
  googleArticle.innerHTML = `
    <h2>Google Search Trending Topics</h2>
    <ul>
      <li>"AI Tools 2026"</li>
      <li>"TikTok Viral Challenges"</li>
      <li>"World Cup Highlights"</li>
      <li>"Top Movies This Week"</li>
      <li>"Health Tips 2026"</li>
    </ul>
    <p>Note: Google Trends data updated manually for demo.</p>
  `;
  
  main.appendChild(googleArticle);
}

// ---------- Step 4: Initialize everything ----------
window.addEventListener("DOMContentLoaded", () => {
  fetchTopNews();       // Step 1: Top News
  loadTikTokTrends();   // Step 2: TikTok Trends
  loadGoogleTrends();   // Step 3: Google Trends

  // Add current date in footer
  const footer = document.querySelector("footer p");
  const date = new Date();
  footer.textContent += ` | Updated: ${date.toDateString()}`;
});