(function(){
  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('nav a').forEach(a=>{
    const href = (a.getAttribute('href')||'').toLowerCase();
    if(href === file) a.classList.add('active');
  });
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  document.querySelectorAll('form[data-local-confirm]').forEach(form=>{
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const box = form.querySelector('.notice');
      if(box){ box.classList.add('show'); box.textContent = 'Mesajul a fost înregistrat. Vă mulțumim!'; }
      form.reset();
    });
  });
})();
