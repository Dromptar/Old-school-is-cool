// to show tip on click of the character
function toggleTip() {

  const bubbleTip = document.getElementById("bubbleTip");
  if (bubbleTip.style.display === "none") {
    bubbleTip.style.display = "inline-block";
  } else {
    bubbleTip.style.display = "none";
  }
}

const jim = document.getElementById("jimBubble");

jim.addEventListener('click', toggleTip);