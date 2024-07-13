const memeBtn = document.querySelector(".meme-generator .btn");
const memeImg = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .title");
const memeAuthor = document.querySelector(".meme-generator .author");

const updateDetails = (url, title, author) =>{
    memeImg.setAttribute("src", url)
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
}

const generateMeme = () =>{
    fetch("https://meme-api.com/gimme/meme")
    .then((response) => response.json())
    .then((data) =>{
        updateDetails(data.url, data.title, data.author);
    });
};
memeBtn.addEventListener("click", generateMeme);

generateMeme();