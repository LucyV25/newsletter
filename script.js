document.querySelector("#newsletter").addEventListener("submit", (e) => {
    e.preventDefault();  // Zabráníme odeslání formuláře a obnovení stránky

    const email = document.querySelector("#email").value;  // Získání hodnoty z e-mailového inputu

    // Validace e-mailu
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        alert('Zadejte platný e-mail!');
        return;
    }

    // Pokud je e-mail platný, skryjeme formulář a zobrazíme děkovnou zprávu
    const form = document.querySelector("#newsletter");
    form.innerHTML = `<p>Děkujeme za váš zájem! Těšte se na novinky na e-mailu: <strong>${email}</strong>.</p>`;
});
