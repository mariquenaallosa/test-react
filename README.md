# 🚀 TravelStay

TravelStay es una aplicación desarrollada con React + Vite que permite visualizar hoteles con sus respectivos detalles consumidos desde un WebService. Muestra información como estrellas, ubicación, servicios y precios.

## ✨ Características

- 📌 **Lista de hoteles** con información detallada.
- 🏨 **Iconos representativos** para comodidades y regímenes (por ejemplo, Wi-Fi, parking, desayuno incluido).
- 📱 **Interfaz responsiva** y estilizada con Tailwind CSS.
- 🎨 **Iconografía atractiva** con FontAwesome y Lucide React.


## 🛠 Tecnologías utilizadas

- ⚛️ React
- ✨ Vite
- 🎨 Tailwind CSS
- 🔣 FontAwesome
- ✨ Lucide React

## 🌐 WebService Consumido
- **URL del WebService**:
- [https://wmw3lg8sha.execute-api.us-east-2.amazonaws.com/dev/dummy](https://wmw3lg8sha.execute-api.us-east-2.amazonaws.com/dev/dummy)
## 📥 Instalación y configuración

1. Clona el repositorio:
   ```sh
   git clone https://github.com/mariquenaallosa/test-react.git
   ```
2. Accede al directorio del proyecto:
   ```sh
   cd test-react
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Inicia la aplicación en modo desarrollo:
   ```sh
   npm run dev
   ```
5. Abrir el proyecto en el navegador
   - Visita http://localhost:5173 para ver la aplicación en acción.

## 📂 Estructura del proyecto

```
/
│── src/
│   ├── components/
│   │   ├── DynamicIcon.jsx
│   │   ├── HotelCard.jsx
│   │   ├── HotelList.jsx
│   │   ├── NavBar.jsx
│   │   ├── RenderStars.jsx
│   │   ├── Spinner.jsx
│   ├── services/
│   │   ├── api.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│── public/
│   ├── travel.svg
│── index.html
│── package.json
│── vite.config.js
│── README.md
```
