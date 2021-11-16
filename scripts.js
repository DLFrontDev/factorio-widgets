let calcSolar = function(e, resetFlag) {
    const pnOut = document.getElementById("pn-out").value;
    const acCap = document.getElementById("ac-cap").value;
    const clDur = !resetFlag ? (document.getElementById("cl-dur").value || 6.94) * 60 : 6.94 * 60;
    const plEff = !resetFlag ? document.getElementById("pl-eff").value || 100 : 100;
    const tgMw = document.getElementById("tg-mw").value * 1000;
    const solarCalc = 0.168 * (pnOut / acCap) * clDur * plEff / 100;

    document.getElementById("solar-calc-target").innerHTML = solarCalc + " accumulators per solar panel";
    document.getElementById("solar-calc-item-target").innerHTML = tgMw && !resetFlag ? Math.ceil(tgMw / (pnOut * (plEff / 100))) + " solar panels and " + Math.ceil((tgMw / (pnOut * (plEff / 100))) * solarCalc) + " accumulators for " + document.getElementById("tg-mw").value + " MW" : "";
}

for (let index = 0; index < document.querySelectorAll(".solar-panel-calculator").length; index++) {
    const element = document.querySelectorAll(".solar-panel-calculator")[index];
    if (element.nodeName == "SELECT") {
        element.addEventListener("change", calcSolar);
    } else {
        element.addEventListener("keyup", calcSolar);
    }
}

document.getElementById("solar-panel-calc-reset").addEventListener("click", function(e) {
    calcSolar(e, true);
});

calcSolar();

let toggleSection = function (e) {
    const target = document.getElementById(e.target.getAttribute("data-toggle"));
    

    if (target.classList.contains("open")) {
        target.classList.remove("open");
        target.style = "";
    } else {
        target.classList.add("open");
        target.style = "min-height: " + target.querySelector(".form-content-wrapper").clientHeight;
    }
}

for (let index = 0; index < document.querySelectorAll("[data-toggle]").length; index++) {
    const element = document.querySelectorAll("[data-toggle]")[index];
    element.addEventListener("click", toggleSection);
}