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

document.addEventListener("DOMContentLoaded", () => {
  mostrarCategorias();
  crearModal();

  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      header.classList.add('ocultar-header');
    } else {
      header.classList.remove('ocultar-header');
    }

    if (window.scrollY > 50) {
      header.classList.add('header-solido');
    } else {
      header.classList.remove('header-solido');
    }

    lastScrollY = window.scrollY;
  });
});

function mostrarCategorias() {
  const cont = document.getElementById("secciones");
  cont.innerHTML = "";
  const wrapper = document.createElement("div");
  wrapper.className = "categorias-presentacion";

  catalogo.forEach((categoria, index) => {
    const isEven = index % 2 === 0;
    const cw = document.createElement("div");
    cw.className = "categoria-card-wrapper " + (isEven ? "" : "fila-inversa");

    const card = document.createElement("div");
    card.className = "card-categoria-portada";
    card.innerHTML = `
      <img src="${categoria.imagen}" alt="${categoria.nombre}">
      <h3>${categoria.nombre}</h3>
      <p>${categoria.productos.map(p => p.nombre).join(", ")}</p>
    `;

    const btn = document.createElement("button");
    btn.className = "ver-productos-btn";
    btn.textContent = "Ver productos";
    btn.onclick = () => {
  window.location.href = `htmlProductos.html?categoria=${index}`;
    };

    const info = document.createElement("div");
    info.className = "categoria-info-wrapper";
    info.append(card, btn);

    const desc = document.createElement("div");
    desc.className = "categoria-desc-lateral";

    let descripcionLateral = "";
    switch (categoria.nombre) {
      case "Limpieza General":
        descripcionLateral = "Descubre productos esenciales para mantener tu hogar impecable. Nuestra gama incluye soluciones para todo tipo de superficies, garantizando limpieza y frescura en cada espacio.";
        break;
      case "Cuidado de Alfombras":
        descripcionLateral = "Productos especializados para revitalizar tus alfombras y mantenerlas libres de manchas, malos olores y polvo. Cuidado profundo con resultados visibles.";
        break;
      case "Accesorios":
        descripcionLateral = "Complementos imprescindibles para una limpieza eficiente. Herramientas duraderas y ergonómicas que hacen más fácil cada tarea del hogar.";
        break;
      default:
        descripcionLateral = "Conoce nuestra selección de productos diseñados para facilitar tus labores de limpieza.";
        break;
    }

    desc.innerHTML = `
      <h2>${categoria.nombre}</h2>
      <p>${descripcionLateral}<br><br><b>${categoria.productos.map(p => p.nombre).join(", ")}</b></p>
    `;

    cw.append(info, desc);
    wrapper.appendChild(cw);
  });

  cont.appendChild(wrapper);
}

function crearModal() {
  const modal = document.createElement("div");
  modal.id = "modal-producto";
  modal.className = "detalle-modal";
  modal.innerHTML = `
    <div class="detalle-card">
      <button class="cerrar-btn" onclick="cerrarModal()">×</button>
      <img id="modal-img" src="" alt="">
      <h3 id="modal-nombre"></h3>
      <p id="modal-desc"></p>
    </div>
  `;
  document.body.appendChild(modal);
}

function mostrarModal(producto) {
  document.getElementById("modal-img").src = producto.imagen;
  document.getElementById("modal-nombre").textContent = producto.nombre;
  document.getElementById("modal-desc").textContent = producto.descripcion;
  document.getElementById("modal-producto").classList.add("active");
}

function cerrarModal() {
  document.getElementById("modal-producto").classList.remove("active");
}
