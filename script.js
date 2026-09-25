const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");
let cart = 0;
let cartItems = [];

document.querySelectorAll(".add-cart").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product || "Producto";
    const price = Number(button.dataset.price || 0);
    cart++;
    cartItems.push({ product, price });
    if (cartCount) cartCount.textContent = cart;
    if (toast) {
      toast.textContent = product + " agregado al carrito 🎮";
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 1800);
    }
  });
});

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

const cartBtn = document.getElementById("cartBtn");
if (cartBtn) {
  cartBtn.addEventListener("click", () => {
    if (!cartItems.length) {
      alert("Tu carrito está vacío.");
      return;
    }
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    const names = cartItems.map(item => item.product).join(", ");
    alert("Productos: " + names + "\nTotal de referencia: $" + total.toLocaleString("es-CO") + " COP");
  });
}

const searchBtn = document.getElementById("searchBtn");
if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    const term = prompt("¿Qué producto estás buscando?");
    if (term) alert("Buscando: " + term);
  });
}
