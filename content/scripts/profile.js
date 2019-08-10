
$(document).ready(function () {

  const $btnCollapseItems = document.getElementById('collapse-item-btn');
  
  $('#collapseItems').on('shown.bs.collapse', function () {
    $btnCollapseItems.innerText = 'Ver menos proyectos';
  });
  
  $('#collapseItems').on('hidden.bs.collapse', function () {
    $btnCollapseItems.innerText = 'Ver más proyectos';
  });
  
  const $linkContact = document.getElementById('workTogether');
  const $iconLinkedIn = document.getElementById('icon-linkedin');
  const $iconGithub = document.getElementById('icon-github');
  const $iconTwitter = document.getElementById('icon-twitter');
  const $iconPlatzi = document.getElementById('icon-platzi');
  
  $linkContact.addEventListener('click', (event) => {
    $iconLinkedIn.classList.add('zoom-icon');
  });
  
  $iconLinkedIn.addEventListener('animationend', (event) => {
    $iconLinkedIn.classList.remove('zoom-icon');
    $iconGithub.classList.add('zoom-icon');
  });
  $iconGithub.addEventListener('animationend', (event) => {
    $iconGithub.classList.remove('zoom-icon');
    $iconTwitter.classList.add('zoom-icon');
  });
  $iconTwitter.addEventListener('animationend', (event) => {
    $iconTwitter.classList.remove('zoom-icon');
    $iconPlatzi.classList.add('zoom-icon-platzi');
  });
  $iconPlatzi.addEventListener('animationend', (event) => {
    $iconPlatzi.classList.remove('zoom-icon-platzi');
  });

  const $footer = document.getElementById('footer');
  const $options = { threshold: 1 };
  
  function callback(entries, observer) {
    if (entries[0].isIntersecting) {
      $iconLinkedIn.classList.add('zoom-icon');
    }
  };
  
  const $footerObserver = new IntersectionObserver(callback, $options);
  $footerObserver.observe($footer);
  
  const $screemMobile = window.matchMedia('(max-width: 360.98px)');
  const $homeImg = document.getElementById('homeImg');
  const $portfolioItem = document.getElementsByClassName('portfolio-item');
  const $collapseItems = document.getElementById('collapseItems');
  
  validation($screemMobile);

  $screemMobile.addListener(validation);
  
  function validation(event) {
    if (event.matches) {
      $homeImg.classList.replace('d-flex', 'd-none');

      Array.prototype.forEach.call($portfolioItem, function(item) {
          item.classList.replace('col-5', 'col-11');
      });

      $collapseItems.classList.add('m-2');
      
    }else{
      $homeImg.classList.replace('d-none', 'd-flex');
      
      Array.prototype.forEach.call($portfolioItem, function(item) {
        item.classList.replace('col-11', 'col-5');
      });

      $collapseItems.classList.remove('m-2');
    }
  }

});
