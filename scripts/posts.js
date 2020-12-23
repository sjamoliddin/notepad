// Selectors
const mainContainer = document.querySelector('main');

// Event Listeners
document.addEventListener('DOMContentLoaded', displayPosts);

// Functions
function displayPosts() {
    // checking if posts are available
    if (localStorage.length > 1) {
        document.querySelector('.intro-content').remove();
        createPosts();
        document.querySelectorAll('.btn-delete').forEach(button => {
            button.addEventListener('click', deletePost);
        });
    }
}

function createPosts() {
    let posts = JSON.parse(localStorage.getItem('post'));

    for (let i = 0; i < posts.length; i++) {
        // create post container
        const postDiv = document.createElement('div');
        postDiv.classList.add('post-container');
        // create title container
        const titleContianer = document.createElement('div');
        titleContianer.classList.add('title-container');
        // create post title
        const postTitle = document.createElement('h2');
        postTitle.classList.add('post-title');
        postTitle.innerText = posts[i].title;
        titleContianer.appendChild(postTitle);
        // create delete button
        const btnDelete = document.createElement('button');
        btnDelete.classList.add('btn-delete');
        btnDelete.innerHTML = `<i class="fas fa-trash"></i>`
        titleContianer.appendChild(btnDelete);
        postDiv.appendChild(titleContianer);
        // create post itsel
        const post = document.createElement('p');
        post.classList.add('post');
        post.innerText = posts[i].post;
        postDiv.appendChild(post);
        // add postDiv to actual container
        mainContainer.appendChild(postDiv);
    }
}

function deletePost(e) {
    // add delete animation
    const currentPost = e.currentTarget.parentElement.parentElement;
    currentPost.classList.add('fall');

    // delete the post from storage
    let posts = checkStorage();
    const postIndex = e.currentTarget.parentElement.children[0].innerText;    
    posts.forEach((post) =>{                
        if(post.title === postIndex){
            // deleting
            posts.splice(posts.indexOf(post), 1);
        }
    })
    localStorage.setItem('post', JSON.stringify(posts));

    // removing the post from display
    currentPost.addEventListener('transitionend', () => {
        currentPost.remove();
    });
}

function checkStorage() {
    let posts;
    if (localStorage.getItem('post') === null) {
        posts = []
    } else {
        posts = JSON.parse(localStorage.getItem('post'));
    }
    return posts;
}