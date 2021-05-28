(function(window, document){
  'use strict';

  // "$" : 요소를 담고 있다
  // querySelectorAll : return '유사배열'인 NodeList 
  const $toggles = document.querySelectorAll('.toggle');
  const $toggleBtn = document.getElementById('toggle-btn');

  $toggleBtn.addEventListener('click', function(){
    toggleElements();
  });

  window.addEventListener('resize', function(){
    if (window.innerWidth > 1024) {
      offElements();
    }
  })

  function toggleElements(){
    // toggle class 를 가지고 있는 요소의 개수가 바뀔 수 있으므로
    [].forEach.call($toggles, function(toggle) {
      toggle.classList.toggle('on');
    });
  }

  function offElements(){
    [].forEach.call($toggles, function(toggle) {
      toggle.classList.remove('on');
    });    
  }

})(window, document)