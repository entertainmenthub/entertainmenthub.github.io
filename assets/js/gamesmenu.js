      const brEl = document.getElementById("br");
      const 1v1El = document.getElementById("1v1");
      const chessEl = document.getElementById("chess");
      const ctrttEl = document.getElementById("ctr-tt");
      const slopeEl = document.getElementById("slope");
      const launchGame = function (gameId) {
        localStorage.setItem("gameId", gameId);
        window.location.href = "/play";
      }
      brEl.addEventListener("click", function(){launchGame("br");});
      1v1El.addEventListener("click", function(){launchGame("1v1");});
      chessEl.addEventListener("click", function(){launchGame("chess");});
      ctrttEl.addEventListener("click", function(){launchGame("ctrtt");});
      slopeEl.addEventListener("click", function(){launchGame("slope");});  
