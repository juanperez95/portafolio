import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      // Definir tus variables de estado
        lista_experiencias:[ // Objeto que tendra todos los datos de mis experiencias
          // Americas BPS
          {
            id:1,
            nombre: "Americas",
            icono: "/Icons_experience/ABPS.png",
            descripcion: "Desarrollo de aplicaciones web para optimizar procesos en las empresas.",
            link: "https://www.americasbps.com/",
            colaboraciones: "Escribi codigo para mejorar procesos como el inventario de componentes, la gestión de proyectos y generacion de actas para las entregas, asignaciones y retronos de los equipos.",
            temporal: "18/ABR/2024 - 17/OCT/2024",
            tiempo_en_la_compania: 6,
            meses:true,
          },
          // Otra experiencia
        ],
    };
  },
  mutations: {
    // Mutaciones para cambiar el estado

  },
  actions: {
    // Acciones para manejar la lógica asíncrona o lógica de negocio

  },
  getters: {
    // Getters para obtener datos del estado
    getCount(state) {

    },
  },
});

export default store;
