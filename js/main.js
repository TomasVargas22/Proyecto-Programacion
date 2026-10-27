document.addEventListener("DOMContentLoaded", () => {
    const btnSpiderSense = document.getElementById("btn-spider-sense");
    const spiderSenseOutput = document.getElementById("spider-sense-output");
    if (btnSpiderSense && spiderSenseOutput) {
        btnSpiderSense.addEventListener("click", () => {
            spiderSenseOutput.classList.toggle("is-hidden");
            if (spiderSenseOutput.classList.contains("is-hidden")) {
                btnSpiderSense.textContent = "🕸️ ACTIVAR SENTIDO ARÁCNIDO";
            } else {
                btnSpiderSense.textContent = "🛑 DESACTIVAR RADAR SENSORIAL";
            }
        });
    }
});