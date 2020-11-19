/* Slide 35 (#1) */
$(function(){
    if (window.preload && window.images){
      window.progressInterval = setInterval(function(){
        var progress = window.loadingProgress/window.images;
        if (progress >= 1) {
          clearInterval(window.progressInterval);
          $('.progress-bar-container').addClass('loaded');
          setTimeout(function(){
            $('.progress-bar-container').remove()
          },500);
        }
      },100);
    }
  });