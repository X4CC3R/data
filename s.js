// script.js
document.addEventListener("DOMContentLoaded", function() {
  var body = document.body;
  var img = document.createElement("img");
  img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAKi95AZqRU9fQ7enoIrqHvFmSniZU78SjPMAD3sHMDcdAXXJ";
  var h3 = document.createElement("h3");
  h3.textContent = "H4CK3D 13Y";
  var h1 = document.createElement("h1");
  h1.textContent = "X4CC3R";

  body.appendChild(img);
  body.appendChild(h3);
  body.appendChild(h1);

  // CSS kodlarini JavaScript orqali joylashtirish
  var style = document.createElement("style");
  style.textContent = `
    /* CSS kodlaringiz shu yerga yoziladi */
    body {
      width: 96vw;
      height: 95vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: black;
      flex-direction: column;
      font-family: agency fb;
      font-size: 40px;
      letter-spacing: 10px;
    }

    h1 {
      border: 1px solid #006994;
      padding: 18px;
      border-radius: 10px;
      box-shadow: 6px 0 2px red, -6px 0 2px #00bfff;
      color: #66ff00;
      text-shadow: 0 0 10px #66ff00, 0 0 30px #66ff00;
    }

    h3 {
      animation: change 2.2s infinite alternate;
    }

    @keyframes change {
      0% {
        color: #FF7F7F;
        text-shadow: 0 0 10px #FF7F7F, 0 0 30px #FF7F7F, 0 0 80px #FF7F7F;
      }
      50% {
        color: #00bfff;
        text-shadow: 0 0 10px #00bfff, 0 0 30px #00bfff, 0 0 80px #00bfff;
      }
      100% {
        color: #66ff00;
        text-shadow: 0 0 10px #66ff00, 0 0 30px #66ff00, 0 0 80px #42a004;
      }
    }
  `;

  document.head.appendChild(style);
});
s