const WHATSAPP_NUMBER = "5215555555555";

const productos = [
    {
        id: 1,
        titulo: "Cadena Shimano",
        categoria: "Transmisión",
        descripcion: "Modelos disponibles: CN-HG40, HG53, HG601, HG701. Ideales para un cambio suave y preciso.",
        precio: "Consultar",
        imagen: "assets/img/cadena.webp"
    },
    {
        id: 2,
        titulo: "Cassette / Piñón Shimano",
        categoria: "Transmisión",
        descripcion: "Disponibles en 7v, 8v, 9v, 10v, 11v y 12v. Máxima durabilidad y rendimiento en cada pedaleo.",
        precio: "Consultar",
        imagen: "assets/img/cassette.webp"
    },
    {
        id: 3,
        titulo: "Plato y Bielas",
        categoria: "Transmisión",
        descripcion: "Modelos como FC-TY301, FC-MT210, FC-R7000, etc. Transferencia de potencia óptima.",
        precio: "Consultar",
        imagen: "assets/img/plato.webp"
    },
    {
        id: 4,
        titulo: "Desviador Delantero",
        categoria: "Transmisión",
        descripcion: "Modelos FD-TY500, FD-M3100 y más. Cambios frontales rápidos y seguros.",
        precio: "Consultar",
        imagen: "assets/img/desviador_delantero.webp"
    },
    {
        id: 5,
        titulo: "Cambio Trasero (Pata)",
        categoria: "Transmisión",
        descripcion: "RD-TY300, RD-M3100, RD-R7000. Precisión Shimano para cualquier terreno.",
        precio: "Consultar",
        imagen: "assets/img/cambio_trasero.webp"
    },
    {
        id: 6,
        titulo: "Mandos / Shifters",
        categoria: "Transmisión",
        descripcion: "SL-TX30, SL-M315, SL-M4100. Control ergonómico y cambios instantáneos al alcance de tus dedos.",
        precio: "Consultar",
        imagen: "assets/img/mandos.webp"
    },
    {
        id: 7,
        titulo: "Manetas V-Brake",
        categoria: "Frenos",
        descripcion: "Modelos BL-T4000, BL-MT200 (Mecánicos). Frenado seguro y confiable.",
        precio: "Consultar",
        imagen: "assets/img/manetas_vbrake.webp"
    },
    {
        id: 8,
        titulo: "Zapatas de Freno",
        categoria: "Frenos",
        descripcion: "S65T, R55C4. Excelente potencia de frenado en condiciones secas o húmedas.",
        precio: "Consultar",
        imagen: "assets/img/zapatas_freno.webp"
    },
    {
        id: 9,
        titulo: "Calipers Hidráulicos",
        categoria: "Frenos",
        descripcion: "BR-MT200, BR-MT410, BR-MT520. Potencia de frenado progresiva y fuerte.",
        precio: "Consultar",
        imagen: "assets/img/calipers_freno.webp"
    },
    {
        id: 10,
        titulo: "Manetas Hidráulicas",
        categoria: "Frenos",
        descripcion: "BL-MT200, BL-MT401. Diseño ergonómico de 2 o 3 dedos.",
        precio: "Consultar",
        imagen: "assets/img/manetas_hidraulico.webp"
    },
    {
        id: 11,
        titulo: "Aceite Mineral Shimano",
        categoria: "Frenos",
        descripcion: "Líquido de frenos original para un mantenimiento perfecto de tu sistema hidráulico.",
        precio: "Consultar",
        imagen: "assets/img/aceite_mineral.webp"
    },
    {
        id: 12,
        titulo: "Rotores / Discos",
        categoria: "Frenos",
        descripcion: "Modelos SM-RT10, SM-RT56, SM-RT70. Disipación de calor superior y frenado constante.",
        precio: "Consultar",
        imagen: "assets/img/discos_rotores.webp"
    },
    {
        id: 13,
        titulo: "Pedales Shimano",
        categoria: "Pedales y Eje",
        descripcion: "Modelos PD-M520, PD-R550, PD-EH500. Eficiencia y durabilidad comprobada en cada pedaleo.",
        precio: "Consultar",
        imagen: "assets/img/pedales.webp"
    },
    {
        id: 14,
        titulo: "Eje de Centro / Bottom Bracket",
        categoria: "Pedales y Eje",
        descripcion: "Modelos BB-UN300, BB-MT500. Rodamiento suave y sellado resistente al agua y suciedad.",
        precio: "Consultar",
        imagen: "assets/img/eje_centro.webp"
    },
    {
        id: 15,
        titulo: "Batería Di2",
        categoria: "Electrónicos",
        descripcion: "Modelos BT-DN300, BT-DN110. Energía de larga duración para tu sistema de cambios electrónicos.",
        precio: "Consultar",
        imagen: "assets/img/di2_bateria.webp"
    },
    {
        id: 16,
        titulo: "Unidad de Cambio Electrónico",
        categoria: "Electrónicos",
        descripcion: "Modelos R7150, R9250. Cambios hiper-rápidos y precisos con tecnología Di2.",
        precio: "Consultar",
        imagen: "assets/img/cambio_electronico.webp"
    },
    {
        id: 17,
        titulo: "Cables y Junctions Di2",
        categoria: "Electrónicos",
        descripcion: "Cables EW-SD50 y cajas de conexión para integrar todo el sistema electrónico en tu cuadro.",
        precio: "Consultar",
        imagen: "assets/img/cables_junctions.webp"
    },
    {
        id: 18,
        titulo: "Motores E-Bike (Sistemas EP)",
        categoria: "E-Bike / MTB",
        descripcion: "Sistemas EP6, EP8, EP801. Potencia y asistencia fluida para conquistar cualquier montaña.",
        precio: "Consultar",
        imagen: "https://images.unsplash.com/photo-1593006509930-1c3902fc74b6?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 19,
        titulo: "Mandos Integrados MTB",
        categoria: "E-Bike / MTB",
        descripcion: "Combinación de frenos y cambios en una sola unidad para manillares limpios.",
        precio: "Consultar",
        imagen: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 20,
        titulo: "Grupo Completo Dura-Ace (Ruta PRO)",
        categoria: "Grupos Completos",
        descripcion: "El pináculo del rendimiento en carretera. Transmisión, frenos y mandos para competición.",
        precio: "Consultar",
        imagen: "https://images.unsplash.com/photo-1484920274317-87885fcbc504?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 21,
        titulo: "Grupo Completo 105 (Ruta)",
        categoria: "Grupos Completos",
        descripcion: "Rendimiento de alto nivel al alcance de todos. Cambios suaves y frenada potente.",
        precio: "Consultar",
        imagen: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 22,
        titulo: "Grupo Completo XTR (MTB PRO)",
        categoria: "Grupos Completos",
        descripcion: "Ligereza, precisión y resistencia extrema para las carreras de montaña más exigentes.",
        precio: "Consultar",
        imagen: "https://images.unsplash.com/photo-1544188289-537ea818988f?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 23,
        titulo: "Grupo Completo Deore XT (MTB)",
        categoria: "Grupos Completos",
        descripcion: "El estándar de oro en MTB. Fiabilidad legendaria para cualquier sendero.",
        precio: "Consultar",
        imagen: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?auto=format&fit=crop&q=80&w=800"
    }
];

const productsGrid = document.getElementById('products-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Elementos del carrito
const cartBtn = document.getElementById('cart-btn');
const cartOverlay = document.getElementById('cart-overlay');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const clearCartBtn = document.getElementById('clear-cart-btn');
const whatsappCheckoutBtn = document.getElementById('whatsapp-checkout-btn');

let carrito = [];

const FALLBACK_IMAGE = 'data:image/svg+xml,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="#f0f0f0" width="400" height="300"/><text fill="#999" font-family="Arial" font-size="18" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Imagen no disponible</text></svg>'
);

function manejarErrorImagen(img) {
    if (img.dataset.fallbackAttempted) return;
    img.dataset.fallbackAttempted = 'true';
    img.src = FALLBACK_IMAGE;
    img.style.objectFit = 'contain';
    img.style.padding = '2rem';
}

function renderizarProductos(productosARenderizar) {
    productsGrid.innerHTML = '';

    if (productosARenderizar.length === 0) {
        productsGrid.innerHTML = '<p class="text-muted">No se encontraron productos en esta categoría.</p>';
        return;
    }

    const fragment = document.createDocumentFragment();

    productosARenderizar.forEach(producto => {
        const article = document.createElement('article');
        article.className = 'product-card';
        article.innerHTML = `
            <div class="product-image-container">
                <img src="${producto.imagen}" alt="${producto.titulo}" class="product-image" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${producto.categoria}</span>
                <h3 class="product-title">${producto.titulo}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <div class="product-price">${producto.precio}</div>
                <button class="btn-whatsapp add-to-cart-btn" data-id="${producto.id}">
                    <i class="fa-solid fa-cart-plus"></i> Añadir al Carrito
                </button>
            </div>
        `;

        const img = article.querySelector('.product-image');
        img.addEventListener('error', () => manejarErrorImagen(img));

        const addBtn = article.querySelector('.add-to-cart-btn');
        addBtn.addEventListener('click', () => agregarAlCarrito(producto.id));

        fragment.appendChild(article);
    });

    productsGrid.appendChild(fragment);
}

function scrollFilterIntoView(btn) {
    if (!btn) return;
    const filters = btn.closest('.filters');
    if (!filters) return;
    const containerRect = filters.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const offset = btnRect.left - containerRect.left - containerRect.width / 2 + btnRect.width / 2;
    filters.scrollBy({ left: offset, behavior: 'smooth' });
}

function inicializarFiltros() {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            scrollFilterIntoView(btn);

            const categoria = btn.getAttribute('data-category');
            const productosFiltrados = categoria === 'all'
                ? productos
                : productos.filter(p => p.categoria === categoria);
            renderizarProductos(productosFiltrados);
        });
    });
}

// ==========================================
// LÓGICA DEL CARRITO
// ==========================================

function abrirCarrito() {
    cartOverlay.classList.add('active');
    cartSidebar.classList.add('active');
    cartSidebar.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
}

function cerrarCarrito() {
    cartOverlay.classList.remove('active');
    cartSidebar.classList.remove('active');
    cartSidebar.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (!producto) return;

    const itemExistente = carrito.find(item => item.id === idProducto);

    if (itemExistente) {
        itemExistente.cantidad += 1;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    actualizarCarritoUI();
    // El usuario prefiere que no se abra automáticamente: abrirCarrito();
}

function eliminarDelCarrito(idProducto) {
    carrito = carrito.filter(item => item.id !== idProducto);
    actualizarCarritoUI();
}

function cambiarCantidad(idProducto, cambio) {
    const item = carrito.find(p => p.id === idProducto);
    if (item) {
        item.cantidad += cambio;
        if (item.cantidad <= 0) {
            eliminarDelCarrito(idProducto);
        } else {
            actualizarCarritoUI();
        }
    }
}

function vaciarCarrito() {
    if(confirm('¿Estás seguro de vaciar todo tu pedido?')) {
        carrito = [];
        actualizarCarritoUI();
    }
}

function actualizarCarritoUI() {
    // Actualizar contador
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    cartCount.textContent = totalItems;
    
    // Animar contador
    cartCount.style.transform = 'scale(1.3)';
    setTimeout(() => cartCount.style.transform = 'scale(1)', 200);

    // Renderizar items
    cartItemsContainer.innerHTML = '';

    if (carrito.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-muted">Tu carrito está vacío.</p>';
        return;
    }

    const fragment = document.createDocumentFragment();

    carrito.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.titulo}</h4>
                <p>${item.precio}</p>
                <div class="cart-item-quantity">
                    <button class="qty-btn minus" data-id="${item.id}">-</button>
                    <span>${item.cantidad}</span>
                    <button class="qty-btn plus" data-id="${item.id}">+</button>
                </div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}" aria-label="Eliminar ${item.titulo}">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        // Eventos
        div.querySelector('.minus').addEventListener('click', () => cambiarCantidad(item.id, -1));
        div.querySelector('.plus').addEventListener('click', () => cambiarCantidad(item.id, 1));
        div.querySelector('.cart-item-remove').addEventListener('click', () => eliminarDelCarrito(item.id));

        fragment.appendChild(div);
    });

    cartItemsContainer.appendChild(fragment);
}

function enviarPedidoWhatsApp() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío. Añade algunos productos primero.');
        return;
    }

    let mensaje = `*¡Hola Súper Royal!* 🚴\nMe gustaría realizar el siguiente pedido:\n\n`;
    
    carrito.forEach(item => {
        mensaje += `🔸 ${item.cantidad}x *${item.titulo}* (${item.precio})\n`;
    });

    mensaje += `\n¿Podrían confirmarme disponibilidad y total con envío?\n¡Gracias!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// ==========================================
// INICIALIZACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos(productos);
    inicializarFiltros();

    // Eventos del carrito
    cartBtn.addEventListener('click', abrirCarrito);
    closeCartBtn.addEventListener('click', cerrarCarrito);
    cartOverlay.addEventListener('click', cerrarCarrito);
    clearCartBtn.addEventListener('click', vaciarCarrito);
    whatsappCheckoutBtn.addEventListener('click', enviarPedidoWhatsApp);
});
