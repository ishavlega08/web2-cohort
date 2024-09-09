let ctr = 0;

function increaseCounter() {
  if (ctr <= 10) {
    const element = document.querySelectorAll("h4")[1];
    element.innerHTML = ctr;
    ctr++;
  }
}

setInterval(increaseCounter, 1000);
