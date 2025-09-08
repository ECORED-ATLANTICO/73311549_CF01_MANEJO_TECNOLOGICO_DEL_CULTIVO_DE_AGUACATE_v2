<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-md-6.col-lg-4.col-8.mb-3.mb.lg-0
        figure
          img(src='@/assets/curso/img_01.png', alt='Imagen decorativa').mx-auto
      .col-lg-8
        p El componente formativo “Estrategia de producción y propagación del aguacate” ofrece una aproximación integral a los conocimientos fundamentales sobre el cultivo, propagación y manejo técnico del aguacate. Este módulo analiza detalladamente la planificación productiva y el análisis del entorno agroecológico, resaltando su importancia en cuanto a la adaptación, rendimiento y sostenibilidad. Asimismo, se estudian los métodos de propagación en vivero y el uso de material vegetal certificado. La propuesta profundiza en el manejo de plántulas, así como en el uso de instrumentos técnicos. Además, se destacan prácticas de trazabilidad, junto con criterios de calidad, enfatizando su aplicación para asegurar una producción eficiente y competitiva.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis de estrategia de producción y propagación del aguacate se muestra las generalidades del cultivo, que comprende la descripción botánica y la de las razas. Así mismo la selección del material vegetal y manejo de vivero para el cultivo de aguacate.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
