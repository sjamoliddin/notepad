// Selectors
let form = document.querySelector('.user-name');

// Event Listeners
document.addEventListener('DOMContentLoaded', checkStorage);
document.querySelector('.nameBtn').addEventListener('click', changeName);

// Functions 
function changeName(e){
    // preventing default submittion of the form
    e.preventDefault();
    // changing logo to the user's name    
    let name = document.querySelector('.name').value;
    document.querySelector('.logo a').textContent = `${name}`;
    // removing the whole form section    
    form.remove();   
    // storing user's name to the storage
    localStorage.setItem('userName', JSON.stringify(name));    
}

function checkStorage(){
    let name = localStorage.getItem('userName');    
    if(name){
        document.querySelector('.logo a').textContent = `${name.split('"')[1]}`;
        form.remove();   
    }
}