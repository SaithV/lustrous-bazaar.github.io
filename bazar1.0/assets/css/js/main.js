// Mobile menu
const toggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Static carousel controls (no JSON)
(function initControlledCarousel(){
  const track = document.getElementById('popularTrack');
  if(!track) return;
  const prevBtn = document.querySelector('.carousel__btn.prev');
  const nextBtn = document.querySelector('.carousel__btn.next');
  const dotsWrap = document.querySelector('.carousel__dots');

  const slides = Array.from(track.children);
  let index = 0;

  const slidesPerView = () => {
    if(window.innerWidth >= 960) return 4;
    if(window.innerWidth >= 640) return 2;
    return 1;
  };
  const maxIndex = () => Math.max(0, slides.length - slidesPerView());

  function applyTransform(){
    const percentPerSlide = 100 / slidesPerView();
    track.style.transform = `translateX(-${index * percentPerSlide}%)`;
    slides.forEach(li => li.classList.remove('is-active'));
    const activeSlice = slides.slice(index, index + slidesPerView());
    activeSlice.forEach(li => li.classList.add('is-active'));
  }

  function buildDots(){
    dotsWrap.innerHTML = '';
    for(let i=0;i<=maxIndex();i++){
      const b = document.createElement('button');
      b.type='button';
      b.addEventListener('click', ()=>{ index=i; update(); });
      dotsWrap.appendChild(b);
    }
  }

  function update(){
    if(prevBtn) prevBtn.disabled = index<=0;
    if(nextBtn) nextBtn.disabled = index>=maxIndex();
    const dots = dotsWrap.querySelectorAll('button');
    dots.forEach((d,i)=> i===index? d.setAttribute('aria-current','true') : d.removeAttribute('aria-current'));
    applyTransform();
  }

  prevBtn && prevBtn.addEventListener('click', ()=>{ if(index>0){ index--; update(); } });
  nextBtn && nextBtn.addEventListener('click', ()=>{ if(index<maxIndex()){ index++; update(); } });

  window.addEventListener('resize', ()=>{ const prevMax = maxIndex(); buildDots(); if(index>maxIndex()) index=maxIndex(); update(); });

  buildDots();
  update();
})();

// Create reflection images for .product.mirror cards
(function addReflections(){
  document.querySelectorAll('.product.mirror img').forEach(img => {
    if(img.parentElement.querySelector('.reflection')) return;
    const clone = img.cloneNode(true);
    clone.classList.add('reflection');
    img.parentElement.appendChild(clone);
  });
})();

// Reveal animations for images
(function revealOnIntersect(){
  const targets = document.querySelectorAll('.hero-img, .about__img img, .product.mirror img:not(.reflection)');
  if(!('IntersectionObserver' in window)){ targets.forEach(t=>t.classList.add('reveal')); return; }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('reveal'); obs.unobserve(e.target); }
    });
  }, {threshold:.25});
  targets.forEach(t=> obs.observe(t));
})();