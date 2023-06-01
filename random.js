// Define an array of quotes
var quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
  ];
  
  // Function to generate a random quote
  function generateQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quoteElement = document.getElementById("quote");
    quoteElement.innerHTML = quotes[randomIndex];
  }
  
  // Initial quote generation
  generateQuote();