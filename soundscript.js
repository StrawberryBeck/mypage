



const image = document.getElementById("sound");
const sound = new Audio("./soundfolder/bubblesound.mp3");

image.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play().catch(error => {
        console.error("The sound could not be played:", error);
    });
});

