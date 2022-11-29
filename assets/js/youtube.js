    var buttonEl = document.getElementById("button");
    var getVideo = function () {
      var url = document.getElementById("url").value;
      if (url == "") {
        alert("Error: No link inputted");
      }
      var char = "";
      var i = 0;
      while (char != "=") {
        char = url.charAt(i);
        i++;
      }
      var vidCode = "";
      while (i < url.length) {
        vidCode = vidCode + url.charAt(i);
        i++;
      }
      var embedLink = "";
      if (document.getElementById("type").value == "playlist") {
        embedLink = "https://www.youtube-nocookie.com/embed/videoseries?list=" + vidCode;
      }
      else {
        embedLink = "https://www.youtube-nocookie.com/embed/" + vidCode;
      }
      document.getElementById("vid").src = embedLink;
    }
    buttonEl.addEventListener("click", getVideo);
