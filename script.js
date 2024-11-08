function startAnnoying() {
  setInterval(() => {
      for (let i = 0; i < 3; i++) {
          window.open('https://example.com', '_blank', 'width=200,height=200');
      }
  }, 2000);

  setInterval(() => {
      alert('Hallo ya 3arsss🦍');
      new Audio('https://www.soundjay.com/button/beep-07.wav').play();
  }, 3000);

  setInterval(() => {
      document.body.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
  }, 500);

  setInterval(() => {
      document.body.style.transform = `translate(${Math.random()*10}px, ${Math.random()*10}px)`;
  }, 100);
}
