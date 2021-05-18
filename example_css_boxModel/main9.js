const el = document.querySelector('.element');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
  if(el.classList.contains('hide')){
    el.classList.remove('hide');
  } else {
    el.classList.add('hide');
  }
});