const btn = document.getElementById("btn");
const output = document.querySelector(".output");
const author = document.querySelector(".author");

btn.addEventListener("click", function() {
  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex].text;
      author.textContent = data[randomIndex].author;
      output.textContent = randomQuote;
    })
    .catch(function(error) {
      console.log("Error fetching quotes:", error);
    });
});
