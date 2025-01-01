// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// 1. Create a new <p> element
const paragraph = document.createElement("p");

// 2. Add text content to the <p>
paragraph.textContent = "Hey I'm red!";

// 3. Style the text to be red
paragraph.style.color = "red";

// 4. Append the <p> to the container
container.appendChild(paragraph);

const header = document.createElement("h3");
header.textContent = "I'm a blue h3!";
header.style.color = "blue";
container.appendChild(header);

// 1. Create a new <div> element
const newDiv = document.createElement("div");

// 2. Style the <div> with a black border and pink background
newDiv.style.border = "2px solid black";
newDiv.style.backgroundColor = "pink";
newDiv.style.padding = "10px"; // Optional: adds some spacing inside the div

// 3. Create the <h1> element
const heading = document.createElement("h1");
heading.textContent = "I'm in a div";

// 4. Create the <p> element
const paragraphInDiv = document.createElement("p");
paragraphInDiv.textContent = "ME TOO!";

// 5. Append the <h1> and <p> to the new <div>
newDiv.appendChild(heading);
newDiv.appendChild(paragraphInDiv);

// 6. Append the new <div> to the container
container.appendChild(newDiv);