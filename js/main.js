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
});
