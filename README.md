# GitFast · Asistente Generador de Comandos Git

[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-brightgreen?style=flat&logo=github)](https://schaconml.github.io/repo-agente-IA/)
[![Licencia](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Grupo](https://img.shields.io/badge/Grupo-32-orange.svg)](#integrantes)

> **Electiva:** IA Generativa: del Prompt al Producto  
> **Enlace de la aplicación en vivo (Celular y PC):** [https://schaconml.github.io/repo-agente-IA/](https://schaconml.github.io/repo-agente-IA/)

---

## 👥 Integrantes del Equipo (Grupo 32)
* **Camilo Andres Blanco Solano**
* **Santiago Chacón Montañez**
* **Santiago Ochoa Paipilla**
* **Sergio Andrés Rondon Borda**

---

## 🎯 1. El Problema
Los estudiantes de semestres iniciales e intermedios de Ingeniería de Sistemas suelen olvidar la sintaxis exacta y el orden de los comandos de consola para el control de versiones en Git. Este problema se vuelve crítico al momento de integrar código grupal, causando estrés, errores irreversibles (como pérdida de archivos locales) o conflictos de ramas justo en los minutos previos a la entrega formal de un proyecto de programación en la universidad.

---

## 👤 2. El Usuario
Un estudiante de Ingeniería de Sistemas que funge como responsable de la integración del código de su equipo, y que se encuentra bajo presión de tiempo a punto de subir la versión final de su repositorio a GitHub.

---

## 🚀 3. Las 4 Funciones Principales (Cumplimiento del PRD)

1. **Selección de la acción requerida de una lista de casos de uso comunes:**
   - Catálogo clasificado por categorías (*Guardar y Commitear*, *Ramas y Checkout*, *Subir y Sincronizar Remoto*, *Deshacer y Rescate*).
   - Buscador en tiempo real de recetas por palabras clave.

2. **Anotar variables personalizadas mediante campos de texto:**
   - Inserción de nombre de rama, remoto (`origin`), mensaje de commit semántico y flags seguros (`--set-upstream`, `--force-with-lease`).
   - Sanitización automática de ramas para prevenir errores de sintaxis en Git (eliminación de espacios y caracteres conflictivos).

3. **Generación y visualización del comando en tiempo real con copia en 1 toque:**
   - Vista previa interactiva estilo terminal con coloreado de sintaxis.
   - Botón táctil optimizado para celular y computador que copia al portapapeles con confirmación visual (*"¡Copiado al portapapeles!"*).
   - Desglose didáctico paso a paso que enseña qué hace cada comando y bandera.

4. **Marcar comandos generados en una lista de "Favoritos" persistente:**
   - Guardado en la memoria del navegador (`localStorage`) para que nunca se pierdan al cerrar la pestaña.
   - Vista dedicada de favoritos con filtros, botón de reapertura en el generador y opción para exportar a un script ejecutable `.sh`.

---

## 🛡️ 4. Lo que NO hace (Por Diseño y Seguridad)
* **No se conecta a la API de GitHub ni requiere tokens o inicios de sesión:** Garantiza una herramienta libre de fricción y con cero exposición de credenciales privadas.
* **No ejecuta comandos directamente en la consola del sistema operativo:** Previene daños accidentales o sobreescritura indeseada en los archivos locales del usuario. El usuario inspecciona, copia y pega con certeza.
* **No incluye herramientas visuales de resolución de conflictos (merge conflicts):** Resolver líneas cruzadas requiere análisis humano manual en el editor de código.

---

## 📱 Acceso Móvil y de Escritorio
La aplicación fue diseñada siguiendo principios *mobile-first* y *developer-precision*:
* Compatible con navegadores móviles (Chrome, Safari, Firefox, Edge en iOS y Android).
* Pestañas desplazables al tacto y botones amplios de toque fácil (mínimo 44px).
* Modo oscuro de alto contraste que reduce la fatiga visual en noches de laboratorio.

---

## 💻 Ejecución Local (Opcional)
Si deseas ejecutar la aplicación en tu máquina local sin conexión a internet:
1. Clona el repositorio:
   ```bash
   git clone https://github.com/schaconml/repo-agente-IA.git
   ```
2. Abre el archivo `index.html` en cualquier navegador web moderno (haz doble clic sobre el archivo). ¡Listo!
