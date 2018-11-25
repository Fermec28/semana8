# JavaScript Refactor Procesal A OOP

## Resumen

Como programador profesional, habrán varias situaciones en las que te encontraras con javascript escrito de forma un poco miedosa. En este reto te vamos a pedir que tomes código escrito en forma procesal, y le hagas un refactor para que se convierta en código escrito de forma orientada a Objetos.

## Pasos

### Paso 0 :

Haz un refactor del código en el archivo `application.js`. Esfuérzate por dejar lo mínimo posible en el `global scope`.

Tips:

- Dale buenos nombres a todas las funciones anónimas
- Mueve las funciones anónimas a Objetos
- Cada `event handler` no debe de tener mas de 2 lineas de longitud
- Crea una clara separación de responsabilidades

### Paso 1 : Version MVC

Ahora que tenemos las funciones desacopladas, podemos organizar nuestro código en comportamientos.

1. Todo los comportamientos relacionados con el DOM deberían estar almacenados en el objeto `view`
2. Los comportamientos relacionados al juego y su estado deben estar en otro objeto llamado `model`
3. Deberas crear un objeto llamado `controller` el cual maneje la comunicación entre el `view` y el `model` así como crear los `event listeners`.
