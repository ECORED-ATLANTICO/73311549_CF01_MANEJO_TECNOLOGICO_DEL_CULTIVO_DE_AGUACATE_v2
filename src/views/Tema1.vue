<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades del aguacate

    .color-adicional-1-10.bg-hojas.tarjeta
      .row
        .col-12.col-lg-2.position-relative
          figure
            img(src='@/assets/curso/temas/tema1/img_01.png', alt='Imagen decorativa').w-auto.mx-auto.img-outside
        .col-12.col-lg-9.p-4
          p.mb-0 El cultivo del aguacate se ha consolidado como una alternativa productiva de alto valor estratégico en diferentes regiones del mundo, especialmente por su creciente demanda en los mercados internacionales y sus múltiples aplicaciones alimenticias, cosméticas y agroindustriales. Para entender mejor esta especie, es importante conocer aspectos como su origen, cómo se clasifica, cómo es su planta, qué tipos y variedades existen, y qué normas técnicas se deben cumplir para su producción. Estos temas permiten tener una base sólida para cuidar el cultivo, mejorar la calidad del fruto y asegurar una producción eficiente y segura.
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
