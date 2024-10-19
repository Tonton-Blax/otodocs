const okNumbers = [2, 3, 4, 5, 6, 8];
/**
 * @param {HTMLElement} node The node to attach the tooltip to
 * @param {{sizes: [number, number], src: string, n: string}} params The URL of the image to display in the tooltip
 * @returns {object | null} An object with a single method, `onDestroy`, which is
 */
export function tooltip(node, { sizes, src, n }) {
  if (!okNumbers.includes(parseInt(n))) return null;
  node.classList.add("tooltip-oto");
  node.setAttribute("tabindex", 0);

  /** @type {number} */
  let timeoutId;
  /** @type {HTMLElement | null} */
  let currentTooltip;

  function handleFocus(e) {
    clearTimeout(timeoutId);
    removeExistingTooltip();

    timeoutId = setTimeout(() => {
      const child = document.createElement("img");
      child.src = src;
      child.setAttribute("id", "tooltip");
      child.style.position = "absolute";
      child.style.marginTop =
        window.innerHeight - e.clientY < 185
          ? `-${sizes[0]}px`
          : `${sizes[1]}px`;
      child.style.zIndex = "1000";
      node.appendChild(child);

      // Trigger reflow to ensure the animation starts
      void child.offsetWidth;

      child.classList.add("animate-in");
      currentTooltip = child;

      node.addEventListener("mouseleave", handleBlur);
      node.addEventListener("blur", handleBlur);
      node.removeEventListener("mouseenter", handleFocus);
      node.removeEventListener("focus", handleFocus);
    }, 500);
  }

  function handleBlur() {
    clearTimeout(timeoutId);
    removeExistingTooltip();

    node.removeEventListener("mouseleave", handleBlur);
    node.removeEventListener("blur", handleBlur);
    node.addEventListener("mouseenter", handleFocus);
    node.addEventListener("focus", handleFocus);
  }

  function removeExistingTooltip() {
    if (currentTooltip && currentTooltip.parentNode === node) {
      currentTooltip.classList.remove("animate-in");
      currentTooltip.classList.add("animate-out");
      currentTooltip.addEventListener(
        "animationend",
        () => {
          if (currentTooltip?.parentNode === node) {
            node.removeChild(currentTooltip);
          }
          currentTooltip = null;
        },
        { once: true }
      );
    }
  }

  node.addEventListener("mouseenter", handleFocus);
  node.addEventListener("focus", handleFocus);

  return {
    onDestroy() {
      node.removeChild(node.querySelector("#tooltip"));
      clearTimeout(timeoutId);
      node.classList.remove("tooltip-oto");
      node.removeEventListener("mouseenter", handleFocus);
      node.removeEventListener("focus", handleFocus);
    },
  };
}
