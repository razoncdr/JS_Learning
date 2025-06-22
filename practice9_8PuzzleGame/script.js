let items = document.querySelectorAll(".box");
let draggedItem = null;

items.forEach((item, index) => {
  item.dataset.index = index; // tag each with index

  item.addEventListener("dragstart", () => {
    draggedItem = item;
    item.classList.add("dragging");
  });

  item.addEventListener("dragend", () => {
    draggedItem = null;
    item.classList.remove("dragging");
  });

  item.addEventListener("dragover", (e) => {
    e.preventDefault(); // allow dropping
  });

  item.addEventListener("drop", () => {
    if (!draggedItem || draggedItem === item) return;

    const text1 = draggedItem.textContent;
    const text2 = item.textContent;

    // Only allow swapping with empty tile
    if ((text1 === "" || text2 === "")) {
      const i1 = parseInt(draggedItem.dataset.index);
      const i2 = parseInt(item.dataset.index);

      const r1 = Math.floor(i1 / 3), c1 = i1 % 3;
      const r2 = Math.floor(i2 / 3), c2 = i2 % 3;

      const manhattanDistance = Math.abs(r1 - r2) + Math.abs(c1 - c2);

      if (manhattanDistance === 1) {
        // swap contents
        item.textContent = text1;
        draggedItem.textContent = text2;
      }
    }
  });
});

