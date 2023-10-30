const itemElement = document.querySelectorAll("#categories .item");
console.dir(`Number of categories: ${itemElement.length}`);
itemElement.forEach((elem, i) => {
    const title = elem.querySelector("h2");
    console.log("");
    console.dir(`Category: ${title.textContent}`);
    const liItemElement = elem.querySelectorAll("li");
    console.dir(`Elements: ${liItemElement.length}`);
});
