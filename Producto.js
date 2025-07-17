const catalogo = [
  {
    nombre: "Limpieza General",
    productos: [
      {
        nombre: "Detergente",
        imagen: "/Boceto/Assets/Images/Limpieza general.webp",
        descripcion: "Detergente líquido de alta eficacia para todo tipo de telas. Elimina manchas difíciles y deja un aroma fresco."
      },
      {
        nombre: "Limpiador Multiusos",
        imagen: "",
        descripcion: "Solución para cocinas, baños, pisos y más. Remueve suciedad, grasa y bacterias."
      },
      {
        nombre: "Desinfectante",
        imagen: "",
        descripcion: "Elimina el 99.9% de virus, bacterias y hongos. Higieniza y deja un buen aroma."
      },
      {
        nombre: "Jabón Líquido",
        imagen: "",
        descripcion: "Jabón suave para manos y cuerpo, con agentes humectantes."
      }
    ]
  },
  {
    nombre: "Cuidado de Alfombras",
    productos: [
      {
        nombre: "Shampoo para Alfombras",
        imagen: "",
        descripcion: "Limpia fibras textiles, elimina manchas y malos olores."
      },
      {
        nombre: "Limpiavidrios",
        imagen: "",
        descripcion: "Limpieza sin residuos. Ideal para cristales y espejos."
      },
      {
        nombre: "Toallas Desinfectantes",
        imagen: "",
        descripcion: "Paños húmedos antibacteriales para limpieza rápida."
      },
      {
        nombre: "Ambientador",
        imagen: "",
        descripcion: "Aromatizante concentrado de larga duración."
      }
    ]
  },
  {
    nombre: "Accesorios",
    productos: [
      {
        nombre: "Guantes de Látex",
        imagen: "",
        descripcion: "Guantes resistentes para tareas de limpieza."
      },
      {
        nombre: "Cepillo",
        imagen: "",
        descripcion: "Cepillo multiusos con cerdas firmes."
      },
      {
        nombre: "Trapeador",
        imagen: "",
        descripcion: "Microfibra absorbente para todo tipo de pisos."
      },
      {
        nombre: "Escoba",
        imagen: "",
        descripcion: "Escoba ergonómica de uso diario."
      }
    ]
  }
];

// Extrae el índice de la categoría desde la URL
const params = new URLSearchParams(window.location.search);
const categoriaIndex = parseInt(params.get("categoria"));

const grid = document.getElementById("productos-grid");

if (!isNaN(categoriaIndex) && catalogo[categoriaIndex]) {
  const categoria = catalogo[categoriaIndex];

  categoria.productos.forEach(producto => {
    const card = document.createElement("div");
    card.className = "producto-item";

    card.innerHTML = `
      <img src="${producto.imagen || 'https://via.placeholder.com/250x180?text=Imagen+no+disponible'}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
    `;

    grid.appendChild(card);
  });
} else {
  grid.innerHTML = `<p>⚠️ No se pudo encontrar la categoría solicitada.</p>`;
}
