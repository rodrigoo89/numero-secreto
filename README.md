# 🎯 Número Secreto

Un juego de adivinanza donde tenés 8 intentos para descubrir un número secreto entre 1 y 100.

**[→ Ver demo en vivo](https://numero-secreto-murex-phi.vercel.app/)**

---

## 💡 El origen

Este proyecto empezó como un ejercicio en Python puro. La idea era practicar lógica de control de flujo: bucles `while`, condicionales y entrada de datos por consola.

```python
from random import *

usuario = input("Ingrese su nombre: ")
print(f"Hola, {usuario}! Tendrás que adivinar un número entre 1 y 100. Tienes 8 intentos.")

numero_secreto = randint(1, 100)
intentos = 8

while intentos > 0:
    ingreso_numero = int(input(f"Te quedan {intentos} intentos. Ingresa un número: "))

    if ingreso_numero < 1 or ingreso_numero > 100:
        print("Por favor, ingresa un número entre 1 y 100.")
    elif ingreso_numero == numero_secreto:
        print(f"¡Felicidades, {usuario}! Has adivinado el número secreto en {9 - intentos} intentos.")
        break
    elif ingreso_numero < numero_secreto:
        print("Tu respuesta es incorrecta. Has elegido un número menor al número secreto.")
    else:
        print("Tu respuesta es incorrecta. Has elegido un número mayor al número secreto.")

    intentos -= 1

if intentos == 0:
    print(f"Lo siento, {usuario}. Has agotado tus intentos. El número secreto era {numero_secreto}.")
```

Después lo transformé en una landing page web para practicar HTML, CSS y JavaScript.

---

## 🚀 Cómo correr el proyecto

### Versión Python (consola)

Necesitás tener Python instalado.

```bash
python numero_secreto.py
```

### Versión Web

Abrí `index.html` directamente en el navegador, o visitá la [demo en Vercel](https://numero-secreto-murex-phi.vercel.app/).

---

## 🗂 Estructura del proyecto

```
numero-secreto/
├── index.html        # Estructura de la página
├── style.css         # Estilos y diseño
├── script.js         # Lógica del juego en JavaScript
└── README.md         # Este archivo
```

---

## 🧠 ¿Qué aprendí?

- Uso de `while` y `break` para controlar el flujo del juego
- Generación de números aleatorios con `random.randint()`
- f-strings para mensajes personalizados
- Cómo traducir lógica de consola a una interfaz web

---

## 🛠 Tecnologías

- Python 3
- HTML / CSS / JavaScript (vanilla)
- Desplegado en [Vercel](https://vercel.com)
