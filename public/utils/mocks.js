const proyect = [
  {
    id: 1,
    name: "Mediax",
    shortDescription: "Mediax es un proyecto de Video Streaming realizado con HTML y SCSS",
    description: "Mediax es un proyecto de Video Streaming realizado con HTML y SCSS, en el cual utilize Framework y librerias de CSS como Bootstrap para el front, Slick para realizar los carouseles de imagenes y Pushbar para realizar un menu desplegable en la seccion Catalogo. La pagina es responsive aplicando la metodologia Mobile-First, ademas contiene etiquetas de SEO que ayudan al posicionamiento de la pagina",
    technologies: 
    {
      html: "./img/html.png",
      bootstrap: "./img/bootstrap.png"
    }   
  },
  {
    id: 2,
    name: "Mediax",
    shortDescription: "Mediax es un proyecto de Video Streaming realizado con HTML y SCSS",
    description: "Mediax es un proyecto de Video Streaming realizado con HTML y SCSS, en el cual utilize Framework y librerias de CSS como Bootstrap para el front, Slick para realizar los carouseles de imagenes y Pushbar para realizar un menu desplegable en la seccion Catalogo. La pagina es responsive aplicando la metodologia Mobile-First, ademas contiene etiquetas de SEO que ayudan al posicionamiento de la pagina",
    technologies: 
    {
      html: "./img/html.png",
      bootstrap: "./img/bootstrap.png"
    }   
  }
]


export const getItems = new Promise((res, rej) => {
      res(proyect);   
});
