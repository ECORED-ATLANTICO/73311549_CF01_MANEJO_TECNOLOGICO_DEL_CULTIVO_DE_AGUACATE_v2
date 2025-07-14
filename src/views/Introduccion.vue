<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-7
        .row.mb-3
          .col-12.mx-auto
            .row.color-primario-10.p-4.mb-3.align-items-center(data-aos="zoom-in")
              .col-12.col-lg-1.mb-3.mb-lg-0.p-0
                figure
                  img(src='@/assets/curso/intro/img_02.svg', alt='Imagen decorativa').w-auto.mx-auto
              .col-12.col-lg-11
                p.mb-0 El componente formativo “Estrategia de producción y propagación del aguacate” ofrece al aprendiz herramientas técnicas y prácticas para abordar integralmente el manejo del cultivo de aguacate. A partir del conocimiento de su origen, morfología, razas comerciales y condiciones agroecológicas, se fortalecen las capacidades necesarias para planear la producción conforme a los requerimientos del mercado, las normas técnicas vigentes y criterios de sostenibilidad.
          p Este componente también enfatiza en la selección del material vegetal, el manejo del vivero y la aplicación de técnicas de propagación como la injertación, con un enfoque en la calidad del material propagado. Además, promueve la aplicación de buenas prácticas agrícolas y el uso adecuado de instrumentos de medición, asegurando el control de variables que impactan el desarrollo del cultivo. Así, se contribuye a la formación de productores con visión estratégica, capaces de liderar procesos agroproductivos sostenibles y competitivos.
      .col-12.col-lg-5.col-md-7.mb-4
        figure
          img(src='@/assets/curso/intro/img_01.png', alt='Imagen decorativa')
   
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/5d_qM71avJY?si=bSS_uH5wlz4ana1F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Nota: Sena (2024).  

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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
