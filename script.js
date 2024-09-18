

const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

btnHam.addEventListener('click', function(){
    if(btnHam.className !== ""){
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navBar.classList.add("show-nav");
    }
})

btnTimes.addEventListener('click', function(){
    if(btnHam.className !== ""){
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
})

document.getElementById('toggle-mute').addEventListener('click', function() {
    var video = document.getElementById('background-video');
    video.muted = !video.muted; // Toggle muted property
});

// Ensure the video starts playing when the page loads
window.addEventListener('load', function() {
    var video = document.getElementById('background-video');
    if (video) {
        video.play().catch(function(error) {
            console.log('Error playing video:', error);
        });
    }
});
