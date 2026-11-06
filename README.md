# Contigo · Cafetería y Pastelería · Villars

Sitio web estático (HTML, CSS y JavaScript, sin dependencias) para Contigo, cafetería y pastelería familiar de Villars, Buenos Aires.

## Estructura
- `index.html`: las cuatro pestañas (Inicio, Carta, Tortas y catering, Visitanos)
- `style.css`: estilos (fondo crema, marcos en verde apagado, acentos terracota)
- `script.js`: navegación entre pestañas y carrito de pedidos (se termina por WhatsApp al +54 9 11 3034-1396)
- `tortas.js`: lista de tortas, torta sin TACC y catering. Ahí se cambian nombres, fotos y precios (las instrucciones están al principio del archivo)
- `assets/`: logo, `pradera.jpg` (portada), `inicio/`, `tortas/`, `catering/`, `local/` y `flores/` (láminas botánicas recortadas con fondo transparente)

## Imágenes de terceros y licencias
Todas son de libre uso, también comercial. Los créditos ya figuran en el pie de la página.
- **Flores** (`assets/flores/`): láminas de F. Edward Hulme, *Familiar Wild Flowers* (1875-1900), **dominio público**. Fuente: Wikimedia Commons, serie "Familiar wild flowers figured and described".
- **Logo** (`assets/logo-negro.png`), **foto de portada** (`assets/pradera.jpg`) y **fruto de café** (`assets/cafe-fruto.png`, hoy sin usar): imágenes aportadas por la clienta.
- **Tortas, catering, inicio y local** (`assets/tortas/`, `assets/catering/`, `assets/inicio/`, `assets/local/fachada.jpg` y `patio.jpg`): fotos propias de Contigo, del álbum compartido por la dueña. La Torta Chajá (`tortas/chaja.jpg`) está recortada del catálogo de tortas, porque en el álbum solo había videos de ella.
- **Estación de Villars, fondo de Visitanos** (`assets/local/estacion-frente.jpg`): "Estacion villars en 2023", de Fma12, **CC BY-SA 4.0**. Obliga a dar crédito y a indicar la licencia: no quitar la línea de créditos del pie. https://commons.wikimedia.org/wiki/File:Estacion_villars_en_2023.jpg
- **Ciclistas** (`assets/local/ciclistas.jpg`): cuadro de un video del álbum de Contigo.
- **QR del wifi** (`assets/qr-wifi.png`): recortado de la captura que pasó la dueña. Si cambia la contraseña del wifi, hay que reemplazar el QR y el texto de la Carta.
- `assets/local/estacion.jpg` (foto anterior de Jose Carrizo) y `assets/cafe-fruto.png` ya no se usan.
- **Tipografías**: Cormorant Garamond, Dancing Script, Playfair Display y Lora (Google Fonts), licencia **SIL Open Font License**: libres para uso comercial.

## Enlaces directos (útiles para el QR)
- Carta: `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/#carta`
- Tortas y catering: `.../#tortas`
- Visitanos: `.../#visitanos`

## Publicar en GitHub Pages
1. Subir todo el contenido de esta carpeta a un repositorio nuevo.
2. En el repositorio: Settings → Pages → Source: "Deploy from a branch" → Branch: `main` / `/ (root)`.
3. En un minuto el sitio queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Pendiente de completar
- Sabores y precios de los helados artesanales (sección "Helados artesanales" de la carta en `index.html`).
- Precios de las tortas (`precio:` en `tortas.js`).
- Una foto propia de la Torta Chajá.
