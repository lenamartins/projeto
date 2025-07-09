// Tudo dentro do DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    // Funções acessíveis no HTML
    window.showDetails = function (name, accessibility, address, rating, image, mapsUrl) {
        const detailsEl = document.getElementById("placeDetails");

        document.getElementById("placeName").textContent = name;
        document.getElementById("placeAccessibility").textContent = `Acessibilidade: ${accessibility}`;
        document.getElementById("placeAddress").textContent = address;
        document.getElementById("placeRating").textContent = rating;
        document.getElementById("placeType").textContent = accessibility;
        document.getElementById("placeImage").src = image;
        document.getElementById("googleMapsLink").href = mapsUrl;

        detailsEl.style.display = "block";
    };

    window.closeDetails = function () {
        document.getElementById("placeDetails").style.display = "none";
    };

    window.abrirLogin = function () {
        document.getElementById("loginModal").style.display = "block";
    };

    window.fecharLogin = function () {
        document.getElementById("loginModal").style.display = "none";
        document.getElementById("erroSenha").style.display = "none";
        document.getElementById("senhaAdmin").value = "";
    };

    window.verificarSenha = function () {
        const senha = document.getElementById("senhaAdmin").value;
        const senhasValidas = ["lmaripera", "220908"];

        if (senhasValidas.includes(senha)) {
            window.location.href = "cadastro.html";
        } else {
            document.getElementById("erroSenha").style.display = "block";
        }
    };

    window.sortTable = function () {
        const container = document.querySelector(".cards-container");
        const cards = Array.from(container.querySelectorAll(".card"));

        cards.sort((a, b) => {
            const ratingA = parseFloat(a.querySelector("p:nth-of-type(3)").textContent.split(":")[1].trim());
            const ratingB = parseFloat(b.querySelector("p:nth-of-type(3)").textContent.split(":")[1].trim());
            return ratingB - ratingA;
        });

        container.innerHTML = "";
        cards.forEach(card => container.appendChild(card));
    };

    // Filtro por tipo de acessibilidade
    const filterSelect = document.getElementById("filter");

    if (filterSelect) {
        filterSelect.addEventListener("change", function () {
            const filter = this.value.toLowerCase();
            const cards = document.querySelectorAll(".card");

            cards.forEach(card => {
                const accessibilityText = card.querySelector("p:nth-of-type(1)").textContent.toLowerCase();
                if (filter === "all" || accessibilityText.includes(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});
