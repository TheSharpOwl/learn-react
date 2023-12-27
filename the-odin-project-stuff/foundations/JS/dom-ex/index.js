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

/**
 * a <div> with a black border and pink background color with the following elements inside of it:

    another <h1> that says “I’m in a div”
    a <p> that says “ME TOO!”
    Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

 */

divBlock = document.createElement("div");
divBlock.style.cssText =
  "background-color: pink; border-style: solid; border-color: black;";

h1Element = document.createElement("h1");
h1Element.textContent = "Hi I am in a div";

pElement2 = document.createElement("p");
pElement2.textContent = "ME TOO!";

divBlock.appendChild(h1Element);
divBlock.appendChild(pElement2);

bodyElement.appendChild(pElement);
bodyElement.appendChild(h3Element);

// outside the ex just for testing what happens if I change it after appending
pElement.textContent = "WOW";
// it changes yeah even after appending (because it's a reference)

bodyElement.appendChild(divBlock);
