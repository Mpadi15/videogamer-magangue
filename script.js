const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");
let cart = 0;

document.querySelectorAll(".add-cart").forEach(button => {
  button.addEventListener("click", () => {
    cart++;
    cartCount.textContent = cart;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1800);
  });
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => document.getElementById("nav").classList.remove("open"));
});

document.getElementById("cartBtn").addEventListener("click", () => {
  alert(cart === 0
    ? "Tu carrito está vacío."
    : `Tienes ${cart} producto(s) en el carrito.`);
});

document.getElementById("searchBtn").addEventListener("click", () => {
  const term = prompt("¿Qué producto estás buscando?");
  if (term) alert(`Buscando: ${term}`);
});

// La página PS5 reutiliza el carrito y el menú de navegación.
document.querySelectorAll(".add-cart").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product || "Producto";
    toast.textContent = product + " agregado al carrito 🎮";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1800);
  });
});
