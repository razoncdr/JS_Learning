const listItems = document.querySelectorAll("#sortableList li");

let draggedItem = null;

listItems.forEach(item => {
  item.addEventListener("dragstart", () => {
    draggedItem = item;
    item.classList.add("dragging");
  });

  item.addEventListener("dragend", () => {
    draggedItem = null;
    item.classList.remove("dragging");
  });

  item.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(item.parentNode, e.clientY);
    if (afterElement == null) {
      item.parentNode.appendChild(draggedItem);
    } else {
      item.parentNode.insertBefore(draggedItem, afterElement);
    }
  });
});

function getDragAfterElement(container, y) {
  const items = [...container.querySelectorAll("li:not(.dragging)")];

  return items.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;

    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}
