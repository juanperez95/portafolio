<template>
    <div class="typewriter text-white text-2xl text-center text-wrap">
        ¡Esto uso!
    </div>
    <!-- Modal -->
    <section :class="[modal_activo,'modal shadow-2xl shadow-black col-span-2 w-3/4']">
        <article class="bg-slate-800 bg-opacity-90 p-2 rounded-lg shadow-2xl w-full">
            <p class="text-white font-bold">Imagen</p>
            <img :src="img_big" alt="" class="w-full rounded-md">
            <p class="text-white text-sm text-center p-3 transition duration-100 ease-in-out hover:scale-95 cursor-pointer" @click="closeModal">Click para cerrar</p>
        </article>
    </section>
    <section class="w-full p-2">
        <section class="grid grid-cols-1 bg-slate-900 bg-opacity-50 p-5 rounded-lg shadow-2xl gap-5 w-full atenuacion justify-around mt-4 sm:grid-cols-2">
            
            <article :class="['bg-slate-900 text-white p-5 rounded-lg shadow-2xl bg-opacity-50', vibracion2]">
                <h2 class="text-white text-2xl">Herramientas</h2>
                <p class="text-sm">Herramientas que utilizo para mejorar mi trabajo</p>
                <!-- Anidar todos los iconos de las herramientas -->
                <article class="grid grid-cols-2 gap-1 justify-around sm:grid-cols-4 sm:justify-center p-2 sm:ml-20 ml-10 mt-10">
                    <!-- Icono de github -->
                    <a :class="['cursor-pointer transition duration 150 ease-in-out hover:text-blue-300 active:scale-95 atenuado-icono',vibracion]" @click="gitHub()"><span class="text-white text-6xl">
                        <i class="fa-brands fa-github-alt"></i>
                    </span><br>  GitHub</a>
                    <!-- Icono de python -->
                    <a :class="['cursor-pointer transition duration 150 ease-in-out hover:text-blue-300 active:scale-95 atenuado-icono',vibracion]"><span class="text-white text-6xl" @click="python()">
                        <i class="fa-brands fa-python"></i>
                    </span><br>  Python</a>
                    <!-- Icono de JS -->
                    <a :class="['cursor-pointer transition duration 150 ease-in-out hover:text-blue-300 active:scale-95 atenuado-icono',vibracion]" @click="js()"><span class="text-white text-6xl">
                        <i class="fa-brands fa-js"></i>
                    </span><br>     JavaScript</a>
                    <!-- Icono de Django -->
                    <a :class="['cursor-pointer transition duration 150 ease-in-out hover:text-blue-300 active:scale-95 atenuado-icono',vibracion]" @click="django()"><span class="text-white text-6xl">
                        <i class="fa-solid fa-d"></i>
                    </span><br>  Django</a>
                    <!-- Ordenar las ultimas herramientas  -->

                    <!-- Icono de Laravel -->
                    <a :class="['cursor-pointer transition duration 150 ease-in-out hover:text-blue-300 active:scale-95 sm:col-span-2 sm:mt-10 text-center mr-20 mt-0 atenuado-icono',vibracion]" @click="laravel()"><span class="text-white text-6xl">
                        <i class="fa-brands fa-laravel"></i>
                    </span><br>  Laravel 11</a>
                    <!-- Icono de Vue -->
                    <a :class="['cursor-pointer transition duration 150 ease-in-out hover:text-blue-300 active:scale-95 sm:col-span-2 sm:mt-10 text-center mr-20 mt-0 atenuado-icono',vibracion]" @click="vue"><span class="text-white text-6xl">
                        <i class="fa-brands fa-vuejs"></i>
                    </span><br>  Vue JS</a>
                    <!-- Icono de C# -->
                    <a :class="['cursor-pointer transition duration 150 ease-in-out hover:text-blue-300 active:scale-95 sm:col-span-4 sm:mt-10 text-center mr-20 mt-0 atenuado-icono',vibracion]" @click="cSharp"><span class="text-white text-6xl">
                        <i class="fa-solid fa-c"></i>
                    </span><br>  C#</a>
                        


                </article>
            </article>
            <!-- Mostrar el icono de herramientas si no aha escogido ninguna tecnologia -->
            <article v-if="tecnologia == null" class="flex flex-col justify-center items-center bg-opacity-50">
                <h2 class="sm:text-2xl mb-5">¡Escoge alguna tecnologia!</h2>
                <img src="../assets/Mis herramientas/Herramientas.png" alt="Mis herramientas" class="w-20 sm:w-52 transition duration-100 active:scale-95">
            </article>
            <!-- Salen los datos de la tecnologia -->
            <article v-if="tecnologia !== null" :class="['bg-slate-900 text-white p-5 rounded-lg shadow-2xl grid grid-cols-1 justify-center item-center bg-opacity-50', vibracion2]">
                <h2 class="text-white text-2xl">Tecnologias</h2>
                <!-- Cambio de imagenes sobre cada tecnologia -->
                 <!-- Github -->
                <article v-if="tecnologia === 'GitHub'" class="w-20 absolute top-10 right-5"> 
                    <img src="../assets/Mis herramientas/github.png" alt="Mis herramientas" class="w-18 sm:w-32 transition duration-100 active:scale-95 atenuado-icono">
                </article>
                <!-- Python -->
                <article v-if="tecnologia === 'Python'" class="w-20 absolute top-10 right-5">
                    <img src="../assets/Mis herramientas/python.png" alt="Mis herramientas" class="w-18 sm:w-32 transition duration-100 active:scale-95 atenuado-icono">
                </article>
                <!-- JS -->
                <article v-if="tecnologia === 'JavaScript'" class="w-20 absolute top-10 right-5">
                    <img src="../assets/Mis herramientas/js.png" alt="Mis herramientas" class="w-18 sm:w-32 transition duration-100 active:scale-95 atenuado-icono">
                </article>
                <!-- Django -->
                <article v-if="tecnologia === 'Django'" class="w-20 absolute top-10 right-5">
                    <img src="../assets/Mis herramientas/django.png" alt="Mis herramientas" class="w-18 sm:w-32 transition duration-100 active:scale-95 atenuado-icono">
                </article>
                <!-- Laravel -->
                <article v-if="tecnologia === 'Laravel'" class="w-20 absolute top-10 right-5">
                    <img src="../assets/Mis herramientas/php.png" alt="Mis herramientas" class="w-18 sm:w-32 transition duration-100 active:scale-95 atenuado-icono">
                </article>
                <!-- Vue -->
                <article v-if="tecnologia === 'Vue'" class="w-20 absolute top-10 right-5">
                    <img src="../assets/Mis herramientas/vue.png" alt="Mis herramientas" class="w-18 sm:w-32 transition duration-100 active:scale-95 atenuado-icono">                    
                </article>
                <!-- C# -->
                <article v-if="tecnologia === 'C#'" class="w-20 absolute top-10 right-5">
                    <img src="../assets/Mis herramientas/c-.png" alt="Mis herramientas" class="w-18 sm:w-32 transition duration-100 active:scale-95 atenuado-icono">
                </article>

                <!-- Cambiar el titulo de la herramienta -->
                <p :class="['text-2xl text-white text-center',vibracion]">{{tecnologia}}</p>
                <!-- Articulo para mostrar la imagen de github -->
                <span class="text-center"><i :class="spinner"></i></span>
                <article v-if="data_git !== null" class="ml-10 mt-5 flex flex-col justify-center items-center">
                    <!-- Solo muestra este contenido hasta que se carguen todos los datos de la API -->
                    <img v-if="data_git !== null" :src="data_git.avatar_url" alt="" class="w-32 cursor-pointer rounded-lg mb-5">
                    <h2 v-if="data_git !== null" class="text-white text-2xl">{{data_git.name}} / {{data_git.login}}</h2>
                </article> 
                <article>
                    <!-- Tabla que muestra el contenido de los repositorios, con los datos de la API -->
                    <section v-if="repo_data !== null && data_git !== null && tecnologia === 'GitHub'" class="p-2 bg-slate-800 bg-opacity-60 text-sm  rounded-lg shadow-2xl mt-5 w-full">
                        <!-- Solom mostrar el contenido de los datos de la API -->
                        <section class="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-around">
                            <article><b>Repositorio</b></article>
                            <article><b>Descripcion</b></article>
                        </section>
                        <!-- Validar que no aparezca el repo de el portafolio -->
                        <section v-for="repo in repo_data" :key="repo.id" class="p-1 grid grid-cols-1 gap-1 justify-around sm:grid-cols-2">
                            <article v-if="repo.name !== 'presentaci-n'"><a class="text-sm transition duration-100 hover:scale-95 text-blue-400" :href="repo.html_url" target="_blank">{{repo.name.toUpperCase()}}</a></article>
                            <!-- Validar si el repositorio tiene alguna de las descripciones para llenar el campo 'Sin descripción' -->
                            <article v-if="repo.name !== 'presentaci-n'" class="text-sm text-wrap transition-all duration-100 hover:scale-105">{{repo.description == null ? "Sin descripción" : repo.description}}</article>
                        </section>
                    </section>
                </article>
                <!-- El resto de aplicativos -->
                <section>
                    <h3 :class="['text-white text-sm',vibracion]">{{texto_descriptivo}}</h3>
                    <!-- JS Reloj -->
                    <section v-if="tecnologia === 'JavaScript'" class="bg-slate-800 bg-opacity-60 rounded-lg shadow-2xl mt-5 w-full gap-2 text-center grid grid-cols-5 justify-center p-3">
                        <article class="bg-slate-700 bg-opacity-70 text-white p-4 text-wrap rounded-md sm:text-6xl text-md font-bold z-10">{{hora < 10 ? "0" + hora : hora}}</article>
                        <article class="bg-slate-700 bg-opacity-70 z-10 text-white p-4 text-wrap rounded-md sm:text-6xl text-md font-bold">:</article>
                        <article class="bg-slate-700 bg-opacity-70 z-10 text-white p-4 text-wrap rounded-md sm:text-6xl text-md font-bold">{{minutos < 10 ? "0" + minutos : minutos}}</article>
                        <article class="bg-slate-700 bg-opacity-70 z-10 text-white p-4 text-wrap rounded-md sm:text-6xl text-md font-bold">:</article>
                        <article class="bg-slate-700 bg-opacity-70 z-10 text-white p-4 text-wrap rounded-md sm:text-6xl text-md font-bold">{{segundos < 10 ? "0" + segundos : segundos}}</article>
                        <!-- Barras de progreso -->
                    </section>
                    <!-- Barras del reloj -->
                    <section class="bg-slate-800 bg-opacity-60 rounded-lg shadow-2xl mt-5 w-full gap-2 justify-center p-3">
                        <!-- Mostrar hora en miniatura solo cuando se va a otro modulo -->
                        <h3 class="text-white text-2xl text-center font-bold" v-if="tecnologia !== 'JavaScript'">{{hora < 10 ? "0" + hora : hora}} : {{minutos < 10 ? "0" + minutos : minutos}} : {{segundos < 10 ? "0" + segundos : segundos}}</h3>
                        <article v-if="tecnologia === 'JavaScript'" >
                            <progress class="mt-2 progreso w-full text-white forma_reloj" max="24" :value="hora"></progress>
                            <progress class="mt-2 progreso w-full forma_reloj" max="59" :value="minutos"></progress>
                            <progress class="mt-2 progreso w-full forma_reloj" max="60" :value="segundos"></progress>
                        </article>
                    </section>

                    <article v-if="tecnologia !== 'GitHub'" class="p-2 bg-slate-800 bg-opacity-60 text-sm  rounded-lg shadow-2xl mt-5 w-full">
                        <article class="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-around w-full p-2">
                            <img :src="img" alt="" class="w-full cursor-pointer transition duration-100 ease-in-out hover:scale-95 rounded-e-md" v-for="img in imagenes" :key="img" @click="modal(img)">
                        </article>
                        <article v-if="tecnologia === 'JavaScript'" class="flex justify-center w-full p-2">
                            <img src="../assets/Mis herramientas/espera.png" alt="Gato en espera . . . " class="w-32 atenuado-icono transition duration-100 active:scale-95">
                        </article>
                        <!-- Mostrar si la tecnologia es Vue -->
                        <article v-if="tecnologia === 'Vue'" class="flex justify-center w-full p-2">
                            <img :src="cat" alt="Gato con idea . . . " :class="['w-32 atenuado-icono transition duration-100 active:scale-95',move]" @click="movimiento">
                        </article>
                        <p class="text-white text-sm p-2 text-center">{{descripcion_imagen}}</p>
                    </article>
                </section>
            </article>
            
        </section>    
    </section>
</template>


<style scope>
.typewriter {
    font-family: monospace;
    font-size: 24px;
    border-right: 2px solid;
    white-space: nowrap;
    overflow: hidden;
    width: 30ch;
    /* Limita el ancho del contenedor al número de caracteres deseado */
    animation: typing 2s steps(22), blink 0.75s step-end infinite;
    
}

@keyframes typing {
    from {
        width: 0;
    }

    to {
        width: 15ch;
    }

    /* Cambia '22ch' según el número de caracteres de tu texto */
}
</style>
<script>

export default {

    name: 'MisHerramientas',
    data() {
        return {
            data_git:null, // Almacenar los datos de github desde la api
            repo_data:null, // Los repositorios de github
            // Titulos de las herramientas
            tecnologia:null,
            // Spinner de carga
            spinner:"",
            // Cargar imagenes de los aplicativos
            imagenes:null,
            // Texto descriptivo para cada uno de las herramientas
            texto_descriptivo:null,
            descripcion_imagen:null,
            // Mostrar la hora con JavaScript
            hora:new Date().getHours(),
            minutos:new Date().getMinutes(),
            segundos:new Date().getSeconds(),
            // Imagen para mostrar
            img_big:null,
            // Variable del modal
            modal_activo:"modal",
            // Movimiento de la imagen de gato
            cats:['/idea.png','/gatito.png','/gatito2.png'],
            cat:"",
            move:"",
            // Generar vibracion cuando el gato salta en los elementos de la pagina.
            vibracion:"",
            vibracion2:"",

        }
    },
    methods: {
        // Cargar los datos de github
        async getData(){
            this.spinner = "fa-solid fa-circle-notch fa-spin text-2xl sm:text-6xl"; // Agregar clase al spinner de carga
            await fetch('https://api.github.com/users/juanperez95')
            .then(response => {
                return response.ok ? response.json() : null;
            })
            .then(data => {
                this.data_git = data;
            })
            .catch(error => {
                console.log(error);
            })

            // Se hace lo mismo con los repositorios
            await fetch('https://api.github.com/users/juanperez95/repos')
            .then(response => {
                return response.ok ? response.json() : null;
            })
            .then(data => {
                this.repo_data = data;
            })
            .catch(error => {
                console.log(error);
            })
            this.spinner = ""; // Eliminar clase al spinner de carga
        },
        gitHub(){ // Click en la funcion que ejecuta el consumo de la API   
            // Agregar valor al titulo de la herramienta
            this.tecnologia = "GitHub";
            this.getData();
            this.texto_descriptivo = null;
            document.body.style.backgroundColor = "rgb(78, 49, 5)";
        },
        // Funciones para los botones de la herramienta
        python(){
            this.tecnologia = "Python";
            this.repo_data = null;
            this.data_git = null;
            // Asignar valor de lista
            this.imagenes = ['/Python/TM1.PNG','/Python/TM2.PNG'];
            // Descripcion general
            this.texto_descriptivo = "Con python he podido fortalecer mis conocimientos en conceptos como la programación orientada a objetos (POO), lo que me ha permitido programar aplicativos de escritorio";
            // Descripcion de la imagen
            this.descripcion_imagen = "Diseñe este software para crear copias de sus mods del juego 'TrackMania' que permite comprimir y descomprimir los mismo y descargar esas copias desde google drive.";
            document.body.style.backgroundColor = "rgb(18, 128, 255)";
        },
        js(){
            this.tecnologia = "JavaScript";
            this.repo_data = null;
            this.data_git = null;
            // Quitar imagenes si no las quiero
            this.imagenes = null;
            // Descripcion general
            this.texto_descriptivo = "Con javascript he podido aprender conceptos como la programación funcional, lo que me ha permitido desarrollar aplicaciones web interactivas";
            // Descripcion de la imagen
            this.descripcion_imagen = "Diseñe este reloj en JS para que muestre la hora en formato 24 horas.";
            document.body.style.backgroundColor = "rgb(62, 66, 4)";
        },
        // Ejecucion de la hora
        getTime(){
            let intervalo = setInterval(() => {
                this.hora = new Date().getHours();
                this.minutos = new Date().getMinutes();
                this.segundos = new Date().getSeconds();
            }, 1000);
        },
        django(){
            this.tecnologia = "Django";
            this.texto_descriptivo = "Con django he podido profundizar respecto a base de datos (MySql) y las diferentes relaciones que se pueden crear con el ORM (Object Relational modal), lo que me ha permitido avanzar en el procesamiento de datos";
            this.repo_data = null;
            this.data_git = null;
            // Mapear las rutas de las imagenes
            this.imagenes = ['/Django/Kattas.jpg','/Django/Kattas2.jpg','/Django/Kattas3.jpg','/Django/Kattas4.jpg'];
            // Descripcion de la imagen
            this.descripcion_imagen = "Diseñamos con mi equipo de estudio este aplicativo para una pizzeria llamada 'Katta's pizza' con el objetivo de gestionar los productos que venden, la cantidad de productos que tienen en stock, el precio de cada producto y la cantidad de clientes que tienen en la pizzeria.";
            document.body.style.backgroundColor = "rgb(10, 99, 69)";
        },
        laravel(){
            this.tecnologia = "Laravel";
            this.repo_data = null;
            this.data_git = null;
            this.texto_descriptivo = "Con Laravel adquiri mucho mas habilidades y aprendi mejores practicas para el desarrollo y escritura de codigo que sea escalable.";
            this.imagenes = ['/Laravel/Laravel.jpg','/Laravel/Laravel2.jpg'];
            this.descripcion_imagen = "Participe en el desarrollo de projectos de la compañia en la que preste practicas 'Americas BPS', creando aplicativos WEB que les permite gestionar el inventario de componentes, la gestión de proyectos y generacion de actas para las entregas, asignaciones y retornos de los equipos.";
            document.body.style.backgroundColor = "rgb(56, 5, 116)";
        },
        vue(){
            this.tecnologia = "Vue";
            this.repo_data = null;
            this.data_git = null;
            this.texto_descriptivo = "Con Vue me he vuelto algo mas poderoso respecto al Frontend, he adquirido habilidades para el UX/UI (Experience User / Experience Interface)";
            // Cambiar colo del fondo con atenuación
            document.body.style.backgroundColor = "rgb(10, 99, 69)";
            // Condicion de descripción de kla imagen de Vue.Js
            this.descripcion_imagen = this.cat !== this.cats[2] ? "Este portafolio es hecho con Vue JS, ¡Tengo una idea!, haz click en mi y te muestro algo." : "¡Despierta a michu, dandole click!";
            this.imagenes = null;
        },
        cSharp(){
            this.tecnologia = "C#";
            this.repo_data = null;
            this.data_git = null;
            document.body.style.backgroundColor = "rgb(0, 17, 255)";
            this.imagenes = ['/CSharp/Gmod.PNG','/CSharp/Gmod2.PNG'];
            this.texto_descriptivo = "Con C# he conseguido fortalecer mi logica de programación debido a que es un lenguaje fuertemente tipado.";
            this.descripcion_imagen = "Desarrolle un temporizador que analiza a un juego en especifico 'Garry's Mod' y si detecta la ejecución del mismo, se configura un tiempo estimado de juego, al finalizar el tiempo cierra el proceso y apaga el computador.";
        },

        // modal para mostrar las imagenes cada vez que se hace click en ellas
        modal(img){
            this.img_big = img;
            this.modal_activo = "modal-activo";
        },
        // Cerrar modal
        closeModal(){
            this.modal_activo = "modal";
        },
        // Movimiento de la imagen del gato al hacer click en ella
        movimiento(){
            // Hacer que el michu salte
            if(this.cat === this.cats[0] || this.cat === this.cats[2]){
                this.cat = this.cats[1];
                this.vibracion = 'vibracion';
                this.vibracion2 = 'vibracion2';
                this.descripcion_imagen = "¡Si quieres frenar la motivacion de michu, haz click en el!";
                this.move = "movimiento";
            }else{
                // Hacer que descanse
                this.cat = this.cats[2];
                this.vibracion = '';
                this.vibracion2 = '';
                this.descripcion_imagen = "¡Michu ha parado y esta cansado, si quieres volver a que se motive haz click en el!";
                this.move = "";
            }
        },
            
    },
    computed: {

    },
    mounted(){
        // Iniciar el reloj
        this.getTime();
        this.cat = this.cats[0];
    }
}
</script>