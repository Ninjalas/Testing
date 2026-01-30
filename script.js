document.addEventListener('DOMContentLoaded',function(){
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.site-nav');
  if(toggle&&nav){
    toggle.addEventListener('click',()=>{
      const shown = nav.style.display === 'block';
      nav.style.display = shown ? '' : 'block';
    });
  }

  const form=document.getElementById('contactForm');
  const msg=document.getElementById('formMessage');
  if(form&&msg){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const data = new FormData(form);
      msg.textContent = `Thanks, ${data.get('name') || 'guest'} — message received.`;
      form.reset();
    });
  }
});
