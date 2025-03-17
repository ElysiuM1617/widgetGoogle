# Widget de Reseñas de Google

Este proyecto es un widget interactivo que permite buscar lugares y mostrar las reseñas de Google en un carrusel dinámico. Utiliza la API de Google Places para obtener la información y Swiper.js para la navegación fluida de las reseñas.
## Características
- Búsqueda rápida de lugares con la API de Google Places.
- Muestra reseñas con nombre, foto de perfil, calificación y comentario.
- Carrusel interactivo con Swiper.js.
- Diseño responsivo y personalizable.

## Requisitos
- Conexión a internet para obtener datos de la API.
- Un navegador web moderno compatible con **HTML, CSS y JavaScript**.
- Clave de API de **Google Places**.

## Instalación
1. Clona este repositorio o descarga los archivos:
   ```bash
   git clone https://github.com/ElysiuM1617/widgetGoogle.git
   ```
2. Abre el archivo `index.html` en un navegador.
3. Configura la clave de API de Google en `index.html`, reemplazando `"API_KEY"`:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=API_KEY&libraries=places\"></script>
   ```

## Estructura del Proyecto
```
/widgetGoogle
│── index.html      # Estructura principal del widget
│── styles.css      # Estilos del widget
│── script.js       # Lógica del widget
```

## Uso
  1. Entra a la página: http://elysium1817.wuaze.com
  2. Ingresa el **nombre del lugar** en la barra de búsqueda.
  3. Haz clic en **Buscar**.
  4. Se mostrarán las **reseñas de Google** en un carrusel interactivo.

## API Utilizada
### **Google Places API**
- **Detalles del lugar:**
  - URL: `https://maps.googleapis.com/maps/api/place/details/json`
  - Parámetros: `place_id`, `fields=reviews,name`, `key=TU_API_KEY`.

- **Búsqueda de lugares:**
  - URL: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json`
  - Parámetros: `query=nombre del lugar`, `fields=place_id`.
