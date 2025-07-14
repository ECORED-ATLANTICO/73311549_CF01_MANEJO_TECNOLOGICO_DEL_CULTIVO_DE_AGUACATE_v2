<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-md-6.col-lg-4.col-8.mb-3.mb.lg-0
        figure
          img(src='@/assets/curso/img_01.png', alt='Imagen decorativa').mx-auto
      .col-lg-8
        p El componente formativo “Estrategia de producción y propagación del aguacate” permite comprender los aspectos técnicos del cultivo, desde su origen y adaptación ecológica hasta su propagación y manejo en vivero. Se inicia con el estudio de las generalidades botánicas y su clasificación ecológica, así como sus requerimientos climáticos y edáficos. Posteriormente, se profundiza en la selección del material vegetal y los métodos de propagación, lo que permite establecer su importancia en la calidad genética y productiva. Asimismo, se analizan criterios de planeación, proporcionando herramientas para responder a la demanda del mercado. Se presentan factores que influyen en el desarrollo en vivero, así como el uso de instrumentos, registros y trazabilidad. La documentación aborda prácticas sostenibles y bioseguridad. Para fortalecer estos conceptos, se detallan aspectos del monitoreo técnico y control del proceso. Finalmente, se analiza la importancia de la calidad de plántulas para una producción exitosa .

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
