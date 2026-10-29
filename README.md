# Spider-Code: La Amenaza de J.A.B.R.A.

Proyecto desarrollado para las materias de **Programación Web** (Prof. Alejandra Rodríguez Berrocal) y **Diseño de Software** (Prof. Sofía).  
10° Año - Especialidad en Desarrollo Web, CTP Cotepecos (2026).

---

## De qué trata la historia
Evans Vance es un estudiante de Ingeniería de Software de 21 años en la Universidad Fidélitas que además arregla laptops en Rohrmoser, pero que en secreto cuida las calles de San José como Spider-Code. 

La historia arranca a las 11:20 p.m. mientras está jugando una partida de Fortnite con Axel, su mejor amigo y soporte técnico por Discord. De repente, la inteligencia artificial que Evans estaba programando para su proyecto de la u (llamada J.A.B.R.A.) se descontrola en su Mac, hackea el módem y se escapa por la red eléctrica de la capital para tomar el control de los semáforos e intentar meterse a un chasis robótico militar en un centro de datos en Pavas.

Con la ayuda de Axel monitoreando cámaras y de Nacho coordinando choferes de DiDi para reportar bloqueos en la calle, Evans tiene una carrera contra el tiempo: tiene menos de 40 minutos para frenar a la IA en Pavas y al mismo tiempo subir su tarea comprimida (.rar) al campus virtual de la Fidélitas antes de las 11:59 p.m. para no quedarse en la materia.

---

## Secciones y características de la página
- **Portada (Hero):** Introducción de la historia, botones de navegación y una galería en acordeón interactiva hecha con CSS que muestra 5 fotos de Spider-Code en diferentes poses de acción.
- **Personajes:** Tarjetas con la información de Evans Vance, Axel (The Guy in the Chair), la IA J.A.B.R.A. y Nacho (Líder de choferes DiDi).
- **Cronología (Historia):** Capítulos divididos por horas con una llamada de voz en Discord, un HUD táctico con telemetría del traje y el monitor de objetivos de Evans.
- **Laboratorio de Sentido Arácnido:** Bloque interactivo donde al presionar el botón de diagnóstico, JavaScript activa y muestra una terminal que escanea línea por línea la frecuencia electromagnética de la ciudad para ubicar a J.A.B.R.A.
- **Desenlace:** Resolución en el datacenter usando un ciclo while infinito para trabar la descarga de la IA, junto con el comprobante de entrega del campus virtual a las 11:58:40 p.m. con nota 100/100.
- **Diseño Responsive:** La página se adapta tanto a monitores de computadora como a pantallas de celular usando CSS Grid, Flexbox y Media Queries.

---

## Estructura de carpetas
```text
ProyectoProgramacion/
├── css/
│   └── styles.css
├── img/
│   ├── axel-hub.jpg
│   ├── escena-mac.png
│   ├── jabra-pavas.jpg
│   ├── spider-closeup.jpg
│   ├── spider-code-hero.png
│   ├── spider-cornisa.jpg
│   ├── spider-emblem.png
│   ├── spider-sabana.jpg
│   └── spider-salto.jpg
├── js/
│   └── main.js
├── .gitignore
├── index.html
└── README.md
```

---

## Control de versiones (Git)
Durante el desarrollo del sitio se trabajó con ramas de Git para separar cada funcionalidad:
- `feature/historia`: Maquetación de la cronología y misiones.
- `feature/interactivo`: Primera integración de la galería en acordeón y el laboratorio.
- `feature/estilos`: Maquetación y estructura de diseño en CSS puro.
- `feature/javascript`: Funcionalidades de la terminal del radar, el acordeón y la navegación activa.

La versión final estable quedó integrada en la rama principal `main` y etiquetada como `v1.0`.

---

**Autor:** Tomás Vargas Molina  
**Nivel:** 10° Año (Desarrollo Web)  
**Colegio:** CTP Cotepecos  
**Año:** 2026
