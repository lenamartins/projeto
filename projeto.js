function showDetails(name, accessibility, address, rating, image, mapsUrl) {
    const detailsEl = document.getElementById("placeDetails");
    
    document.getElementById("placeName").textContent = name;
    document.getElementById("placeAccessibility").textContent = `Acessibilidade: ${accessibility}`;
    document.getElementById("placeAddress").textContent = address;
    document.getElementById("placeRating").textContent = rating;
    document.getElementById("placeType").textContent = accessibility;
    document.getElementById("placeImage").src = image;
    document.getElementById("googleMapsLink").href = mapsUrl;
    
    detailsEl.classList.add("show");
  }
  
  function closeDetails() {
    document.getElementById("placeDetails").classList.remove("show");
  }
  
  function sortTable() {
    const container = document.querySelector(".cards-container");
    const cards = Array.from(container.querySelectorAll(".card"));
    
    cards.sort((a, b) => {
      const ratingA = parseFloat(a.querySelector("p:nth-child(3)").textContent.split(":")[1].trim());
      const ratingB = parseFloat(b.querySelector("p:nth-child(3)").textContent.split(":")[1].trim());
      return ratingB - ratingA;
    });
    
    container.innerHTML = "";
    cards.forEach(card => {
      container.appendChild(card);
    });
  }
  
  document.getElementById("filter").addEventListener("change", function() {
    const filter = this.value;
    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
      const accessibility = card.querySelector("p:first-child").textContent;
      
      if (filter === "all" || accessibility.toLowerCase().includes(filter.toLowerCase())) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
  
  function abrirLogin() {
    document.getElementById("loginModal").style.display = "block";
  }

  function fecharLogin() {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("erroSenha").style.display = "none";
    document.getElementById("senhaAdmin").value = "";
  }

  function verificarSenha() {
    const senha = document.getElementById("senhaAdmin").value;
    const senhasValidas = ["lmaripera", "220908"]; //senhas válidas
  
    if (senhasValidas.includes(senha)) {
      window.location.href = "cadastro.html";
    } else {
      document.getElementById("erroSenha").style.display = "block";
    }
  }
  <script>
  const form = document.getElementById('comentarioForm');
  const input = document.getElementById('comentarioInput');
  const container = document.getElementById('comentariosContainer');

  function carregarComentarios() {
    const comentarios = JSON.parse(localStorage.getItem('comentarios') || '[]');
    container.innerHTML = '';
    comentarios.forEach(c => {
      const p = document.createElement('p');
      p.textContent = c;
      p.style.borderBottom = '1px solid #eee';
      p.style.padding = '5px 0';
      container.appendChild(p);
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const novoComentario = input.value.trim();
    if (novoComentario) {
      let comentarios = JSON.parse(localStorage.getItem('comentarios') || '[]');
      comentarios.push(novoComentario);
      localStorage.setItem('comentarios', JSON.stringify(comentarios));
      input.value = '';
      carregarComentarios();
    }
  });
  carregarComentarios();
</script>
  
