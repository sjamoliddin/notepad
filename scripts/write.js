// Selectors
let postTitle = document.querySelector('.post-title');
let postText = document.querySelector('.post');
let posts;
// Event Listeners
document.querySelector('.publish-btn').addEventListener('click', savePost);

// Functions
function savePost(e) {
    e.preventDefault();

    if (document.querySelector('.checkbox input').checked === true) {
        let postObj = {
            title: postTitle.value,
            post: postText.value
        }
        posts = checkStorage();
        posts.push(postObj);
        localStorage.setItem('post', JSON.stringify(posts));

        postTitle.value = '';
        postText.value = '';
    }    
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