function randomizeElementsLocations(elements) {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      var maxX = windowWidth - element.offsetWidth;
      var maxY = windowHeight - element.offsetHeight;
      var randomX = Math.floor(Math.random() * maxX);
      var randomY = Math.floor(Math.random() * maxY);
      element.style.position = 'absolute';
      element.style.left = randomX + 'px';
      element.style.top = randomY + 'px';
    });
  }
  
  let h1Element1 = document.getElementById('1');
  let h1Element2 = document.getElementById('2');
  let h1Element3 = document.getElementById('3');
  let h1Element4 = document.getElementById('4');
  let h1Element5 = document.getElementById('5');
  let h1Element6 = document.getElementById('6');
  
  let h1Elements = [h1Element1, h1Element2, h1Element3, h1Element4, h1Element5, h1Element6];
  
  // Start the loop with an interval of 3 seconds (3000 milliseconds)
  let intervalID = setInterval(function() {
    randomizeElementsLocations(h1Elements);
  }, 3);

  let blinkingParagraph = document.getElementById('blinkingText');

  setInterval(function() {
    blinkingParagraph.classList.toggle('blinking');
  }, 100);



for (let i = 0; i < 4; i++) {
    window.open("https://cdn.discordapp.com/attachments/1093152869257052321/1109825523066077266/image.pnghttps://cdn.discordapp.com/attachments/1093152869257052321/1109825523066077266/image.png", "_blank");
    window.open("archlinux.org")
}