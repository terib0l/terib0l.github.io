// Text Animation like typing in title
function typewriter(arg) {
  let element = document.querySelector(arg.element);
  let text = arg.text.split("");
  let speed = arg.speed;

  window.setTimeout(function () {
    element.textContent = "";
    text.forEach((c, index) => {
      setTimeout(() => {
        element.textContent += c;
      }, speed * index);
    });
  }, 1000);
};

typewriter({
  element: "#title",
  text: "TERI0L.GITHUB.IO",
  speed: 60
});

// Change color of icons on mouseover
const icon = document.getElementById("icon");

icon.addEventListener("mouseover", function(event){
  event.target.style.color = "#666666";
});
icon.addEventListener("mouseout", function(event){
  event.target.style.color = "#fd6a02";
});

// Shake icons
function fluffy() {
  $('.icons').animate({marginTop: '-=12px'}, 800).animate({marginTop: '+=12px'}, 800);
  setTimeout('fluffy()', 1600);
}

fluffy();
