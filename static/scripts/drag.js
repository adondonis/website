const image = document.getElementById("userAvatar");

let rotation = 0;
let dragging = false;
let centerX, centerY;

image.addEventListener("pointerdown", (e) => {
  dragging = true;

  const rect = image.getBoundingClientRect();

  centerX = rect.left + rect.width / 2;
  centerY = rect.top + rect.height / 2;

  image.style.transition = "none";
  image.style.cursor = "grabbing";

  image.setPointerCapture(e.pointerId);
});

image.addEventListener("pointermove", (e) => {
  if (!dragging) return;

  const dx = e.clientX - centerX;
  const dy = e.clientY - centerY;

  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

  rotation = angle;

  image.style.transform = `rotate(${rotation}deg)`;
});

image.addEventListener("pointerup", (e) => {
  dragging = false;

  image.releasePointerCapture(e.pointerId);
  image.style.cursor = "grab";

  image.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";

  rotation = 0;
  image.style.transform = "rotate(0deg)";
});

image.addEventListener("pointercancel", () => {
  dragging = false;

  image.style.cursor = "grab";

  image.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";

  rotation = 0;
  image.style.transform = "rotate(0deg)";
});
