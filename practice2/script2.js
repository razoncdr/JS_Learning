let buttons = document.querySelectorAll("button");
let ul = document.querySelector('ul');
let count = 0;

buttons[0].addEventListener("click", () => {
    count++;

    // Create li and div for each item
    let li = document.createElement('li');
    let div = document.createElement('div');

    div.style.display = "flex";
    div.style.borderRadius = "50rem";
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.backgroundColor = "green";
    div.style.margin = "10px";
    div.style.textAlign = "center";
    div.style.justifyContent = "center";
    div.style.alignItems = "center"; // important for vertical centering
    div.style.color = "white";
    div.innerText = `${count}`;

    // Add div to li and li to ul
    li.appendChild(div);
    ul.appendChild(li);

});

// Delete this li when clicking the 2nd button
buttons[1].addEventListener("click", () => {
    let li = ul.lastElementChild;
    li.remove();
});


// magic button adds a circle with a incremented number
// vanish button vanishes the last numbered element 
// 
// challenge: can you make this sequence
//            1 2 3 6 7 10