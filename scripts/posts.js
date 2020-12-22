// Selectors
const mainContainer = document.querySelector('main');

// Event Listeners
document.addEventListener('DOMContentLoaded', showPosts);

// Functions
function showPosts() {
    // checking if posts are available
    if (localStorage.length > 1) {
        document.querySelector('.intro-content').remove();
    }

    let posts = JSON.parse(localStorage.getItem('post'));

    for (let i = 0; i < posts.length; i++) {
        // create post container
        const postDiv = document.createElement('div');
        postDiv.classList.add('post-container');        
        // create post title
        const postTitle = document.createElement('h2');
        postTitle.classList.add('post-title');
        postTitle.innerText = posts[i].title;
        postDiv.appendChild(postTitle);
        // create post itsel
        const post = document.createElement('p');
        post.classList.add('post');
        post.innerText = posts[i].post;
        postDiv.appendChild(post);
        // add postDiv to actual container
        mainContainer.appendChild(postDiv);
    }
}