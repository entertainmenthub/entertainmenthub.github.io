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

    consloe.log(gameId);

    const setUp = function () {
      document.getElementById("game").src = gameId.url;
      document.getElementById("title").textContent = gameId.name;
      document.getElementById("head").textContent = "eHub - " + gameId.name;
    }
    setUp();
