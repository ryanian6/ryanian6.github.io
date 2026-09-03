$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     


    // TODO 2 - Create Platforms
    //createPlatform(x, y, width, height, "color")
createPlatform(500, 600, 100, 290);
createPlatform(300, 700, 50, 50, "red");
createPlatform(650, 520, 90, 1);
createPlatform(300, 400, 50, 20, "green");
createPlatform(800, 400, 100, 60);
createPlatform(1100, 550, 10, 26);
createPlatform(1200, 360, 60, 1);
createPlatform(1200, 500, 50, 10);
createPlatform(500, 300, 100, 10);
createPlatform(1000, 100, 1, 900, "orange");
    // TODO 3 - Create Collectables
createCollectable("steve", 310, 350,);
createCollectable("diamond", 750, 250,);
createCollectable("diamond", 550, 550,);
createCollectable("max", 100, 300,);

    
    // TODO 4 - Create Cannons
createCannon("bottom", 680, 1000);
createCannon("bottom", 1200, 2000);
createCannon("bottom", 1100, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
