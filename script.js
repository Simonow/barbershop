window.addEventListener('load',function(){
  var enterBtn = document.querySelector('#login-btn');
  var loginModal = document.querySelector('#login');
  var loginClose = document.querySelector('#login-close');
  var loginSubmit = document.querySelector('#login-submit');
  var mapBtn = document.querySelector('#howtogo');
  var mapModal = document.querySelector('#modal-map');
  var mapClose = document.querySelector('#map-close');
  var miniSliderImg = document.querySelector('.gallery-smpic');
  var miniSliderNext = document.querySelector('#mini-gallery-next');
  var miniSliderPrev = document.querySelector('#mini-gallery-prev');


  enterBtn.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    loginModal.classList.add('show');
  });
  loginClose.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    loginModal.classList.remove('show');
  });
  loginSubmit.addEventListener("click", function(e) {
    e.stopPropagation();
    loginModal.classList.remove('show');
  });
  mapBtn.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    mapModal.classList.add('show-map');
  });
  mapClose.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    mapModal.classList.remove('show-map');
  });

  miniSliderPrev.addEventListener('click', function(e) {
    var revSrc = miniSliderImg.src.split('').reverse().join('');
    var imgPos = revSrc.charAt(4);
    e.preventDefault();
    e.stopPropagation();
    if (imgPos < 4) {
      miniSliderImg.src = revSrc.replace(imgPos, +imgPos+1).split('').reverse().join('');
    }
    else {
      miniSliderImg.src = revSrc.replace(imgPos, 1).split('').reverse().join('');
    }
  });
  miniSliderNext.addEventListener('click', function(e) {
    var revSrc = miniSliderImg.src.split('').reverse().join('');
    var imgPos = revSrc.charAt(4);
    e.preventDefault();
    e.stopPropagation();
    if (imgPos > 1) {
      miniSliderImg.src = revSrc.replace(imgPos, +imgPos-1).split('').reverse().join('');
    }
    else {
      miniSliderImg.src = revSrc.replace(imgPos, 4).split('').reverse().join('');
    }
  });
});


