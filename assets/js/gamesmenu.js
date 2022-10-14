      const paperioEl = document.getElementById("paperio");
      const reversiEl = document.getElementById("reversi");
      const chessEl = document.getElementById("chess");
      const ctrttEl = document.getElementById("ctr-tt");
      const slopeEl = document.getElementById("slope");
      const launchGame = function (gameId) {
        console.log(gameId);
        localStorage.setItem("gameId", gameId);
        window.location.href = "/play.html";
      }
      paperioEl.addEventListener("click", function(){launchGame("paperio");});
      reversiEl.addEventListener("click", function(){launchGame("reversi");});
      chessEl.addEventListener("click", function(){launchGame("chess");});
      ctrttEl.addEventListener("click", function(){launchGame("ctrtt");});
      slopeEl.addEventListener("click", function(){launchGame("slope");});  
