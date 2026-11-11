// Ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Entrada escalonada
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.animationDelay = `${i * 70}ms`;
});

// Compartilhar (nativo no celular, copia o link no computador)
const toast = document.getElementById("toast");
document.getElementById("share").addEventListener("click", async () => {
  const data = {
    title: "TECNOGRAF · Gráfica Rápida",
    text: "Comunicação visual, sublimação e produtos personalizados.",
    url: location.href,
  };
  try {
    if (navigator.share) {
      await navigator.share(data);
    } else {
      await navigator.clipboard.writeText(location.href);
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2000);
    }
  } catch (_) { /* usuário cancelou */ }
});
