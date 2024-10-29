window.onload = function() {
    
        // Image 1 moves down to center
        document.querySelector('.img-1').style.transform = 'translate(0, 121%)';
        // document.querySelector('.image1').style.opacity = '1';  // Make it visible

        // Image 2 moves up to center
        document.querySelector('.heding').style.transform = 'translate(0, -120%)';
        // document.querySelector('.image2').style.opacity = '1';  // Make it visible

        // Heading 1 moves from left to center
        document.querySelector('.h-l').style.transform = 'translate(180%, 0)';
        // document.querySelector('.h-l').style.opacity = '1';  // Make it visible

        // Heading 2 moves from right to center
       document.querySelector('.h-r').style.transform = 'translate(-320%, 0)';
        // document.querySelector('.h-r').style.opacity = '1';  // Make it visible

    }





    window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;

    // Trigger animation when the scroll position passes 100px
    if (scrollPosition > 90) {
        // Image 1 moves down to center
        document.querySelector('.img-1').style.transform = 'translate(0, 250%)';
        
         document.querySelector('.heding').style.transform = 'translate(0, -320%)';
       
       document.querySelector('.h-l').style.transform = 'rotate(45deg),translate(10%, 0)';
        // document.querySelector('.h-l').style.opacity = '1';  // Make it visible

    } else {
        // Reset everything if user scrolls back up
        document.querySelector('.img-1').style.transform = 'translate(0, 121%)';
         document.querySelector('.heding').style.transform = 'translate(0, -120%)';
        document.querySelector('.h-l').style.transform = 'translate(180%, 0)';
        // document.querySelector('.h-l').style.opacity = '1';  // Make it visible

        
    }
});

       