document.addEventListener("DOMContentLoaded", () => {
    const btnSpiderSense = document.getElementById("btn-spider-sense");
    const spiderSenseOutput = document.getElementById("spider-sense-output");

    if (btnSpiderSense && spiderSenseOutput) {
        btnSpiderSense.addEventListener("click", () => {
            const isHidden = spiderSenseOutput.classList.toggle("is-hidden");
            btnSpiderSense.textContent = isHidden
                ? "🕸️ ACTIVAR SENTIDO ARÁCNIDO"
                : "🛑 DESACTIVAR RADAR SENSORIAL";
        });
    }

    const accordionImages = document.querySelectorAll(".image-accordion img");
    accordionImages.forEach((img) => {
        img.addEventListener("click", () => {
            const wasActive = img.classList.contains("is-active");
            accordionImages.forEach((other) => other.classList.remove("is-active"));
            if (!wasActive) img.classList.add("is-active");
        });
    });
});
