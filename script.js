(function(){
  var ok=['inicio','carta','tortas','visitanos'];
  function show(){
    var h=(location.hash||'').replace('#','');
    if(ok.indexOf(h)<0)h='inicio';
    ok.forEach(function(v){
      document.getElementById('v-'+v).classList.toggle('on',v===h);
    });
    document.querySelectorAll('nav a').forEach(function(a){a.classList.toggle('on',a.dataset.v===h)});
    window.scrollTo(0,0);
  }
  window.addEventListener('hashchange',show);
  show();
})();