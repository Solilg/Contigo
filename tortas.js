// Productos de la sección "Tortas y catering".
// Para cambiar una foto: poné la imagen en assets/tortas/ y escribí su ruta en "foto".
// Para mostrar un precio: agregá  precio: 25000  (sin puntos). Si no hay precio, se muestra "Precio a consultar".
// "pedido: true" = se agrega una sola vez, sin cantidad (sin TACC, catering).
// "fotos: [...]" = mosaico de varias fotos que se abren en grande con flechas.
var PRODUCTOS = [
  {id:'tofi', nombre:'Tarta Tofi', foto:'assets/tortas/tofi.jpg'},
  {id:'coco', nombre:'Tarta de coco y dulce de leche', foto:'assets/tortas/coco.jpg'},
  {id:'crumble', nombre:'Tarta crumble de manzana', foto:'assets/tortas/crumble.jpg'},
  {id:'keylime', nombre:'Key lime pie', foto:'assets/tortas/keylime.jpg'},
  {id:'lemon', nombre:'Lemon pie', foto:'assets/tortas/lemon.jpg'},
  {id:'tiramisu', nombre:'Tiramisú', foto:'assets/tortas/tiramisu.jpg'},
  {id:'cheesecake', nombre:'Cheesecake de frutos rojos', foto:'assets/tortas/cheesecake.jpg'},
  {id:'marquise', nombre:'Torta Marquise', foto:'assets/tortas/marquise.jpg'},
  {id:'chocotorta', nombre:'Chocotorta', foto:'assets/tortas/chocotorta.jpg'},
  {id:'matilda', nombre:'Torta Matilda', foto:'assets/tortas/matilda.jpg'},
  {id:'franui', nombre:'Marquise Franui', foto:'assets/tortas/franui.jpg'},
  {id:'chaja', nombre:'Torta Chajá', foto:'assets/tortas/chaja.jpg'},
  {id:'brownie', nombre:'Brownie con dulce de leche y merengue', foto:'assets/tortas/brownie.jpg'},
  {id:'redvelvet', nombre:'Red velvet', foto:'assets/tortas/redvelvet.jpg'},
  {id:'sintacc', nombre:'Torta sin TACC', pedido:true, destacado:'Sin TACC', foto:'assets/tortas/sintacc.jpg',
    texto:'Hacemos a pedido tu torta sin TACC, artesanal y con el mismo cariño de siempre. Contanos qué te gusta y la hacemos realidad.'},
  {id:'catering', nombre:'Catering para eventos', pedido:true, destacado:'Eventos',
    fotos:['assets/catering/catering-1.jpg','assets/catering/catering-2.jpg','assets/catering/catering-3.jpg','assets/catering/catering-4.jpg'],
    leyendas:['Picadas','Empanadas caseras','Brochettes caprese','Mesa dulce'],
    texto:'Resolvé toda la comida de tu evento con el sabor de la cocina de campo: empanadas, sándwiches, picadas y mesas dulces caseras, hechas con productos de calidad y pensadas a tu medida. Contanos qué celebrás y cuántos son, y armamos el menú juntos.'}
];
