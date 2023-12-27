// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

pElement = document.createElement("p");
pElement.textContent = "Hi I am read";
pElement.style.color = "red";

bodyElement = document.querySelector("body");
bodyElement.appendChild(pElement);
