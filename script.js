// Ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Entrada escalonada
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.animationDelay = `${i * 70}ms`;
});

const SITE_URL = "https://tecnografbl.com.br/";

// Compartilhar: manda um texto com o domínio do site
const SHARE_TEXT =
  "🎨 TECNOGRAF Gráfica Rápida\n" +
  "Comunicação visual, sublimação e produtos personalizados em Buriti dos Lopes - PI.\n" +
  "Faça seu orçamento: " + SITE_URL;

const toast = document.getElementById("toast");
document.getElementById("share").addEventListener("click", async () => {
  try {
    if (navigator.share) {
      await navigator.share({ title: "TECNOGRAF · Gráfica Rápida", text: SHARE_TEXT });
    } else {
      await navigator.clipboard.writeText(SHARE_TEXT);
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2000);
    }
  } catch (_) { /* usuário cancelou */ }
});
