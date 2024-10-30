<template>
    <div>
        <div class="typewriter text-white text-2xl text-center">
            ¡Mucho gusto!
        </div>

    </div>
    <section class="grid grid-cols-1 gap-5 justify-around p-5 w-full mt-4 atenuacion sm:grid-cols-2">
        <article class="bg-slate-900 text-white p-5 rounded-lg shadow-2xl bg-opacity-50">
            <h2 class="text-white text-2xl">Mi experiencia</h2>     
            <!-- Se crea grid para almacenar todas mis experiencias, grid de 2 columnas -->
            <article class=" grid grid-cols-1 gap-5 justify-between sm:grid-cols-2 sm:justify-center sm:ml-0">
                <!-- Mapear las imagenes para agregar cada vez mas a el formato JSON y simplificar el codigo -->
                <span><img v-for="imagen in lista_experiencias" :key="imagen.id" :src="imagen.icono" @click="myHelpBusiness(imagen.id)" alt="" class="w-52 ml-11 cursor-pointer mt-5"></span>
            </article>       
        </article>
        <article class="bg-slate-900 bg-opacity-50 text-white p-5 rounded-lg shadow-2xl texto-atenuado">
            <!-- Mostrar todas las colaboraciones que tuve en la compañia -->
            <h2 class="text-white text-2xl">Mis colaboraciones</h2>
            <p class="text-sm">{{nombre}}     {{temporal}}</p>
            <p class="text-sm">{{descripcion}}</p>
            <h1 class="text-2xl">Link: </h1>
            <a class="text-sm decoration-transparent">{{link}}</a>
            <h1 class="text-2xl">Colaboraciones: </h1>
            <p class="text-sm">{{colaboraciones}}</p>
            <p class="text-2xl">Tiempo en la compañia : {{tiempo_en_la_compania}} {{meses ? " / 12 Meses" : "Año/s"}} <progress class="mt-2 progreso forma_reloj" max="12" :value="tiempo_en_la_compania"></progress></p>

        </article>
    </section>
</template>

<style scope>
.typewriter {
    font-family: monospace;
    font-size: 24px;
    border-right: 2px solid;
    white-space: nowrap;
    overflow: hidden;
    width: 15ch;
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

@keyframes blink {

    from,
    to {
        border-color: transparent;
    }

    50% {
        border-color: white;
    }
}
/* Barra de progreso */
.progreso {
    appearance: none;
    height: 10px;
    width: 100%;
    outline: none;
    border: none;
    background-color: #fff;
    color: #000;
}
.progreso::-webkit-progress-bar {
    background-color: #eee;
}
.progreso::-webkit-progress-value {
    transition: all 0.3s ease; /* Transición suave */
    background-color: #3d4aff;
    border-radius: 2px;
}
.progreso:hover::-webkit-progress-value{
    background-color: #0e8499;
}
</style>

<script>
import { mapState, mapMutations } from "vuex"

export default {
    name: 'SobreMi',
    data() {
        return {
            // Datos para mostrar en la sección de mis colaboraciones
            nombre:"",
            descripcion:"",
            link:"",
            colaboraciones:"",
            temporal:"",
            icono:"",
            meses:true,
            tiempo_en_la_compania:0,
        }
    },
    methods: {
        // Funcion para activar mis colabaraciones con cada empresa.
        myHelpBusiness(id){
            this.lista_experiencias.forEach(experiencia => {
                if(experiencia.id === id){
                    this.nombre = experiencia.nombre;
                    this.descripcion = experiencia.descripcion;
                    this.link = experiencia.link;
                    this.colaboraciones = experiencia.colaboraciones;
                    this.temporal = experiencia.temporal;
                    this.icono = experiencia.icono;
                    this.meses = experiencia.meses;
                    this.tiempo_en_la_compania = experiencia.tiempo_en_la_compania;
                }
            })
        },
    },
    computed: {
        ...mapState(['lista_experiencias']),
    },
    // Iniciar metodo de la primera experiencia
    mounted(){
        this.myHelpBusiness(1);
    }
}
</script>