// Minimal interactions: mobile nav toggle
document.addEventListener('DOMContentLoaded', ()=> {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(!toggle || !nav) return;
  toggle.addEventListener('click', ()=> {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
});