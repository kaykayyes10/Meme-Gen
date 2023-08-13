const generateMemeBtn = document.querySelector(".meme-generator .meme-generator-button");
const MemeImage = document.querySelector(".meme-generator img");
const MemeTitle = document.querySelector(".meme-generator .meme-title");
const MemeAuthor = document.querySelector(".meme-generator .meme-author");
const updateDetails = (url,title,author) =>{
    MemeImage.setAttribute("src",url);
    MemeTitle.innerHTML = title;
    MemeAuthor.innerHTML = `Meme By :${author}`;
};
const generateMeme = () =>{
    fetch(" https://meme-api.com/gimme/wholesomememes")
    .then((response) =>response.json())
    .then(data =>{
        updateDetails(data.url, data.title, data.author)
        });
};

generateMemeBtn.addEventListener("click",generateMeme);
generateMeme();
