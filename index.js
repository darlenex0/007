const noBtn = document.querySelector('.btn-no');

// A list of funny responses to cycle through
const funnyMessages = [
  "Nice try! 😂",
  "Missed me! 🏃‍♂️",
  "Error 404: No not found",
  "Are you sure? 🤨",
  "Think again! ✨",
  "Not an option! 🔒",
  "Try the other button! 👉"
];

noBtn.addEventListener('mouseover', () => {
    // 1. Calculate random position
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    // 2. Change the text to something random from our list
    const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    noBtn.innerHTML = randomMessage;
    
    // 3. Move it
    noBtn.style.position = 'fixed'; // 'fixed' works better for moving across the whole screen
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    // 4. Add a little "shake" or rotation for extra character
    const randomRotate = (Math.random() - 0.5) * 40; // Random tilt between -20 and 20 deg
    noBtn.style.transform = `rotate(${randomRotate}deg)`;
});


yesBtn.addEventListener('click', () => {
    // Optional: Add a 'growing' effect before leaving
    yesBtn.style.transform = "scale(5)";
    yesBtn.style.opacity = "0";
    yesBtn.style.transition = "all 0.5s ease";

    // Small delay to let the animation play
    setTimeout(() => {
        window.location.href = "nicetry.html";
    }, 400);
});
