window.onload = function () {
    let rezultatElement = document.getElementById("rezultat");

    let params = new URLSearchParams(window.location.search);

    let ime = params.get("ime") || "Nije uneseno";
    let prezime = params.get("prezime") || "Nije uneseno";
    let destinacija = params.get("destinacija") || "Nije odabrano";
    let putovao = params.get("putovao") || "Nije odgovoreno";


    let regije = params.getAll("regije");
    let regijeText = regije.length > 0 ? regije.join(", ") : "Nijedna regija nije odabrana";

    rezultatElement.innerHTML = `
        <strong>Ime:</strong> ${ime}<br>
        <strong>Prezime:</strong> ${prezime}<br>
        <strong>Omiljena destinacija:</strong> ${destinacija}<br>
        <strong>Jeste li putovali u Hrvatsku:</strong> ${putovao}<br>
        <strong>Posjećene regije:</strong> ${regijeText}
    `;

let promjeniStilBtn = document.getElementById("promjeniStilBtn");
if (promjeniStilBtn) {
    let stilToggle = false;

    promjeniStilBtn.onclick = function () {
        if (!stilToggle) {

            rezultatElement.style.backgroundColor = "#333";
            rezultatElement.style.color = "#fff";
            rezultatElement.style.padding = "10px";
            rezultatElement.style.borderRadius = "8px";
        } else {

            rezultatElement.style.backgroundColor = "";
            rezultatElement.style.color = "";
            rezultatElement.style.padding = "";
            rezultatElement.style.borderRadius = "";
        }
        stilToggle = !stilToggle;
    };
}
};