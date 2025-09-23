const productos = [
  {
    id: 1,
    cantidad: 50,
    nombre: "Arroz Integral",
    imagen: "./images/arroz-integral.webp",
    categoria: "Alimentos",
    pais: "Argentina",
    descripcion: "Arroz integral de grano largo, ideal para una dieta saludable.",
    precio: 1800
  },
  {
    id: 2,
    cantidad: 30,
    nombre: "Leche Descremada",
    imagen: "./images/leche-descremada.webp",
    categoria: "Lácteos",
    pais: "Uruguay",
    descripcion: "Leche descremada sin conservantes, rica en calcio.",
    precio: 1200
  },
  {
    id: 3,
    cantidad: 20,
    nombre: "Huevos (docena)",
    imagen: "./images/huevos.webp",
    categoria: "Huevos",
    pais: "Chile",
    descripcion: "Docena de huevos frescos de gallinas de campo.",
    precio: 2800
  },
  {
    id: 4,
    cantidad: 100,
    nombre: "Pan Integral",
    imagen: "./images/pan-integral.webp",
    categoria: "Panadería",
    pais: "Argentina",
    descripcion: "Pan integral con semillas, sin aditivos ni conservantes.",
    precio: 1500
  },
  {
    id: 5,
    cantidad: 80,
    nombre: "Manzanas Rojas",
    imagen: "./images/manzanas.jpg",
    categoria: "Frutas",
    pais: "Brasil",
    descripcion: "Manzanas frescas, dulces y crujientes, ideales para snacks.",
    precio: 2200
  },
  {
    id: 6,
    cantidad: 45,
    nombre: "Zanahorias",
    imagen: "./images/zanahorias.webp",
    categoria: "Verduras",
    pais: "Perú",
    descripcion: "Zanahorias orgánicas cosechadas localmente.",
    precio: 900
  },
  {
    id: 7,
    cantidad: 25,
    nombre: "Detergente Líquido",
    imagen: "./images/detergente.webp",
    categoria: "Limpieza",
    pais: "México",
    descripcion: "Detergente concentrado para lavarropas, con fragancia floral.",
    precio: 3500
  },
  {
    id: 8,
    cantidad: 60,
    nombre: "Pechuga de Pollo",
    imagen: "./images/pollo.webp",
    categoria: "Carnes",
    pais: "Argentina",
    descripcion: "Pechuga de pollo sin piel, lista para cocinar.",
    precio: 4800
  },
  {
    id: 9,
    cantidad: 15,
    nombre: "Yogur Natural",
    imagen: "./images/yoghurt.webp",
    categoria: "Lácteos",
    pais: "Colombia",
    descripcion: "Yogur natural sin azúcar, perfecto para desayunos o batidos.",
    precio: 1000
  },
  {
    id: 10,
    cantidad: 40,
    nombre: "Aceite de Girasol",
    imagen: "./images/aceite.webp",
    categoria: "Despensa",
    pais: "España",
    descripcion: "Aceite de girasol alto oleico, ideal para freír y cocinar.",
    precio: 2700
  }
];

 export function obtenerProductos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
}

// Uso del fetch simulado
obtenerProductos().then(data => {
  console.log("Productos cargados:", data);
});