# Contigo · Cafetería y Pastelería · Villars

Sitio web estático (HTML, CSS y JavaScript, sin dependencias) para Contigo, cafetería y pastelería familiar de Villars, Buenos Aires.

## Estructura
- `index.html`: las cuatro pestañas (Inicio, Carta, Tortas y catering, Visitanos)
- `style.css`: estilos (fondo crema, marcos en verde apagado, acentos terracota)
- `script.js`: navegación entre pestañas y carrito de pedidos (se termina por WhatsApp al +54 9 11 3034-1396)
- `tortas.js`: lista de tortas, torta sin TACC y catering. Ahí se cambian nombres, fotos y precios (las instrucciones están al principio del archivo)
- `assets/`: logo, `pradera.jpg` (portada), `cafe-fruto.png`, `tortas/`, `catering/`, `local/` y `flores/` (láminas botánicas recortadas con fondo transparente)

## Imágenes de terceros y licencias
Todas son de libre uso, también comercial. Los créditos ya figuran en el pie de la página.
- **Flores** (`assets/flores/`): láminas de F. Edward Hulme, *Familiar Wild Flowers* (1875-1900), **dominio público**. Fuente: Wikimedia Commons, serie "Familiar wild flowers figured and described".
- **Logo** (`assets/logo-negro.png`), **foto de portada** (`assets/pradera.jpg`) y **fruto de café** (`assets/cafe-fruto.png`): imágenes aportadas por la clienta.
- **Tortas, catering y local** (`assets/tortas/`, `assets/catering/`, `assets/local/fachada.jpg` y `patio.jpg`): fotos propias de Contigo, del álbum compartido por la dueña. La Torta Chajá (`tortas/chaja.jpg`) está recortada del catálogo de tortas, porque en el álbum solo había videos de ella.
- **Estación de Villars** (`assets/local/estacion.jpg`): "Estación Villars - CGBA", de Jose Carrizo, **CC BY 2.0**. Obliga a dar crédito: no quitar la línea de créditos del pie. https://commons.wikimedia.org/wiki/File:Estaci%C3%B3n_Villars_-_CGBA.jpg
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
