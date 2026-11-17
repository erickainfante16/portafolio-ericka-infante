# ✦ Portafolio Web — Ericka Infante

Portafolio personal desarrollado como una aplicación de una sola página (**SPA** con navegación dinámica sin recarga) para presentar mi perfil, stack tecnológico y proyectos como **Desarrolladora Web Full Stack Junior**.

Diseño inspirado en una estética *scrapbook / Polaroid* con paleta de colores en tonos ciruela, lila y rosa pastel, totalmente responsivo y accesible.

🔗 **Demo en vivo:** [erickainfante16.github.io](https://erickainfante16.github.io)
---

## ✨ Características Principales

* **Navegación fluida entre vistas:** Cambio dinámico entre las secciones (*Inicio, Habilidades, Proyectos, Blog y Contáctame*) mediante JavaScript puro sin recargar la página.
* **Galería de proyectos con modales interactivos:** Cada tarjeta abre una ficha técnica detallada con el propósito del proyecto, desafíos técnicos resueltos, tecnologías aplicadas y enlaces al código y demo.
* **Diseño responsivo y accesible:** Adaptado para dispositivos móviles, tablets y escritorio, con navegación por teclado (`Enter` y `Escape` para modales) y menú hamburguesa en pantallas pequeñas.
* **Identidad visual personalizada:** Estética tipo tarjeta Polaroid con sombras sólidas (*sticker-style*), tipografía editorial (`Playfair Display` + `DM Sans` + `Space Mono`) y animaciones suaves en CSS.

---

## 🛠️ Tecnologías Utilizadas

* **Estructura y Estilos:** HTML5 semántico, CSS3 moderno (Grid, Flexbox, variables CSS, `@keyframes` y diseño responsivo).
* **Interactividad:** JavaScript (ES6+) para el manejo del DOM, cambio de vistas y renderizado dinámico de los detalles de cada proyecto.
* **Recursos y Librerías:** Google Fonts, Font Awesome 6 e íconos de Devicon.
* **Despliegue y Control de Versiones:** Git & GitHub Pages.

---

## 📂 Estructura del Proyecto

```text
portafolio/
├── assets/                  # Imágenes, avatar, capturas de proyectos y CV en PDF
│   ├── foto-ericka.jpg
│   ├── avatar-ericka.png
│   ├── proyecto-merch-f1.png
│   ├── proyecto-autoflow.png
│   └── CV-Ericka-Infante.pdf
├── index.html               # Estructura principal y vistas de la aplicación
├── styles.css               # Estilos, paleta de colores y diseño responsivo
├── script.js                # Lógica de navegación y modales interactivos
└── README.md                # Documentación del proyecto