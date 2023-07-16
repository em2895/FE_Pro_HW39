const divParent = document.getElementById('parent');

const getButton = document.createElement('button');
getButton.textContent = 'Get orders';
divParent.appendChild(getButton);

const addButton = document.createElement('button');
addButton.textContent = 'Add orders';
divParent.appendChild(addButton);

const updateButton = document.createElement('button');
updateButton.textContent = 'Update orders';
divParent.appendChild(updateButton);

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete orders';
divParent.appendChild(deleteButton);

function getOrders() {
    fetch('http://localhost:3000/orders')
        .then(response => response.json())
        .then(data => console.log(data))             
        .catch(error => console.error(error));
}

getButton.addEventListener('click', () => {
   getOrders(); 
});

function addOrders() {
    fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 4,
            item: 'Product 4',
            price: 4 
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

addButton.addEventListener('click', () => {
    addOrders();
 });

function updateOrders() {
    fetch('http://localhost:3000/orders', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 1,
            item: 'Product 5',
            price: 5
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

updateButton.addEventListener('click', () => {
    updateOrders();
});

function deleteOrders() {
    fetch('http://localhost:3000/orders', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 4,
            item: 'Product 4',
            price: 4
        })    
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

deleteButton.addEventListener('click', () => {
    deleteOrders();
});