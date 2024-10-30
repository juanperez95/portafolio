<template>
    <div class="typewriter text-white text-2xl text-center text-wrap">
        ¡Aca te dejo mi información!
    </div>
    <section class="grid grid-cols-1 sm:grid-cols-3 bg-slate-900 bg-opacity-50 p-5 rounded-lg shadow-2xl gap-5 w-full atenuacion mt-4">
        <h2 class="text-white text-2xl text-center sm:col-span-3">Contactame</h2>
        <!-- Hoja de vida -->
        <article class="bg-slate-800 w-full bg-opacity-20 shadow-md p-3 rounded-md">
            <h3 class="text-white text-2xl text-center text-wrap">Mi curriculum</h3>
            <article class="flex justify-around items-center gap-2 mt-4 w-full bg-slate-800 p-3 rounded-lg text-center filter-backdrop bg-opacity-50">
                <!-- Imagen de gato -->
                <img src="../assets/MasSobreMi/gatito_redes.png" alt="Gato" class="w-32 rounded-md p-3 atenuado-icono">
                <p class="text-center text-wrap italic"> - ¿Que es?<br> -  ¿Un pajaro?<br> -   ¡NO! <b class="italic"><br> -  ¡Es mi hoja de vida!</b></p>
            </article>
            <!-- Boton para descargar el curriculum -->
            <p class="mt-2">Te dejo mi curriculum para que puedas conocer mi formación y experiencia.</p>
            <Botones mensajeBoton="Descargar curriculum" icono="fa-solid fa-download" class="w-full mt-2 bg-purple-900" @click="descargar"/>
        </article>
        <!-- Formulario de contacto -->
        <article class="">
            <form action="#" class="bg-slate-900 bg-opacity-20 shadow-md rounded-md w-full p-2 grid-cols-1 justify-center items-center">
                <input type="text" class="bg-slate-800 rounded-md w-full bg-opacity-50 focus:ring-2 ring-slate-400 outline-none p-2 mt-4" placeholder="Nombre" v-model="nombre">
                <input type="text" class="bg-slate-800 rounded-md w-full bg-opacity-50 focus:ring-2 ring-slate-400 outline-none p-2 mt-4" placeholder="Correo" v-model="correo">
                <input type="text" class="bg-slate-800 rounded-md w-full bg-opacity-50 focus:ring-2 ring-slate-400 outline-none p-2 mt-4" placeholder="Telefono" v-model="telefono">
                <textarea class="bg-slate-800 rounded-md w-full bg-opacity-50 focus:ring-2 ring-slate-400 outline-none p-2 mt-4" placeholder="Mensaje" v-model="mensaje"></textarea>
                <!-- Boton de envio -->
                <Botones mensajeBoton="Enviar" icono="fa-solid fa-paper-plane" class="w-full mt-2 bg-purple-900" @click="enviar"/>
            </form>
        </article>
        <article class="bg-slate-800 w-full bg-opacity-20 shadow-md p-3 rounded-md">
            <h3 class="text-white text-2xl text-center text-wrap">¡Conectate conmigo!</h3>  
            <!-- Mostrar los enlaces donde me puede seguir el que esta viendo mi portafolio -->
            <article class="grid grid-cols-3 gap-2 mt-4 w-full bg-slate-800 p-3 rounded-lg text-center filter-backdrop bg-opacity-50">                
                <span class="text-4xl transition duration-150 hover:text-blue-500"><a href="https://wa.me/573215137404" target="_blank"><i class="fa-brands fa-whatsapp atenuacion "></i><p class="text-sm">Whatapp</p></a></span>
                <span class="text-4xl transition duration-150 hover:text-blue-500"><a href="https://www.linkedin.com/in/juan-pablo-perez-lesmes-25026b264" target="_blank"><i class="fa-brands fa-linkedin atenuacion "></i><p class="text-sm">Linkedin</p></a></span>
                <span class="text-4xl transition duration-150 hover:text-blue-500"><a href="https://github.com/juanperez95?tab=repositories" target="_blank"><i class="fa-brands fa-github atenuacion "></i><p class="text-sm">GitHub</p></a></span>
            </article>          
            <!-- Imagen huella -->
            <article class="flex justify-around items-center mt-5">           
                <img src="../assets/MasSobreMi/pata.png" alt="Huella" class="w-32 rounded-md p-3 atenuado-icono">
                <p class="text-center text-wrap">Te dejo mis redes para que puedas seguirme. ¡Gracias por visitar mi portafolio!</p>
            </article>
            
        </article>
    </section>
</template>

<style scoped>
</style>

<script>
import Botones from '../components/Botones.vue';
// Importar swal para mostrar alertas
import Swal from 'sweetalert2';

export default {
    components: {
        Botones
    },
    data() {
        return {
            // Varialbes del formulario de contacto
            nombre:"",
            correo:"",
            telefono:"",
            mensaje:"",
        }
    },
    methods: {
        // Funcion que envia el formulario
        enviar(){
            // Validar que no se envien datos vacios
            if(this.nombre === "" || this.correo === "" || this.telefono === "" || this.mensaje === ""){
                Swal.fire({
                    title: 'Error',
                    text: 'Debes llenar todos los campos',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                });
            }else{
                // Enviar el formulario
                Swal.fire({
                    title: '¡Oops, no tenemos el back hecho!',
                    text: `¡Te pido disculpas ${this.nombre.toUpperCase()}, te dejo un link para que puedas enviar tu mensaje a mi correo!`,
                    imageUrl: 'https://cdn-icons-png.flaticon.com/256/10296/10296568.png',
                    confirmButtonText: 'Aceptar',  
                    footer: `<a href="mailto:jplesmes19@gmail.com?subject=Mensaje de contacto&body=Hola, quiero contactarte con tus datos para que te pongamos en contacto conmigo. %0D%0A%0D%0ANombre: ${this.nombre}%0D%0ACorreo: ${this.correo}%0D%0ATelefono: ${this.telefono}%0D%0AMensaje: ${this.mensaje}">Enviar mensaje</a>`,
                });
            }
        },
        // Funcion que descarga el curriculum
        descargar(){
            // Descargar el curriculum
            window.open('https://drive.google.com/file/d/1wJHPQB529CENNCCMghSO4COu7fnlttjf/view?usp=sharing','_blank');
        },
    },
}
</script>