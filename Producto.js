// Modifica tu archivo Producto.js con estos cambios

document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos();
});

function mostrarProductos() {
  const cont = document.getElementById("productos-grid");
  cont.innerHTML = "";
  
  // Obtener el parámetro de categoría de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const categoriaIndex = urlParams.get('categoria');
  
  // Obtener el catálogo de productos
  const catalogo = [
    {
      nombre: "Limpieza General",
      imagen: "/Boceto/Assets/Images/gta-san-andreas-helicopter-chase-in-1336x768.jpg",
      productos: [
        {
          nombre: "Detergente",
          imagen: "/Boceto/Assets/Images/Limpieza general.webp",
          descripcion: "Detergente líquido de alta eficacia, ideal para todo tipo de telas. Elimina manchas difíciles dejando un aroma fresco y duradero en cada lavado."
        },
        {
          nombre: "Limpiador Multiusos",
          imagen: "",
          descripcion: "Solución versátil para limpieza de cocinas, baños, pisos y más. Remueve suciedad, grasa y bacterias sin dañar las superficies."
        },
        {
          nombre: "Desinfectante",
          imagen: "",
          descripcion: "Poderoso desinfectante con acción rápida. Elimina el 99.9% de virus, bacterias y hongos, dejando los espacios higienizados y con fragancia agradable."
        },
        {
          nombre: "Jabón Líquido",
          imagen: "",
          descripcion: "Jabón suave para manos y cuerpo. Fórmula dermatológicamente probada con agentes humectantes y fragancia refrescante."
        }
      ]
    },
    {
      nombre: "Cuidado de Alfombras",
      imagen: "/Boceto/Assets/Images/Fondos De Escritorio 4k.jfif",
      productos: [
        {
          nombre: "Shampoo para Alfombras",
          imagen: "",
          descripcion: "Limpia profundamente fibras textiles, eliminando manchas y malos olores. Especial para alfombras, tapetes y muebles tapizados."
        },
        {
          nombre: "Limpiavidrios",
          imagen: "",
          descripcion: "Fórmula antiempañante para una limpieza sin residuos. Ideal para cristales, espejos y superficies brillantes. Deja un acabado impecable."
        },
        {
          nombre: "Toallas Desinfectantes",
          imagen: "",
          descripcion: "Paños húmedos impregnados con solución antibacterial. Ideales para limpieza rápida de objetos, superficies y artículos personales."
        },
        {
          nombre: "Ambientador",
          imagen: "",
          descripcion: "Aromatizante concentrado de larga duración. Disponible en distintas fragancias que eliminan olores y refrescan cualquier ambiente."
        }
      ]
    },
    {
      nombre: "Accesorios",
      imagen: "/Boceto/Assets/Images/gta-san-andreas-helicopter-chase-in-1336x768.jpg",
      productos: [
        {
          nombre: "Guantes de Látex",
          imagen: "",
          descripcion: "Guantes resistentes, cómodos y flexibles. Brindan protección en tareas de limpieza o manipulación de productos químicos."
        },
        {
          nombre: "Cepillo",
          imagen: "",
          descripcion: "Cepillo multiusos con cerdas firmes. Ideal para remover suciedad incrustada en superficies rugosas o difíciles."
        },
        {
          nombre: "Trapeador",
          imagen: "",
          descripcion: "Trapeador de microfibra ultra absorbente. Limpia en profundidad sin dejar rayas ni residuos. Apto para todo tipo de pisos."
        },
        {
          nombre: "Escoba",
          imagen: "",
          descripcion: "Escoba ergonómica con mango largo y cabezal reforzado. Ideal para uso diario en interiores y exteriores."
        }
      ]
    }
  ];
  
  // Si no se especifica categoría, mostrar todas
  let productosAMostrar = [];
  
  if (categoriaIndex !== null && categoriaIndex >= 0 && categoriaIndex < catalogo.length) {
    // Mostrar productos de la categoría específica
    productosAMostrar = catalogo[categoriaIndex].productos;
    document.title = `Productos - ${catalogo[categoriaIndex].nombre} - Alfombrando`;
  } else {
    // Mostrar todos los productos
    catalogo.forEach(categoria => {
      productosAMostrar = productosAMostrar.concat(categoria.productos);
    });
    document.title = "Todos los Productos - Alfombrando";
  }
  
  // Crear tarjetas de productos
  productosAMostrar.forEach((producto, index) => {
    const productoCard = document.createElement("div");
    productoCard.className = "producto-item";
    
    // Usar imagen por defecto si no hay imagen específica
    const imagenProducto = producto.imagen || "/Boceto/Assets/Images/producto-por-defecto.jpg";
    
    productoCard.innerHTML = `
      <img src="${imagenProducto}" alt="${producto.nombre}" class="producto-imagen">
      <div class="producto-info">
        <h3 class="producto-nombre">${producto.nombre}</h3>
        <p class="producto-descripcion">${producto.descripcion}</p>
        <button class="ver-detalle-btn" onclick="mostrarDetalle('${producto.nombre}', '${imagenProducto}', '${producto.descripcion}')">
          <i class="fas fa-info-circle"></i> Ver Detalles
        </button>
      </div>
    `;
    
    cont.appendChild(productoCard);
  });
}

// Crear modal de detalles
function crearModal() {
  const modal = document.createElement("div");
  modal.id = "modal-producto";
  modal.className = "detalle-modal";
  modal.innerHTML = `
    <div class="detalle-card">
      <button class="cerrar-btn" onclick="cerrarModal()"><i class="fas fa-times"></i></button>
      <img id="modal-img" src="" alt="">
      <h3 id="modal-nombre"></h3>
      <p id="modal-desc"></p>
      <button class="ver-detalle-btn" onclick="contactarProducto()">
        <i class="fas fa-phone-alt"></i> Contactar para Comprar
      </button>
    </div>
  `;
  document.body.appendChild(modal);
}

// Mostrar detalles del producto
function mostrarDetalle(nombre, imagen, descripcion) {
  document.getElementById("modal-img").src = imagen;
  document.getElementById("modal-nombre").textContent = nombre;
  document.getElementById("modal-desc").textContent = descripcion;
  document.getElementById("modal-producto").classList.add("active");
}

// Cerrar modal
function cerrarModal() {
  document.getElementById("modal-producto").classList.remove("active");
}

// Contactar sobre el producto
function contactarProducto() {
  window.location.href = "https://wa.me/573216475863?text=Hola!%20Me%20interesa%20el%20producto:%20" + encodeURIComponent(document.getElementById("modal-nombre").textContent);
}

// Inicializar el modal cuando la página cargue
document.addEventListener("DOMContentLoaded", crearModal);