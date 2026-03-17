# 🏥 MediTurnos

MediTurnos es una aplicación web desarrollada con React que permite a los usuarios gestionar turnos médicos de manera simple, rápida e intuitiva. Facilita la selección de profesionales, elección de fecha y horario, carga de datos del paciente y confirmación del turno, generando una orden almacenada en Firebase.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React** (Vite)
- 🔀 **React Router DOM**
- 🔥 **Firebase** (Firestore)
- 🎨 **CSS Modules**
- 🔔 **SweetAlert2**

---

## ✨ Funcionalidades

- 📋 Listado dinámico de profesionales de la salud
- 🔍 Vista en detalle de cada médico
- 📅 Selección de turnos:
  - Fecha
  - Horario
  - Obra social
  - Cantidad de turnos
- 🛒 Gestión de turnos (similar a carrito):
  - Agregar turnos
  - Eliminar turnos individuales
  - Vaciar lista de turnos
- 📊 Vista de turnos agendados (`TurnosView`)
- 📝 Formulario de datos del paciente
- ✅ Confirmación de turnos
- 🔥 Generación de orden en Firebase (Firestore)
- 🆔 Visualización del ID de la orden generada

---

## 📁 Estructura del proyecto
```
src/
 ├─ components/       # Componentes reutilizables de la UI
 ├─ context/          # Context API (CartContext para gestión de turnos)
 ├─ pages/            # Vistas principales (Home, Detail, TurnosView, etc.)
 ├─ services/         # Configuración y llamadas a Firebase
 ├─ styles/           # Estilos con CSS Modules
 ├─ App.jsx           # Componente raíz
 └─ main.jsx          # Punto de entrada
```

---

## ⚙️ Instalación

1. Clonar el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
```

2. Moverse a la carpeta del proyecto:
```bash
cd MediTurnos
```

3. Instalar dependencias:
```bash
npm install
```

4. Ejecutar la aplicación en entorno local:
```bash
npm run dev
```

> 📌 Es necesario contar con **Node.js** instalado (recomendado v18 o superior).

---

## 🔥 Configuración de Firebase

Para que la aplicación funcione correctamente, es necesario configurar Firebase:

1. Crear un proyecto en [Firebase](https://firebase.google.com/)
2. Habilitar **Firestore Database**
3. Crear un archivo dentro de `src/services/` (por ejemplo `firebase.js`) con tu configuración:
```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
```

---

## 🌐 Versión online

Podés ver el proyecto funcionando en el siguiente link:

👉 *(Agregar link de deploy — por ejemplo Vercel o Netlify)*

---

## 📚 Librerías utilizadas

| Librería | Uso |
|---|---|
| React | Construcción de la interfaz de usuario |
| React Router DOM | Navegación entre rutas |
| Firebase (Firestore) | Base de datos en la nube |
| SweetAlert2 | Alertas y notificaciones visuales |
| CSS Modules | Estilos encapsulados por componente |

---

## 👩‍💻 Autor

Desarrollado por **Virginia Salinas** ✨