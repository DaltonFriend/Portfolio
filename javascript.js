// Time

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

// Cursor

document.addEventListener("DOMContentLoaded", () => {
  const circle = document.getElementById("circle");
  const circleStyle = circle.style;
  let isClicked = false;
  let isHovered = false;

  // Set the initial z-index value
  circleStyle.zIndex = "9999";

  document.addEventListener("mousemove", (e) => {
    circleStyle.top = `${e.clientY - circle.offsetHeight / 2}px`;
    circleStyle.left = `${e.clientX - circle.offsetWidth / 2}px`;

    // Increase the z-index value to ensure the cursor is on top
    circleStyle.zIndex = "9999";
  });

  const items = document.querySelectorAll(
    " img, video, .social_container, button"
  );

  items.forEach((item) => {
    item.addEventListener("mouseover", hoverCircle);
    item.addEventListener("mouseout", resetCircle);
  });

  document.addEventListener("mousedown", () => {
    isClicked = true;
    if (!isHovered) {
      circle.style.transform = "scale(0.9)";
    } else {
      circle.style.transform = "scale(0.36)";
    }
  });

  document.addEventListener("mouseup", () => {
    isClicked = false;
    if (isHovered) {
      circle.style.transform = "scale(0.36)";
    } else {
      resetCircle();
    }
  });

  function hoverCircle() {
    circle.style.backgroundColor = "";
    if (isClicked) {
      circle.style.transform = "scale(0.36)";
    } else {
      circle.style.transform = "scale(0.4)";
    }
    isHovered = true;
  }

  function resetCircle() {
    circle.style.backgroundColor = "";
    if (!isClicked) {
      circle.style.transform = "";
      isHovered = false;
    }
  }

  // Cursor functionality (Conditionally disabled on mobile)
if (window.innerWidth > 844) { /* Check for screen width */
// Add all the event listeners and functions for cursor behavior here
}
});

// mouseout cursor effects

let fadeOut;

document.addEventListener("mouseout", (e) => {
  if (e.relatedTarget === null) {
    fadeOut = setTimeout(() => {
      circle.style.opacity = 0;
    }, 0);
  }
});

document.addEventListener("mouseover", () => {
  clearTimeout(fadeOut);

  circle.style.opacity = 1;
});

// Wobble

document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById("ndaButton");

  button.addEventListener("click", function() {
      // Remove the class to reset the animation
      this.classList.remove("animate");

      // Force a reflow
      void this.offsetWidth;

      // Re-add the class to start the animation
      this.classList.add("animate");
  });

  // Listen for the end of the animation, then remove the 'animate' class
  // This ensures the class is ready to be added again for the next click
  button.addEventListener('animationend', () => {
      button.classList.remove("animate");
  });
});


