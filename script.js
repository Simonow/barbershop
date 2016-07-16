window.addEventListener('load',function(){
  var enterBtn = document.querySelector('#login-btn');
  var loginModal = document.querySelector('#login');
  var loginClose = document.querySelector('#login-close');
  var loginSubmit = document.querySelector('#login-submit');
  var mapBtn = document.querySelector('#howtogo');
  var mapModal = document.querySelector('#modal-map');
  var mapClose = document.querySelector('#map-close');
/*  var mapBlock = document.createElement('div');*/

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
});


