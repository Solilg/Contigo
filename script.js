(function(){
  var ok=['inicio','carta','tortas','visitanos'];
  function show(){
    var h=(location.hash||'').replace('#','');
    if(ok.indexOf(h)<0)h='inicio';
    ok.forEach(function(v){
      document.getElementById('v-'+v).classList.toggle('on',v===h);
    });
    document.querySelectorAll('nav a[data-v]').forEach(function(a){a.classList.toggle('on',a.dataset.v===h)});
    document.getElementById('carrito-btn').hidden=!(h==='tortas'||total()>0);
    window.scrollTo(0,0);
  }

  // ---- carrito de pedidos (se termina por WhatsApp) ----
  var WSP='5491130341396', CLAVE='contigo-pedido';
  var porId={}; PRODUCTOS.forEach(function(p){porId[p.id]=p});
  var pedido={};
  try{pedido=JSON.parse(localStorage.getItem(CLAVE))||{}}catch(e){}
  Object.keys(pedido).forEach(function(id){if(!porId[id])delete pedido[id]});
  function guardar(){try{localStorage.setItem(CLAVE,JSON.stringify(pedido))}catch(e){}}
  function total(){var n=0;for(var id in pedido)n+=pedido[id];return n}
  function plata(n){return '$'+n.toLocaleString('es-AR')}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}

  var lista=document.getElementById('productos');
  lista.innerHTML=PRODUCTOS.map(function(p){
    var foto=p.fotos?'<div class="mosaico" data-p="'+p.id+'">'+p.fotos.map(function(f,i){return '<button type="button" data-i="'+i+'" aria-label="Ver foto: '+esc((p.leyendas||[])[i]||p.nombre)+'"><img loading="lazy" src="'+esc(f)+'" alt=""></button>'}).join('')+'<span class="lupa">Ver fotos</span></div>'
      :p.foto?'<button type="button" class="foto-btn" data-p="'+p.id+'" data-i="0" aria-label="Ver foto de '+esc(p.nombre)+'"><img loading="lazy" src="'+esc(p.foto)+'" alt="'+esc(p.nombre)+'"></button>'
      :'<span class="sin-foto"><img src="assets/flores/amapola.png" alt=""><small>Foto próximamente</small></span>';
    return '<article class="prod'+(p.pedido?' especial':'')+'">'+
      '<div class="prod-foto">'+foto+(p.destacado?'<span class="etiqueta">'+esc(p.destacado)+'</span>':'')+'</div>'+
      '<div class="prod-txt"><h3>'+esc(p.nombre)+'</h3>'+(p.texto?'<p>'+esc(p.texto)+'</p>':'')+
      '<div class="prod-pie"><span class="precio">'+(p.precio?plata(p.precio):(p.pedido?'A pedido':'Precio a consultar'))+'</span>'+
      '<button type="button" class="btn agregar" data-id="'+p.id+'">'+(p.pedido?'Consultar':'Agregar')+'</button></div></div></article>';
  }).join('');
  // visor de fotos con flechas (mosaico del catering y fotos de tortas)
  var visor=document.getElementById('visor'), vImg=document.getElementById('visor-img'), vTxt=document.getElementById('visor-txt'), vFotos=[], vLey=[], vI=0;
  function mostrar(i){vI=(i+vFotos.length)%vFotos.length;vImg.src=vFotos[vI];vImg.alt=vLey[vI]||'';vTxt.textContent=(vLey[vI]||'')+(vFotos.length>1?'  ·  '+(vI+1)+' de '+vFotos.length:'');visor.classList.toggle('una',vFotos.length<2)}
  function abrirVisor(p,i){vFotos=p.fotos||[p.foto];vLey=p.leyendas||[p.nombre];visor.hidden=false;mostrar(i)}
  visor.addEventListener('click',function(e){
    if(e.target.closest('.ant'))mostrar(vI-1);
    else if(e.target.closest('.sig'))mostrar(vI+1);
    else if(e.target===visor||e.target.closest('.visor-cerrar'))visor.hidden=true;
  });
  document.addEventListener('keydown',function(e){
    if(visor.hidden)return;
    if(e.key==='Escape')visor.hidden=true;
    if(e.key==='ArrowLeft')mostrar(vI-1);
    if(e.key==='ArrowRight')mostrar(vI+1);
  });

  lista.addEventListener('click',function(e){
    var f=e.target.closest('[data-i]');
    if(f){var c=f.closest('[data-p]');abrirVisor(porId[c.dataset.p],+f.dataset.i);return}
    var b=e.target.closest('.agregar'); if(!b)return;
    var p=porId[b.dataset.id];
    pedido[p.id]=p.pedido?1:(pedido[p.id]||0)+1;
    guardar(); pintar(); abrir();
  });

  var caja=document.getElementById('carrito'), boton=document.getElementById('carrito-btn'), items=document.getElementById('carrito-lista');
  function abrir(){caja.hidden=false;boton.setAttribute('aria-expanded','true')}
  function cerrar(){caja.hidden=true;boton.setAttribute('aria-expanded','false')}
  boton.addEventListener('click',function(){caja.hidden?abrir():cerrar()});
  document.getElementById('carrito-cerrar').addEventListener('click',cerrar);

  function pintar(){
    var ids=Object.keys(pedido);
    document.getElementById('carrito-cuenta').textContent=total();
    if(total()>0)boton.hidden=false;
    items.innerHTML=ids.length?ids.map(function(id){
      var p=porId[id];
      return '<div class="linea"><span class="nom">'+esc(p.nombre)+'</span>'+
        (p.pedido?'':'<span class="cant"><button type="button" data-m="-1" data-id="'+id+'" aria-label="Uno menos">−</button><b>'+pedido[id]+'</b><button type="button" data-m="1" data-id="'+id+'" aria-label="Uno más">+</button></span>')+
        '<button type="button" class="quitar" data-q="'+id+'" aria-label="Quitar">×</button></div>';
    }).join(''):'<p class="vacio">Todavía no agregaste nada.</p>';
    document.getElementById('pedido-enviar').disabled=!ids.length;
  }
  items.addEventListener('click',function(e){
    var b=e.target.closest('button'); if(!b)return;
    if(b.dataset.q)delete pedido[b.dataset.q];
    else{pedido[b.dataset.id]+=+b.dataset.m; if(pedido[b.dataset.id]<1)delete pedido[b.dataset.id]}
    guardar(); pintar();
  });

  document.getElementById('pedido-enviar').addEventListener('click',function(){
    var t='¡Hola Contigo! Quiero hacer este pedido:\n';
    Object.keys(pedido).forEach(function(id){var p=porId[id];t+='• '+(p.pedido?'':pedido[id]+' x ')+p.nombre+'\n'});
    var nom=document.getElementById('pedido-nombre').value.trim(),
        fec=document.getElementById('pedido-fecha').value.trim(),
        not=document.getElementById('pedido-notas').value.trim();
    if(nom)t+='\nNombre: '+nom;
    if(fec)t+='\nPara: '+fec;
    if(not)t+='\nComentarios: '+not;
    window.open('https://wa.me/'+WSP+'?text='+encodeURIComponent(t),'_blank','noopener');
  });

  // enlaces que además de cambiar de pestaña bajan a una sección (ej.: sin TACC)
  document.addEventListener('click',function(e){
    var a=e.target.closest('[data-ir]'); if(!a)return;
    setTimeout(function(){document.getElementById(a.dataset.ir).scrollIntoView({behavior:'smooth',block:'start'})},60);
  });

  pintar();
  window.addEventListener('hashchange',show);
  show();
})();
