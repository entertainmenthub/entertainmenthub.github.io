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
    const shovel = {
        name: "Shovel 3D",
        url: "https://www.crazygames.com/embed/shovel-3d",
    };
    const market = {
        name: "Market Boss",
        url: "https://www.crazygames.com/embed/market-boss",
    };
    const ovo = {
        name: "OvO",
        url: "https://www.crazygames.com/embed/ovo",
    };
    
    
    const gameId = localStorage.getItem('gameId');

    const setUp = function () {
      if (gameId == "karts")  {
          document.getElementById("game").src = karts.url;
          document.getElementById("title").textContent = karts.name;
          document.getElementById("head").textContent = "eHub - " + karts.name;
      }
      if (gameId == "br")  {
          document.getElementById("game").src = br.url;
          document.getElementById("title").textContent = br.name;
          document.getElementById("head").textContent = "eHub - " + br.name;
      }
      if (gameId == "lol")  {
          document.getElementById("game").src = lol.url;
          document.getElementById("title").textContent = lol.name;
          document.getElementById("head").textContent = "eHub - " + lol.name;
      }
      if (gameId == "chess")  {
          document.getElementById("game").src = chess.url;
          document.getElementById("title").textContent = chess.name;
          document.getElementById("head").textContent = "eHub - " + chess.name;
      }
      if (gameId == "ctrtt")  {
          document.getElementById("game").src = ctrtt.url;
          document.getElementById("title").textContent = ctrtt.name;
          document.getElementById("head").textContent = "eHub - " + ctrtt.name;
      }
      if (gameId == "shovel") {
          document.getElementById("game").src = shovel.url;
          document.getElementById("title").textContent = shovel.name;
          document.getElementById("head").textContent = "eHub - " + shovel.name;
      }
      if (gameId == "market") {
          document.getElementById("game").src = market.url;
          document.getElementById("title").textContent = market.name;
          document.getElementById("head").textContent = "eHub - " + market.name;
      }
      if (gameId == "ovo") {
          document.getElementById("game").src = ovo.url;
          document.getElementById("title").textContent = ovo.name;
          document.getElementById("head").textContent = "eHub - " + ovo.name;
      }  
        
    }
    
    setUp();
