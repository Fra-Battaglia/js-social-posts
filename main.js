// MILESTONE 1

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// MILESTONE 2

let post = ''
let pic 
posts.forEach(element => {

    if (element.author.image == null) {
        let text = element.author.name;
        const array_name = text.split(" ");

        let first_name = array_name[0];
        let last_name = array_name[1];
        let letter_first_name = first_name.charAt(0);
        let letter_last_name = last_name.charAt(0);

        pic = `<h2 class="profile-pic">${letter_first_name}${letter_last_name}</h2>`
    }

    else {
        pic = `<img class="profile-pic" src="${element.author.image}" alt= "Phil Mangione"></img>`
    }

    post += 
    `<div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    ${pic}                   
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.author.name}</div>
                    <div class="post-meta__time">4 mesi fa</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${element.content}</div>
        <div class="post__image">
            <img src="${element.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`;



});

let container = document.getElementById('container');
container.innerHTML += post;

//MILESTONE 3

const like_button = document.getElementsByClassName('js-like-button');
const array_like = [];

for (let i = 0; i < like_button.length; i++) {
    like_button[i].addEventListener('click', function(){
        const postId = this.dataset.postid;
        const likes = document.getElementById(`like-counter-${postId}`)
        const likes_number = parseInt(likes.innerText);
        
        if(array_like.includes(postId)){
            likes.innerText = likes_number-1;
            like_button[i].classList.remove('like-button--liked');
            
            const index = array_like.indexOf(postId);
            if (index > -1){
                array_like.splice(index,1);
            }
        }
        else {
            likes.innerText = likes_number+1;
            array_like.push(postId);
            like_button[i].classList.add('like-button--liked');
        }
        
        console.log(likes)
    });
}