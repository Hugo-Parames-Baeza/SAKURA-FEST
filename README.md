# SAKURA BEER FEST

¡Bienvenido al repositorio de **Sakura Beer Fest**!

Este proyecto universitario ha sido diseñado por estudiantes de la Facultad de Publicidad y Relaciones Públicas de Sevilla con el objetivo de difundir y promover el primer festival de cerveza japonesa en España. La iniciativa busca fusionar la cultura cervecera nipona con la primavera sevillana, ofreciendo una experiencia única de celebración y descubrimiento y que mejor que realizar una web sencilla para darla a conocer.

## 🎯 Propósito del proyecto

- **Dar a conocer el festival Sakura Beer Fest** y su propuesta de valor cultural y gastronómica.
- **Aplicar conocimientos de comunicación, diseño y desarrollo web** para una campaña real de promoción.
- **Acercar la cultura japonesa al público sevillano** a través de la cerveza, la música y actividades temáticas.

## 🏮 ¿Qué encontrarás en el festival?

- **Selección exclusiva de cervezas japonesas**: artesanales, ediciones limitadas y sabores únicos que representan la innovación y tradición nipona.
- **Música en vivo y espectáculos**: artistas nacionales e internacionales, conectando las culturas japonesa y española.
- **Gastronomía japonesa**: degustaciones, talleres y zona de comida temática.
- **Actividades culturales**: exhibiciones, merchandising, zonas VIP y descanso.
- **Ambiente primaveral**: celebrado en uno de los lugares más emblemáticos de Sevilla, Plaza España.

## 📅 Información clave

- **Lugar:** Plaza España, Sevilla

## ✅ Requisitos funcionales

1. **Visualización de información del festival**: El usuario debe poder consultar la fecha, ubicación, cartel de artistas, zonas y actividades del evento.
2. **Cuenta atrás hasta el festival**: Se muestra un contador regresivo hasta el inicio del evento, tanto en la página principal como en la sección de entradas.
3. **Sistema de navegación intuitivo**: Menú interactivo que permite acceder fácilmente a las distintas secciones del sitio: Home, Line-up, Mapa, Galería, Info y Tickets.
4. **Página de galería**: Visualización de imágenes relacionadas con el festival.
5. **Sección de entradas**: Información sobre la disponibilidad y venta de tickets, con botón para compra (simulado para el prototipo).
6. **Información de contacto y redes sociales**: Acceso directo a los perfiles del festival en Instagram, X y TikTok.
7. **Adaptación a diferentes dispositivos**: La web debe ser navegable y legible en móviles, tablets y ordenadores.

## 🚦 Requisitos no funcionales

1. **Rendimiento**: El sitio debe cargar rápidamente, optimizando imágenes y recursos para garantizar una experiencia fluida.
2. **Usabilidad**: Interfaz sencilla, amigable y coherente con la identidad visual del festival, facilitando la navegación para cualquier usuario.
3. **Accesibilidad**: Utilizar etiquetas semánticas, textos alternativos en imágenes y contraste adecuado para permitir el acceso a personas con discapacidad.
4. **Escalabilidad**: El diseño y la arquitectura deben permitir añadir nuevas secciones o funcionalidades fácilmente.
5. **Seguridad básica**: Protección frente a entradas maliciosas en formularios (si se implementan) y uso de buenas prácticas de desarrollo.
6. **Compatibilidad**: Soporte para los principales navegadores web modernos (Chrome, Firefox, Edge, Safari).
7. **Mantenibilidad**: Código organizado, modular y documentado para facilitar futuras mejoras y colaboración entre estudiantes.

## 🖥️ Sobre el proyecto web

La web del Sakura Beer Fest está desarrollada en **React** y utiliza **Vite** para el entorno de desarrollo y build. El diseño está enfocado en la experiencia de usuario y la identidad visual japonesa, incorporando colores, tipografías y animaciones propias de la cultura Sakura. Al ser un proyecto universitario que debia de mostrar un UI se centro en crear una pagina sencilla que al estar desarrollado en React carece de SEO, pero perfecta para mostrar en la presentacion del festival.

### Estructura principal

- `src/pages/Home.jsx`: Página principal, bienvenida y cuenta atrás para el festival.
- `src/pages/Layout.jsx`: Información detallada sobre el evento y sus zonas.
- `src/pages/Tickets.jsx`: Sistema de entradas y cuenta atrás para la venta.
- `src/pages/Galeria.jsx`: Galería visual del festival.
- `src/components/Counter.jsx`: Componente de cuenta atrás para el inicio del festival.
- `src/utils/constantes.js`: Contenido estático, line-up de artistas, información del evento y contactos.

### Tecnologías utilizadas

- **React**
- **Vite**
- **CSS personalizado**
- **Javascript moderno (ES6+)**

## 👩‍💻 Instalación y desarrollo

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Hugo-Parames-Baeza/SAKURA-FEST.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el proyecto en modo desarrollo:
   ```bash
   npm run dev
   ```

## 📢 Contribuye

Este proyecto está abierto a aportaciones de estudiantes y colaboradores interesados en la promoción de eventos culturales y el desarrollo web. Si tienes ideas, mejoras o quieres sumarte, ¡no dudes en abrir un issue o pull request!

---

> "Porque la primavera no solo se celebra con flores, sino también con cerveza. Y no hay primavera sin sakura."

---

**Proyecto académico - Facultad de Publicidad y Relaciones Públicas de Sevilla**
