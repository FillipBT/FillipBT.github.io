function displayNextImage() {
          x = (x === images.length - 1) ? 0 : x + 1;
          document.getElementById("img").src = images[x];
      }

      function displayPreviousImage() {
          x = (x <= 0) ? images.length - 1 : x - 1;
          document.getElementById("img").src = images[x];
      }

      function startTimer() {
          setInterval(displayNextImage, 6000);
      }
      function startUp(){
      document.getElementById("img").src = images[0];
      }

      var images = [], x = -1;
      images[0] = "image1.jpg";
      images[1] = "image2.jpg";

