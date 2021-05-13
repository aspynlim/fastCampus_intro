const special = document.querySelector('#special');

special.addEventListener('click', function(e) {
  // console.log(e);
});

const me = document.getElementById('me');
console.log(me.dataset.myName); // "Heropy"
console.log(me.dataset.myAge); // "851"