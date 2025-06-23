const board = document.getElementById("board");

    const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const initial = [
      ["♜","♞","♝","♛","♚","♝","♞","♜"],
      ["♟","♟","♟","♟","♟","♟","♟","♟"],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["♙","♙","♙","♙","♙","♙","♙","♙"],
      ["♖","♘","♗","♕","♔","♗","♘","♖"]
    ];

    // Add grid: labels + tiles
    for (let r = 0; r <= 8; r++) {
      for (let c = 0; c <= 8; c++) {
        const div = document.createElement("div");

        // Row labels
        if (c === 0 && r < 8) {
          div.textContent = 8 - r;
          div.className = "label";
        }
        // Column labels
        else if (r === 8 && c > 0) {
          div.textContent = cols[c - 1];
          div.className = "label";
        }
        // Tiles
        else if (r < 8 && c > 0) {
          const tile = document.createElement("div");
          tile.className = `tile ${(r + c - 1) % 2 === 0 ? 'light' : 'dark'}`;
          tile.setAttribute("data-pos", `${r}-${c - 1}`);
          tile.setAttribute("draggable", true);
          tile.textContent = initial[r][c - 1];
          div.appendChild(tile);
        }

        board.appendChild(div);
      }
    }

    let dragged = null;

    board.addEventListener("dragstart", e => {
      if (e.target.classList.contains("tile") && e.target.textContent !== "") {
        dragged = e.target;
        e.target.classList.add("dragging");
      }
    });

    board.addEventListener("dragend", e => {
      if (dragged) {
        dragged.classList.remove("dragging");
        dragged = null;
      }
    });

    board.addEventListener("dragover", e => {
      if (e.target.classList.contains("tile")) {
        e.preventDefault();
      }
    });

    board.addEventListener("drop", e => {
      if (e.target.classList.contains("tile") && dragged) {
        e.target.textContent = dragged.textContent;
        dragged.textContent = "";
      }
    });

    // Optional: Click to highlight possible move (demo purpose)
    board.addEventListener("click", e => {
      if (e.target.classList.contains("tile")) {
        document.querySelectorAll(".tile").forEach(t => t.classList.remove("highlight"));
        e.target.classList.add("highlight");
      }
    });