    const karts = {
      name: "Smash Karts",
      url: "https://www.crazygames.com/embed/smash-karts",
    };
    const br = {
      name: "Build Royale.io",
      url: "https://www.crazygames.com/embed/buildroyale-io",
    };
    const lol = {
      name: "1v1 LOL",
      url: "https://www.crazygames.com/embed/1v1-lol",
    };
    const chess = {
      name: "Master Chess",
      url: "https://www.crazygames.com/embed/master-chess",
    };
    const ctrtt = {
      name: "Cut the Rope: Time Travel",
      url: "https://www.crazygames.com/embed/cut-the-rope-time-travel",
    };
    
    
    const gameId = localStorage.getItem('gameId');

    console.log(gameId);

    const setUp = function () {
      if (gameId == karts)  {
          document.getElementById("game").src = karts.url;
          document.getElementById("title").textContent = karts.name;
          document.getElementById("head").textContent = "eHub - " + karts.name;
      }
      if (gameId == br)  {
          document.getElementById("game").src = br.url;
          document.getElementById("title").textContent = br.name;
          document.getElementById("head").textContent = "eHub - " + br.name;
      }
    }
    
    setUp();
