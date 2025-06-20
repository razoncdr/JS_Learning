let textArea = document.querySelector("#textArea");


let counter = document.querySelector("#counter");
const maxLimit = 100;

textArea.addEventListener('input', ()=>{
    let length = textArea.value.length;
    counter.innerText = `${length} / ${maxLimit}`;

    if (length >= maxLimit) {
        textArea.value = textArea.value.slice(0, maxLimit-1);
      }
})