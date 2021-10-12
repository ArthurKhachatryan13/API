const button = document.querySelector(".btn");
const img = document.querySelector(".img");
const url = "http://aws.random.cat/meow";

async function fechHandler() {
    try{
        const response = await fetch(url)
        const data = await response.json();
        console.log(data);
        img.src=data.file;
    }catch(error){
        console.log(error);
    }
}
button.addEventListener("click",()=> fechHandler());