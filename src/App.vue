<template>
  <nav class="text-white p-3 bg-slate-900 bg-opacity-80 contain">
    <h3 class="font-bold text-center text-wrap sm:text-4xl">¡Me llamo Juan Pablo Peréz!</h3>
    <h3 class="font-bold text-center text-wrap sm:text-2xl">Me encanta <b id="titulo" class="text-purple-500 atenuacion-titulo">{{text_cambio == '' || text_cambio == null ? 'desarrollar' : text_cambio}}.</b></h3>

    <section class="flex flex-col sm:flex-row justify-center items-center">
      <article class="mt-5">
        <!-- Imagen de inicio -->
        <!-- Agregar variable vue para mover la imagen al dar click en el boton -->
        <img src="./assets/Soy.jpeg" alt="" :class="['rounded-full p-1',efectMove]" width="200" height="200">
      </article>
      <article class="w-4/5 mt-5 sm:mt-0 sm:w-1/2 text-center">
        <p class="text-wrap text-center transition duration-300 ease-in-out texto-atenuado">{{texto}}</p>       
      </article>
    </section>
  </nav>
  <!-- Mostrar fondo desefocado -->
   <section class="w-88 text-wrap">
     <div class="circle text-wrap texto-atenuado">{{palabra_fondo}}</div>

   </section>
  <section class="grid grid-cols-1 gap-5 bg-black bg-opacity-80 p-3 sm:grid-cols-3 shadow-2xl contain">
    <Botones :mensajeBoton="'Este soy yo'" @click="AboutMe"/>
    <Botones :mensajeBoton="'Mis herramientas'" @click="MisHerramientas"/>
    <Botones :mensajeBoton="'Mas sobre mi'" @click="MasSobreMi"/>
  </section>
  <!-- Seccion donde se refleja el cambio de la ruta -->
  <section class="flex flex-col justify-center items-center bg-black bg-opacity-80 p-4 contain h-full">
    <router-view/>
  </section>
</template>

<script>
import Botones from './components/Botones.vue'
import "./index.css";
import MisMetas from './views/MisMetas.vue';

export default { 
  name: 'App',
  components: {
    Botones
  },
  data() {
    return {
      // Mostrar las rutas y vistas de la aplicación
      showAboutMe:false,
      misHerramientas:false,
      showMisMetas:false,
      // Variables de clases HTML
      efectMove: 'efect-move',
      palabra_fondo:'',
      // Mostrar texto de cada sección
      texto:"",
      // Cambiar el texto de la sección del titulo
      cambio:['programar','innovar','crear','enseñar','aprender','python','django','laravel','vue js','C#','javascript','java','github','mysql','HTML','CSS','bootstrap','tailwind','colaborar','el frontend', 'el backend','comunicar'],
      text_cambio:"",
    }
  },
  methods: {
    // Funcion que permite cambiar la posición del arreglo que cambiara el texto
    cambiarTexto(){
      let efecto = document.getElementById("titulo");
      const intervalo = setInterval(() => {
        this.text_cambio = this.cambio[parseInt(Math.random() * (this.cambio.length-1))];
      },5000);
    },
    AboutMe(){
      this.showAboutMe = !this.showAboutMe; // Al dar click en el botón cambia el valor de la variable para mostrar el contenido
      this.showAboutMe ? this.$router.push('/AboutMe') : ""; // Si vuelve a dar click se esconde la ruta
      this.efectMove = this.showAboutMe ? "efect-move-active" : "efect-move"; // Condiciones ternarias
      this.palabra_fondo = this.showAboutMe ? "" : "";
      // Texto que muestra en cada sección
      this.texto = "Soy una persona que valora el trabajo en equipo y el aprendizaje continuo de los demás. A lo largo de mis experiencias profesionales y personales, he crecido tanto en lo técnico como en lo humano, lo que me ha permitido aportar positivamente a la sociedad. He desarrollado varios aplicativos web con el propósito de optimizar procesos en las empresas, logrando una notable reducción en los tiempos de ejecución de tareas clave.";
    },
    MisHerramientas(){
      this.misHerramientas = true;
      this.misHerramientas ? this.$router.push('/MisHerramientas') : ""; // Devolver a la ruta anterior
      this.efectMove = "efect-move";
      this.efectMove = this.misHerramientas ? "efect-move-active" : "efect-move"; // Condiciones ternarias

      this.texto = "Soy desarrollador fullstack con experiencia en Vue.js, Django, Laravel, y C#, creando tanto aplicaciones web como de escritorio. Manejo MySQL para bases de datos, y utilizo Git para el control de versiones. Estoy enfocado en crear soluciones eficientes y escalables, y en mejorar constantemente mis habilidades.";

      // Validar que las otras vistas son falsas
      this.showAboutMe = false;
    },
    MasSobreMi(){
      this.showMisMetas = true;
      this.showMisMetas ? this.$router.push('/MasSobreMi') : ""; // Devolver a la ruta anterior
      this.efectMove = "efect-move";
      this.efectMove = this.showMisMetas ? "efect-move-active" : "efect-move"; // Condiciones ternarias
      this.texto = "Aca en esta sección te dejo mi información de contacto para que puedas conectarte conmigo.";
    },  
  },
  // Iniciar metodos AboutMe
  mounted(){
    this.AboutMe();
    this.cambiarTexto();
  }
}


</script>

