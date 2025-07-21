# 🚪 A-Frame Auto Door System

Welcome to the **A-Frame Auto Door** project — a clean and efficient interactive door component built with [A-Frame](https://aframe.io/). As you approach the door, it opens smoothly with a realistic animation. As you walk away, it closes automatically, ensuring a seamless experience.

---

## ✨ Features

- 🎮 **Smooth First-Person Movement** — With low speed and look-based direction.
- 🚶 **Proximity-Based Trigger** — Door opens/closes based on user location.
- 🎞️ **Non-Looping Animations** — Each animation plays fully without interruption.
- 🔊 **Optional Audio Support** — Play a sound during door transitions.
- 🧠 **Custom Door Component** — Easy to apply to any door in your scene.

---

## 📁 Project Structure

```plaintext
project-root/
│
├── glb/
│   └── door.glb             # 3D model of the door
├── audio/
│   └── door.mp3             # Optional door sound
├── js/
│   └── automatic-door.js    # Main logic and animation handling
├── index.html               # Entry point
├── LICENSE                  # MIT License
└── README.md                # You're reading it!
````

---

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/aframe-auto-door.git
   cd aframe-auto-door
   ```

2. **Run it locally:**

   * Option A: Open `index.html` directly in your browser.
   * Option B: Use Live Server / GitHub Pages / Vite for smoother development.

3. **Enjoy the interaction!**

---

## 🧩 How to Use

1. Place your `.glb` door model in the `/glb` folder.
2. Add the `door-trigger` component to any door entity:

   ```html
   <a-entity gltf-model="#doorModel" door-trigger></a-entity>
   ```
3. Include the script:

   ```html
   <script src="./js/automatic-door.js"></script>
   ```

---

## 📜 License

This project is licensed under the **MIT License** — free to use, modify, and share.
See the [LICENSE](./LICENSE) file for more details.

---

## 👤 Author

**Mohammad JBM**
🌐 [GitHub Profile](https://github.com/Mohammad-JBM)

> *Crafting immersive, intelligent, and beautifully intuitive 3D worlds — one line of code at a time.*
