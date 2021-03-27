
      var Play = document.querySelector(".playBtn");
      var span = document.querySelectorAll(".test");

      /*Play.addEventListener("click", function () {
        
        if (musica.click) {
             musica.muted = false;

        for(var i=0; i< span.length; i++){
               span[i].dataset.animacion = "true";
            }

         for(var i=0; i< span.length; i++){
               span[i].dataset.test = "true";
            }
          } else {
             musica.muted = true;
              for(var i=0; i< span.length; i++){
               span[i].dataset.animacion = "false";
            }


               for(var i=0; i< span.length; i++){
               span[i].dataset.test = "false";
            }


          }
      });
      */

      var x = 1;

      Play.addEventListener("click", function() {
          x++;
          console.log(x)
          if (x < 2) {
            for(var i=0; i< span.length; i++){
               span[i].dataset.animacion = "true";
            }
           

          } else {
               x = 0;             
              for(var i=0; i< span.length; i++){
               span[i].dataset.animacion = "false";
            }

            for(var i=0; i< span.length; i++){
               span[i].dataset.test = "false";
            }

            
            
          }

          })
