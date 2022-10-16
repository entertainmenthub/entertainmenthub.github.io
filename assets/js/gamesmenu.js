      const brEl = document.getElementById("br");
      const lolEl = document.getElementById("lol");
      const chessEl = document.getElementById("chess");
      const ctrttEl = document.getElementById("ctr-tt");
      const kartsEl = document.getElementById("karts");
      const shovelEl = document.getElementById("shovel");
      const marketEl = document.getElementById("market");
      const ovoEl = document.getElementById("ovo");
      const launchGame = function (gameId) {
        localStorage.setItem("gameId", gameId);
        window.location.href = "/play";
      }
      brEl.addEventListener("click", function(){launchGame("br");});
      lolEl.addEventListener("click", function(){launchGame("lol");});
      chessEl.addEventListener("click", function(){launchGame("chess");});
      ctrttEl.addEventListener("click", function(){launchGame("ctrtt");});
      kartsEl.addEventListener("click", function(){launchGame("karts");}); 
      shovelEl.addEventListener("click", function(){launchGame("shovel");});
      marketEl.addEventListener("click", function(){launchGame("market");});
      ovoEl.addEventListener("click", function(){launchGame("ovo");});
