// Import GSAP modules
import { gsap } from "gsap";

// Get the button element
const button = document.getElementById("main_nav_button");

// Create a timeline for the animation
const timeline = gsap.timeline();

// Define the initial and target colors
const initialColor = "black";
const targetColor = "red";

// Add event listeners for mouseenter and mouseleave
button.addEventListener("mouseenter", () => {
    // Animate the color change with easing for 300ms
    console.log("mouseenter");
    timeline.to(button, { color: targetColor, duration: 0.3, ease: "power2.inOut" });
});

button.addEventListener("mouseleave", () => {
    // Animate the color change back to the initial color with easing for 300ms
    console.log("mouseleave");
    timeline.to(button, { color: initialColor, duration: 0.3, ease: "power2.inOut" });
});
