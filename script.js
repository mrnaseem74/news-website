// Manual version: Top News + TikTok + Google Trends
// No API required

window.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  // --- Top News ---
  const topNews = [
    {
      title: "Top News 1: AI Tools Revolution 2026",
      description: "Discover how AI tools are changing the way we work and learn in 2026.",
      url: "https://example.com/news1"
    },
    {
      title: "Top News 2: Global Economy Updates",
      description: "Latest trends in the global economy and what investors need to know.",
      url: "https://example.com/news2"
    },
    {
      title: "Top News 3: Health Breakthroughs",
      description: "New medical research and health tips to improve your daily life.",
      url: "https://example.com/news3"
    }
  ];

  topNews.forEach(article => {
    const newsItem = document.createElement("article");
    newsItem.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.description}</p>
      <a href="${article.url}" target="_blank">Read More</a>
    `;
    main.appendChild(newsItem);
  });

  // --- TikTok Trends ---
  const tiktokTrends = [
    "#DanceChallenge – 2M views",
    "#FunnyPets – 1.5M views",
    "#LifeHacks – 1.2M views",
    "#CookingTips – 900K views",
    "#TravelVlog – 800K views"
  ];

  const tiktokArticle = document.createElement("article");
  tiktokArticle.innerHTML = `
    <h2>Trending TikTok Videos</h2>
    <ul>${tiktokTrends.map(item => `<li>${item}</li>`).join("")}</ul>
    <p>Note: TikTok trending data updated manually for demo.</p>
  `;
  main.appendChild(tiktokArticle);

  // --- Google Trends ---
  const googleTrends = [
    `"AI Tools 2026"`,
    `"TikTok Viral Challenges"`,
    `"World Cup Highlights"`,
    `"Top Movies This Week"`,
    `"Health Tips 2026"`
  ];

  const googleArticle = document.createElement("article");
  googleArticle.innerHTML = `
    <h2>Google Search Trending Topics</h2>
    <ul>${googleTrends.map(item => `<li>${item}</li>`).join("")}</ul>
    <p>Note: Google Trends data updated manually for demo.</p>
  `;
  main.appendChild(googleArticle);

  // --- Footer Date Update ---
  const footer = document.querySelector("footer p");
  const date = new Date();
  footer.textContent += ` | Updated: ${date.toDateString()}`;
});