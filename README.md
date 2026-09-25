# 🎮 VideoGamer Magangué

## Proyecto académico – Tienda gamer

**VideoGamer Magangué** es un sitio web académico y demostrativo orientado a la presentación de consolas, videojuegos y ofertas para usuarios interesados en productos PlayStation. En esta versión se realizaron mejoras de estructura, diseño, contenido multimedia, precios e interactividad con respecto a los requerimientos planteados para la actualización del sitio.

---

## 🚀 Mejoras realizadas

### 1. Incorporación de una sección exclusiva para PlayStation 5

Se agregó una nueva página independiente, `ps5.html`, dedicada a la PlayStation 5.

La nueva sección incluye:

- Presentación de la consola PS5.
- Características principales de la nueva generación.
- Información sobre el control DualSense.
- Juegos destacados de PS5.
- Precios de referencia para los productos.
- Botones de consulta mediante WhatsApp.
- Sección de oferta de PlayStation 5.
- Navegación independiente entre PS4 y PS5.

Esto permite ampliar el catálogo de la tienda y separar claramente la información de cada generación de consola.

### 2. Mejoras en las imágenes de los productos

Se incorporaron imágenes reales para mejorar la presentación visual de los productos:

- Consola PlayStation 4.
- Control DualShock 4.
- Consola PlayStation 5.
- Control DualSense.
- Juegos destacados de PS4.
- Juegos destacados de PS5.

Además, se realizaron ajustes mediante CSS para que las imágenes mantengan un encuadre adecuado dentro de sus tarjetas y contenedores.

Se utilizaron propiedades como `object-fit: contain`, `object-position: center`, dimensiones adaptables y contenedores con proporciones controladas para evitar que las imágenes se deformen o se salgan de su espacio.

### 3. Incorporación de precios de referencia

Se agregaron precios estándar o de referencia para facilitar la presentación comercial de los productos.

Ejemplos:

| Producto | Precio de referencia |
|---|---:|
| PlayStation 4 + DualShock 4 | $1.199.900 COP |
| Grand Theft Auto V | $89.900 COP |
| EA SPORTS FC 24 | $79.900 COP |
| God of War | $99.900 COP |
| Marvel's Spider-Man | $109.900 COP |
| PlayStation 5 + DualSense | $2.699.900 COP |
| Demon's Souls | $169.900 COP |
| Ratchet & Clank: Rift Apart | $149.900 COP |
| Returnal | $139.900 COP |
| Astro's Playroom | $119.900 COP |

> Los valores son de referencia para el proyecto académico y deben confirmarse con la tienda antes de una compra.

### 4. Implementación de carrito mediante JavaScript

Se mejoró la interacción del sitio mediante un carrito básico desarrollado con JavaScript.

El sistema permite:

- Agregar productos al carrito.
- Contabilizar la cantidad de productos seleccionados.
- Guardar temporalmente los productos seleccionados.
- Calcular el total de referencia.
- Mostrar los productos incluidos.
- Informar al usuario mediante mensajes emergentes.

Los botones de los productos utilizan atributos `data-product` y `data-price` para asociar cada artículo con su información.

### 5. Menú adaptable para dispositivos móviles

Se implementó un menú responsive mediante JavaScript y CSS.

En pantallas pequeñas:

- Se muestra un botón de menú.
- Los enlaces se organizan verticalmente.
- El menú puede abrirse y cerrarse.
- Al seleccionar un enlace, el menú se cierra automáticamente.

Esto mejora la navegación desde celulares y tablets.

### 6. Diseño responsive

El sitio fue adaptado para diferentes tamaños de pantalla mediante media queries CSS.

Se realizaron ajustes para:

- Computadores.
- Tablets.
- Teléfonos móviles.

Las tarjetas, imágenes, menús, botones, secciones y columnas cambian su distribución de acuerdo con el ancho disponible.

### 7. Mejoras visuales y de interfaz

Se reforzó la identidad visual gamer utilizando:

- Fondo oscuro.
- Gradientes.
- Efectos de iluminación.
- Tarjetas de productos.
- Efectos hover.
- Tipografías Orbitron y Poppins.
- Botones con animaciones.
- Bordes y sombras.
- Secciones diferenciadas para PS4 y PS5.

También se agregaron elementos visuales para mejorar la jerarquía de la información y facilitar la navegación.

### 8. Integración de contenido multimedia

Se incorporaron videos relacionados con los productos y videojuegos:

- Video de presentación de PS4.
- Gameplay de Marvel's Spider-Man.

Los videos utilizan controles HTML5 y archivos almacenados dentro de la carpeta `assets/`.

### 9. Integración de WhatsApp

Se agregaron botones de contacto mediante WhatsApp para facilitar la consulta de información sobre:

- PlayStation 4.
- PlayStation 5.
- Ofertas disponibles.

Los enlaces incluyen mensajes previamente configurados para orientar la consulta del usuario.

### 10. Mejora de la presentación del juego Marvel's Spider-Man

Se agregó una sección destacada para Marvel's Spider-Man con:

- Presentación del videojuego.
- Descripción.
- Precio de referencia.
- Botón de compra.
- Video de gameplay.

Esta sección permite presentar un producto específico con mayor contenido visual e informativo.

---

## 📋 Relación con los requerimientos de la actividad

| Requerimiento | Implementación |
|---|---|
| Mejorar el diseño del sitio | ✅ Diseño gamer renovado con CSS, gradientes, tarjetas, efectos y tipografías |
| Incorporar contenido adicional | ✅ Nueva sección independiente para PS5 |
| Mejorar la presentación de productos | ✅ Imágenes, tarjetas, precios y descripciones |
| Incorporar interactividad | ✅ Carrito, menú móvil, mensajes y búsqueda mediante JavaScript |
| Adaptar el sitio a dispositivos | ✅ Diseño responsive mediante CSS |
| Incorporar multimedia | ✅ Videos de PS4 y Spider-Man |
| Facilitar el contacto | ✅ Botones de WhatsApp |
| Organizar productos y precios | ✅ Catálogo de juegos con precios de referencia |
| Utilizar Bootstrap | ⚠️ Esta versión no contiene una dependencia de Bootstrap; el diseño responsive actual se implementó directamente con CSS |
| Formulario de contacto con validación JavaScript | ⚠️ No se encuentra implementado actualmente en el código de esta versión |
| Animaciones o dinamismo con jQuery | ⚠️ No se encuentra una dependencia de jQuery; los efectos actuales utilizan CSS y JavaScript nativo |

> **Nota:** Los tres últimos puntos se indican de forma explícita para que el README refleje el estado real del código y no documente funcionalidades que actualmente no están presentes.

---

## 📁 Estructura principal

```
videogamer-magangue/
│
├── index.html
├── ps5.html
├── styles.css
├── script.js
│
└── assets/
    ├── hero-gaming.png
    ├── video-ps4.mp4
    └── spiderman.mp4
```

### Archivos principales

- **`index.html`**: página principal con contenido de PS4, catálogo, ofertas, multimedia y contacto.
- **`ps5.html`**: página dedicada a PlayStation 5.
- **`styles.css`**: estilos, diseño responsive, tarjetas, imágenes, animaciones y adaptación para diferentes dispositivos.
- **`script.js`**: funcionalidades del carrito, menú móvil, búsqueda y mensajes interactivos.
- **`assets/`**: recursos multimedia utilizados por el proyecto.

---

## 🛠️ Tecnologías utilizadas

- **HTML5** – estructura y contenido del sitio.
- **CSS3** – diseño visual, responsive, animaciones y adaptación de imágenes.
- **JavaScript** – interacción, carrito, menú móvil y mensajes.
- **Google Fonts** – tipografías Orbitron y Poppins.
- **WhatsApp** – canal de contacto directo.

---

## 🎯 Objetivo de las mejoras

Las modificaciones buscan convertir la página inicial en un sitio web gamer más completo, organizado e interactivo. Se amplió el catálogo con PlayStation 5, se mejoró la presentación de las imágenes, se incorporaron precios de referencia, se fortaleció la adaptación a dispositivos móviles y se añadieron funcionalidades de interacción mediante JavaScript.

De esta manera, el proyecto presenta una estructura más cercana a la de una tienda virtual demostrativa y permite evidenciar la aplicación práctica de HTML5, CSS3 y JavaScript.

---

## ⚠️ Consideraciones

Este proyecto tiene carácter **académico y demostrativo**. Los precios, números de contacto, disponibilidad y demás datos comerciales utilizados deben verificarse antes de realizar una compra real.

Los nombres, logotipos, personajes, videojuegos y marcas pertenecen a sus respectivos propietarios.
