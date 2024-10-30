<script>
export default {
  props: ['mensajeBoton','icono'],
  data() {
    return {

    }
  },
  methods: {
  },
} 
</script> 

<template>
  <button type="button" :class="['bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 sm:text-sm rounded-sm shadow-lg transition duration-100 ease-in-out transform hover:scale-105  text-wrap focus:bg-blue-900 botones']"><span v-if="icono !== null"><i :class="icono"></i></span> {{mensajeBoton}}
  </button>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.botones{
  clip-path: polygon(100% 0, 92% 48%, 100% 100%, 0% 100%, 0 49%, 0% 0%);
}
</style>
