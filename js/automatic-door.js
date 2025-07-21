AFRAME.registerComponent("door-trigger", {
  schema: {
    radius: { type: "number", default: 3 },
  },

  init: function () {
    const el = this.el;
    this.camera = document.querySelector("#rig");

    // Load Audio
    this.doorSound = new Audio(document.querySelector("#doorSound").src);
    this.doorSound.preload = "auto";

    this.mixer = null;
    this.openAction = null;
    this.closeAction = null;
    this.lastState = "closed";
    this.clock = new THREE.Clock();
    this.isAnimating = false;

    el.addEventListener("model-loaded", () => {
      const model = el.getObject3D("mesh");
      if (!model) return;

      this.mixer = new THREE.AnimationMixer(model);
      const clips = model.animations;

      clips.forEach((clip) => {
        if (clip.name === "open") {
          this.openAction = this.mixer.clipAction(clip);
          this.openAction.setLoop(THREE.LoopOnce);
          this.openAction.clampWhenFinished = true;
        }
        if (clip.name === "close") {
          this.closeAction = this.mixer.clipAction(clip);
          this.closeAction.setLoop(THREE.LoopOnce);
          this.closeAction.clampWhenFinished = true;
        }
      });

      this.mixer.addEventListener("finished", () => {
        this.isAnimating = false;
      });
    });
  },

  tick: function () {
    if (!this.mixer || !this.openAction || !this.closeAction) return;

    const cameraPos = this.camera.object3D.position;
    const doorPos = this.el.object3D.position;
    const distance = cameraPos.distanceTo(doorPos);

    if (this.isAnimating) {
      this.mixer.update(this.clock.getDelta());
      return;
    }

    // Enter
    if (distance < this.data.radius && this.lastState === "closed") {
      this.playSound();
      this.openAction.reset().play();
      this.closeAction.stop();
      this.lastState = "open";
      this.isAnimating = true;
    }

    // Exit
    if (distance >= this.data.radius && this.lastState === "open") {
      this.playSound();
      this.closeAction.reset().play();
      this.openAction.stop();
      this.lastState = "closed";
      this.isAnimating = true;
    }

    this.mixer.update(this.clock.getDelta());
  },

  playSound: function () {
    this.doorSound.pause();
    this.doorSound.currentTime = 0;
    this.doorSound.play();
  },
});