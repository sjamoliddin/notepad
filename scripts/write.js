// Selectors
let title = document.querySelector('.post-title');
let post = document.querySelector('.post');

// Event Listeners
document.querySelector('.publish-btn').addEventListener('click', savePost);

// Functions
function savePost(e) {
    e.preventDefault();
    if (document.querySelector('.checkbox input').checked === true) {
        localStorage.setItem(title.value, post.value);
    }
}