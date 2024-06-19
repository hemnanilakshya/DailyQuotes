document.addEventListener("DOMContentLoaded", () => {
  const quoteText = document.querySelector(".Quote");
  const newQuoteButton = document.querySelector(".buttons");

  async function fetchQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      quoteText.innerHTML = `"${data.content}" — ${data.author}`;
    } catch (error) {
      quoteText.innerHTML = "An error occurred. Please try again later.";
    }
  }

  newQuoteButton.addEventListener("click", fetchQuote);

  fetchQuote();
});
