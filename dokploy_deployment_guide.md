# Guía de Despliegue en Dokploy: Nuxt 4 SSG (Static Site Generation)

Esta guía te guiará paso a paso para desplegar la landing page de **NaturaBags** de manera correcta y optimizada en **Dokploy**.

---

## ⚡ ¿Por qué esta arquitectura es ultra rápida?

Tu proyecto ya cuenta con una configuración ideal para el rendimiento y SEO mediante **SSG (Static Site Generation)**:

1. **Pre-renderizado en Servidor:** Al compilar, Nuxt visita cada ruta de tu aplicación y genera archivos HTML estáticos con todo el contenido ya escrito. El cliente recibe el HTML listo, sin pantallas en blanco ni retrasos por ejecución de JavaScript (esto optimiza el *First Contentful Paint* y el SEO al 100%).
2. **Multi-Stage Docker Build:** La compilación y generación estática (`pnpm run generate`) se realiza dentro de un contenedor Docker temporal de Node.js.
3. **Servidor Nginx de Alto Rendimiento:** El contenedor final de producción **no tiene Node.js ni Nuxt corriendo**. Únicamente contiene el servidor web Nginx sirviendo archivos planos. Esto reduce el consumo de memoria RAM del servidor a prácticamente **cero** y ofrece una velocidad de respuesta (TTFB) de pocos milisegundos.
4. **Caché y Compresión:** Nginx está configurado en tu [nginx.conf](file:///home/jorge/naturabags/naturabags-web/nginx.conf) para comprimir archivos con **gzip** y añadir cabeceras de caché agresivas (`Cache-Control: public, max-age=31536000, immutable`) para archivos estáticos (JS, CSS, imágenes).

---

## 🛠️ Paso a Paso para Desplegar en Dokploy

Dokploy es un PaaS auto-alojado excelente. Utilizaremos el soporte nativo de **Dockerfile** que ya tienes implementado.

### Paso 1: Subir el código a tu repositorio Git
Asegúrate de tener todos tus cambios confirmados y subidos a tu proveedor Git (GitHub, GitLab, Gitea, etc.).
```bash
git add .
git commit -m "feat: configuraciones listas para despliegue SSG"
git push origin main
```

### Paso 2: Crear una Aplicación en Dokploy
1. Inicia sesión en tu panel de **Dokploy**.
2. Ve a **Projects** en el menú lateral.
3. Selecciona tu proyecto actual (o crea uno nuevo, por ejemplo, `NaturaBags`).
4. Haz clic en **Add Service** y selecciona **Application**.
5. Ponle un nombre descriptivo (ej. `naturabags-web`).

### Paso 3: Conectar tu Repositorio Git
1. En la pestaña **Source**, selecciona tu proveedor Git.
2. Si es la primera vez, conecta tu cuenta (Dokploy te guiará para autorizar el acceso).
3. Selecciona tu repositorio (ej: `Jorge-solis04/Naturabags`) y la rama de producción (`main` o `master`).
4. (Opcional) Activa la casilla **Autodeploy** si quieres que cada vez que hagas `git push` a esa rama se reconstruya y despliegue automáticamente en producción.

### Paso 4: Configurar el Proveedor de Construcción (Build Provider)
Este paso es crucial para usar la arquitectura Nginx optimizada:
1. Ve a la sección **Build** o **Configuration** de tu aplicación en Dokploy.
2. En la opción **Build Type** / **Build Provider**, cambia el valor por defecto (que suele ser *Nixpacks*) a **Dockerfile**.
3. **Dockerfile Path:** Asegúrate de que apunte a `/Dockerfile` (está en la raíz del proyecto).
4. **Context Path:** `/` (raíz del proyecto).

> [!IMPORTANT]
> Al seleccionar **Dockerfile**, Dokploy leerá tu [Dockerfile](file:///home/jorge/naturabags/naturabags-web/Dockerfile) multi-etapa y ejecutará la compilación dentro de Docker. No necesitas instalar Node.js ni pnpm en el sistema operativo base de tu VPS.

### Paso 5: Configurar el Dominio y Puerto
1. Ve a la pestaña **Domains** en Dokploy.
2. Haz clic en **Add Domain**.
3. Escribe el dominio donde quieres desplegar tu landing (ej: `naturabags.com.mx` o un subdominio de pruebas como `test.naturabags.com.mx`).
4. En **Port** (Puerto de Destino), escribe **`80`**.
   * *Explicación:* Tu [Dockerfile](file:///home/jorge/naturabags/naturabags-web/Dockerfile) expone el puerto `80` (`EXPOSE 80`) para Nginx. Traefik (el balanceador de carga interno de Dokploy) enrutará las peticiones HTTP del exterior a este puerto.
5. Asegúrate de tener habilitado **HTTPS (SSL)**. Dokploy generará automáticamente un certificado SSL gratuito con Let's Encrypt.

> [!NOTE]
> Para que el certificado SSL y el dominio funcionen, debes apuntar un registro **A** en la configuración DNS de tu dominio hacia la dirección IP pública de tu VPS donde corre Dokploy.

### Paso 6: Lanzar el Despliegue
1. Haz clic en el botón **Deploy** en la esquina superior derecha.
2. Ve a la pestaña **Logs** o **Deployments** para observar el proceso en tiempo real. Verás cómo Dokploy:
   * Descarga la imagen `node:22-alpine`.
   * Ejecuta `pnpm install` y descarga las dependencias.
   * Ejecuta `pnpm run generate` compilando la landing de Nuxt y guardándola en `.output/public`.
   * Pasa a la siguiente etapa, descarta todo el entorno de Node.js (ahorrando megabytes) y monta los archivos estáticos sobre `nginx:stable-alpine`.
   * Levanta el contenedor de Nginx.

---

## 🔍 Cómo verificar que el despliegue es 100% SSG y correcto

Una vez que Dokploy marque el estado como **Running**, abre tu navegador y realiza estas comprobaciones rápidas:

1. **Verificar Renderizado en Servidor (SEO y velocidad):**
   * Haz clic derecho en cualquier parte de tu landing page desplegada y selecciona **Ver código fuente de la página** (o presiona `Ctrl + U`).
   * Busca textos de tu landing page. Si los textos e imágenes están ahí escritos directamente en el HTML, significa que el SSG funcionó correctamente. Si solo ves una etiqueta vacía como `<div id="__nuxt"></div>` y un script gigante, algo falló y se generó como SPA (Single Page Application), lo cual no es lo deseado.
2. **Revisar las Cabeceras de Caché (Performance):**
   * Presiona `F12` para abrir las Herramientas de Desarrollo y ve a la pestaña **Red (Network)**.
   * Recarga la página.
   * Haz clic en algún archivo CSS o JS y verifica los **Headers de Respuesta (Response Headers)**. Deberías ver:
     ```http
     Cache-Control: public, max-age=31536000, immutable
     Content-Encoding: gzip
     ```
   * Si ves estas cabeceras, la configuración de [nginx.conf](file:///home/jorge/naturabags/naturabags-web/nginx.conf) se está aplicando con éxito y los navegadores de tus clientes no volverán a descargar los mismos archivos si no han cambiado.

---

## 💡 Consejos para tus Pruebas en Producción

* **Entorno de Staging/Pruebas:** Puedes añadir múltiples dominios en Dokploy. Si aún no quieres apuntar tu dominio principal `naturabags.com.mx`, puedes configurar un subdominio de pruebas gratuito que te provea Dokploy o crear uno en tus DNS como `dev.naturabags.com.mx` apuntando a la misma IP.
* **Limpieza de Caché de Navegador:** Cuando actualices la landing y hagas redespliegue, Nginx cambiará el nombre de los archivos JS/CSS generados por Nuxt (gracias al hashing de Nuxt), por lo que tus usuarios obtendrán los cambios inmediatamente sin que se rompa el diseño por caché vieja.
* **Integración con WhatsApp:** Dado que la landing redirige a WhatsApp, haz la prueba en producción desde un teléfono móvil. Pulsa el botón flotante y verifica que se abra correctamente la aplicación de WhatsApp con el mensaje personalizado preestablecido.
