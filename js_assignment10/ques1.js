
const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

let editingItem = null;


addBtn.addEventListener("click", () => {
    const name = productInput.value.trim();
    if (!name) return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="title">${name}</span>
        <div class="buttons">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    productList.appendChild(li);
    productInput.value = "";
});


productList.addEventListener("click", function (e) {
    const li = e.target.closest("li");
    if (!li) return;

   
    if (e.target.classList.contains("delete")) {
        li.remove();
    }

   
    if (e.target.classList.contains("edit")) {
        startEditing(li);
    }
});


function startEditing(li) {
    if (editingItem) saveEditing(editingItem);

    editingItem = li;

    const titleSpan = li.querySelector(".title");
    const oldText = titleSpan.textContent;


    titleSpan.outerHTML = `<input type="text" class="editInput" value="${oldText}">`;

    li.querySelector(".editInput").focus();
}


function saveEditing(li) {
    if (!li) return;

    const input = li.querySelector(".editInput");
    if (!input) return;

    const updatedText = input.value.trim() || "Untitled";

    input.outerHTML = `<span class="title">${updatedText}</span>`;
    editingItem = null;
}


document.addEventListener("click", function (e) {
    if (editingItem && !editingItem.contains(e.target)) {
        saveEditing(editingItem);
    }
});
