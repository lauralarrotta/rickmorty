document.addEventListener("mousemove", (event) => {
  const elements = document.querySelectorAll(
    ".head-container, .body-container, .eye, .eyebag"
  );
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const elementX = rect.left + rect.width / 2;
    const elementY = rect.top + rect.height / 2;
    const angle = Math.atan2(
      event.clientY - elementY,
      event.clientX - elementX
    );
    const moveX = Math.cos(angle) * 10;
    const moveY = Math.sin(angle) * 10;
    element.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});
