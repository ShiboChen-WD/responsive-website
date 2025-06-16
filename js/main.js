$(document).ready(function() {
    // Change content on click
    $(".section").on("click", function() {
        // Ensure that the click does not affect the text with the 'no-animation' class
        if (!$(this).find("p").hasClass("no-animation")) {
            $(this).find("p").text("Content updated on click!");
        }
    });

    // Image swap on mouseover and mouseout
    $("#image").hover(
        function() {
            $(this).attr("src", "images/tomato2.jpg");
        },
        function() {
            $(this).attr("src", "images/tomato1.jpg");
        }
    );

    // Animation effect to move the image on click
    $(".image-container").on("click", function() {
        $(this).find("img#image").animate({
            left: "200px",         // Move the first image 200px to the right
            top: "200px",          // Move the first image 200px down
            opacity: 0.5           // Fade the first image slightly
        }, 1000)                    // The animation lasts for 1 second
        .animate({
            left: "0px",           // Move the first image back to its original position (left)
            top: "0px",            // Move the first image back to its original position (top)
            opacity: 1,            // Fade the first image back to full opacity
            transform: "rotate(360deg) scale(1.5)" // Add rotation and scaling effect
        }, 1000);                   // Another 1 second for the second part of the animation
    });

 // Initialize ScrollMagic controller
    var controller = new ScrollMagic.Controller();

    // Create ScrollMagic scene for image2-section
    new ScrollMagic.Scene({
        triggerElement: "#image2-section",
        triggerHook: 0.8, // When 80% of the element is visible
        offset: 50, // Additional offset to ensure it triggers
        reverse: false // Animation stays once triggered
    })
    .setClassToggle("#image2", "animated")
    .addIndicators({ // This adds visual indicators for debugging (remove in production)
        colorStart: "rgba(255, 0, 0, 0.5)",
        colorTrigger: "rgba(255, 0, 0, 0.5)",
        name: "image2"
    })
    .addTo(controller);


    // Initialize SoundJS
    createjs.Sound.alternateExtensions = ["mp3"]; // Fallback for different browsers
    
    // Register and preload your local sound file
    createjs.Sound.registerSound({
        src: "sounds/mysound.mp3",  // Path to your sound file
        id: "cookingSound"          // Unique ID for your sound
    });

    // Play sound when clicking image2
    $("#image2").on("click", function() {
        // Play with 30% volume and slight delay to ensure loading
        setTimeout(function() {
            createjs.Sound.play("cookingSound", { 
                volume: 0.8,
                interrupt: createjs.Sound.INTERRUPT_ANY
            });
        }, 100);
    });
    
});
