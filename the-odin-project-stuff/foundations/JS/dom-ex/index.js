// your JavaScript file
const container = document.querySelector("#container");
const bodyElement = document.querySelector("body");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

pElement = document.createElement("p");
pElement.textContent = "Hi I am read";
pElement.style.color = "red";

h3Element = document.createElement("h3");
h3Element.textContent = "Hi I am blue h3";
h3Element.style.color = "blue";

bodyElement.appendChild(pElement);
bodyElement.appendChild(h3Element);
