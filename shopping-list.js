const shoppingList = document.querySelector('.shoppingList');
const input = document.querySelector('#item');
const addBtn = document.querySelector('.btn');

addBtn.addEventListener('click', addItem);

function addItem(){
    let item = input.value;
    input.value = "";

    let li = document.createElement('li');
    li.classList.add('listItem');

    let span = document.createElement('span');

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.style.cssText = 'font-size: 12px; color: black';

    span.textContent = item;

    li.appendChild(span);
    li.appendChild(deleteBtn);

    shoppingList.appendChild(li);

    deleteBtn.addEventListener('click', () => {
        shoppingList.removeChild(li);
    })

    input.focus();
}
