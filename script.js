let createBtn = document.getElementById('create-btn');

let Container = document.querySelector('.container');

let textContainer = document.querySelector('.text-container');

let text = document.querySelectorAll('.text-area');

// function to show the data in the local storage
function showData() {
    textContainer.innerHTML = localStorage.getItem('notes');
}

showData();

// function to save the data in the Local Storage
function savedata() {
    localStorage.setItem('notes' , textContainer.innerHTML);
}

// Event handler for handling the create button
createBtn.addEventListener('click', () => {

    let textArea = document.createElement('p');
    let deleteImg = document.createElement('img');
    textArea.contentEditable = true;
    textArea.classList.add('text-area');
    deleteImg.src = './assets/delete.png';
    deleteImg.classList.add('delete-img');
    textContainer.appendChild(textArea).appendChild(deleteImg);
});

// Event handler for handling the text Container event like deleting , updating etc.
textContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        savedata();
    } 
    // when user enter or update any text in the text area then it gets updated in the local storage.
    else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.text-area');
        notes.forEach(element => {
            element.onkeyup = function() {
                savedata();
            }
        });
    }
});








