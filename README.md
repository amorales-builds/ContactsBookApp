# ContactsBookApp 📲

Una aplicación móvil de contactos desarrollada con **React Native**, que permite crear, visualizar, editar y eliminar contactos con almacenamiento persistente usando **Realm**.

## 🎯 Características

- 📋 **Listar contactos** - Visualiza todos tus contactos en una lista ordenada
- ➕ **Agregar contactos** - Crea nuevos contactos con información detallada
- 👁️ **Ver tarjeta** - Visualiza información completa de cada contacto
- ✏️ **Editar contactos** - Modifica la información de tus contactos existentes
- 🗑️ **Eliminar contactos** - Elimina contactos que ya no necesites
- 💾 **Almacenamiento persistente** - Los datos se guardan automáticamente en la base de datos local
- 🎨 **Interfaz moderna** - Diseño limpio con Material Design 3 usando React Native Paper

## 📋 Requisitos Previos

- **Node.js** v22.11.0 o superior
- **npm** - Gestor de paquetes
- **Android Studio** - Para compilar y ejecutar en Android

## 📱 Ejecutar la Aplicación

### En Android

```bash
npm run android
```

## 🏗️ Estructura del Proyecto

```
src/
├── App.js                          # Componente raíz y configuración de navegación
├── components/
│   ├── ContactCard.js              # Componente de tarjeta de contacto
│   ├── ContactForm.js              # Formulario para crear/editar contactos
│   └── ContactListItem.js          # Elemento individual en la lista
├── context/
│   └── ContactsContext.js          # Context API para gestión de estado
├── db/
│   └── realm.js                    # Configuración y funciones de Realm
└── screens/
    ├── ContactListScreen.js        # Pantalla principal con lista de contactos
    ├── ContactFormScreen.js        # Pantalla para agregar/editar contacto
    └── ContactViewScreen.js        # Pantalla de detalles del contacto
```

## 🛠️ Tecnologías Utilizadas

### Core
- **React Native** (0.84.1) - Framework para desarrollo móvil multiplataforma
- **React** (19.2.3) - Librería JavaScript para interfaz de usuario

### Navegación
- **React Navigation** - Sistema de navegación tipo stack
- **React Native Screens** - Optimización de rendimiento en transiciones

### Interfaz de Usuario
- **React Native Paper** - Componentes Material Design 3
- **React Native Vector Icons** - Iconos vectoriales
- **Safe Area Context** - Manejo de áreas seguras en dispositivos

### Base de Datos
- **Realm** (20.2.0) - Base de datos local y persistente

## 💾 Gestión de Estado

La aplicación utiliza **Context API** de React para gestionar el estado centralizado de contactos:

- **Cargar contactos** - Al iniciar la aplicación
- **Agregar contactos** - Crear nuevos registros
- **Editar contactos** - Modificar información existente
- **Eliminar contactos** - Remover registros

## 🗄️ Base de Datos

Se utiliza **Realm** como base de datos local que proporciona:

- Almacenamiento persistente de contactos
- Sincronización automática
- Operaciones CRUD eficientes
- Sin necesidad de servidor backend

## 🎨 Tema Personalizado

La aplicación utiliza Material Design 3 con colores personalizados:

- **Color Primario**: `#cb4fa6` (rosa)
- **Color Secundario**: `#03dac4` (turquesa)


## 📄 Licencia

Todos los derechos reservados. Proyecto privado.

## 👤 Autor

Amisadai Morales

Desarrollado como una aplicación de libreta de contactos con React Native.

---

**¡Gracias por usar ContactsBookApp!** 📚✨


