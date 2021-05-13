// Import stylesheets
import "./style.css";

// Write Javascript code!
// const appDiv = document.getElementById("app");
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

let bookTopics = ["math", "english", "history", "art"];
let favoriteTopic = "math";

if (favoriteTopic == bookTopics[0]) {
  console.log("math is the language of the universe");
} else if (favoriteTopic == bookTopics[1]) {
  console.log("english is a great subject ");
} else if (favoriteTopic == bookTopics[2]) {
  console.log("history is important and without it, we are doomed to repeat");
} else if (favoriteTopic == bookTopics[3]) {
  console.log("art is where your creativity will shine");
} else {
  console.log("no info on your favorite study");
}
