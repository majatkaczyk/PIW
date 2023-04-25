"use-strict"

let listId = 0;

const firstList = document.getElementById("first-list");

const createListItem = (item) => {
    const todoItem = document.createElement("li");
    todoItem.id = listId;
    listId++;
    todoItem.onclick = () => check(todoItem);
    const textItem = document.createElement("p");
    textItem.className = "list-content";
    textItem.innerHTML = item;
    todoItem.appendChild(textItem);
    todoItem.appendChild(createDateItem());
    todoItem.appendChild(createDeleteOption(todoItem));

    return todoItem;
}

const createDateItem = () => {
    const item = document.createElement("p");
    item.className = "date";
    item.innerHTML = "";
    return item;
}

const addElement = () => {
    const listInput = document.getElementById("list-input");
    if (listInput.value === "") {
        alert("Empty item");
        return;
    }

    const listItem = createListItem(listInput.value);
    firstList.appendChild(listItem);
    listInput.value = "";
}

const addListElement = (event) => {
    if (event.key === "Enter") {
        addElement();
    }
}

const check = (listItem) => {
    const isChecked = listItem.classList.toggle("checked");
    const dateItem = listItem.getElementsByClassName("date")[0];
    if (!isChecked) {
        dateItem.innerHTML = "";
        return;
    }
    const date = new Date().toLocaleString();
    dateItem.innerHTML = date;
    console.log(dateItem);
}

const deleteItem = (listItem) => {
    $(`#${listItem.id}`).remove();
}

const createDeleteOption = (listItem) => {
    var span = document.createElement("SPAN");
    span.className = "fa fa-trash delete-item";
    span.onclick = () => deleteItem(listItem);
    return span;
}