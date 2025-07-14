<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Planeación de la producción

    .color-adicional-1-10.bg-hojas.tarjeta.mb-2.p-3
      .row.align-items-center
        .col-12.col-lg-2
          figure
            img(src='@/assets/curso/temas/tema3/img_01.png', alt='Imagen decorativa').w-auto.mx-auto
        .col-12.col-lg-9
          p.mb-0 La producción del aguacate está estrechamente ligada a las condiciones ecológicas y climáticas del entorno, ya que influyen directamente en el desarrollo de la planta, la calidad del fruto y el rendimiento del cultivo. Comprender la clasificación ecológica, los requerimientos climáticos, la altitud óptima, las características del suelo y las prácticas de fertilización es clave para seleccionar adecuadamente las zonas de cultivo. Estos factores permiten adaptar las variedades a cada región, mejorar la eficiencia agronómica y garantizar una producción sostenible en el tiempo.
    
    separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 3.1 Análisis de mercado y demanda

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-4.col-md-12.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img_02.png', alt='Imagen decorativa')
      .col-lg-8.mb-4
        p.mb-2 La producción de aguacate no debe iniciarse sin una evaluación previa del entorno comercial. El análisis de mercado consiste en estudiar quién compra, qué tipo de aguacate demanda, en qué cantidad y en qué momento del año. Variedades como Hass dominan el mercado de exportación por su textura, sabor y vida útil, mientras que otras como Fuerte se destinan al consumo nacional por su buena adaptabilidad y precio competitivo.
        .cajon.color-adicional-1-10.p-4
          p.mb-0 Este análisis también contempla las ventanas de comercialización, que son los periodos en los que hay mayor escasez u oportunidad de venta, así como los requisitos técnicos de los compradores, tales como calibre, madurez, apariencia y empaque. Evaluar correctamente esta información permite al productor ajustar su calendario productivo, optimizar costos y minimizar riesgos por sobreoferta o baja demanda.
    
    separador
    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2 Ciclo productivo y sostenibilidad

    .row.mb-2.align-items-center.mb-5
      .col-6.col-lg-1.mb-3.mb-lg-0.mx-auto
        figure
          img(src='@/assets/curso/temas/tema3/img_03.svg', alt='Imagen decorativa').w-auto.mx-auto
      .col-12.col-lg-11
        p.mb-0 El aguacate atraviesa un ciclo productivo que puede durar entre 5 y 15 meses, dependiendo de la raza. Esta duración influye directamente en el manejo agronómico y comercial. Por ejemplo, mientras la raza antillana tiene un ciclo corto y es ideal para zonas cálidas, la guatemalteca (como Hass) tiene un ciclo más largo, pero ofrece mejor poscosecha y valor agregado.
  
    .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")
      .col-lg-12.mb-4
        .titulo-sexto.mb-4.color-acento-contenido
          h5 Figura 2. 
          span Ciclo productivo del aguacate

        figure.mb-4
          figure.mb-3
            img(src='@/assets/curso/temas/tema3/img_04.svg', alt='La figura representa el ciclo productivo del aguacate, desde la semilla hasta la formación del fruto en la planta madura.').mx-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema3/img_04m.svg', alt='La figura representa el ciclo productivo del aguacate, desde la semilla hasta la formación del fruto en la planta madura.').mx-auto.d-block.d-lg-none

          figcaption 
            b Fuente: 
            |  SENA, 2025.

    .bloque-texto-g.color-acento-contenido-20.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img_05.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un ciclo mal planificado puede afectar la floración, la disponibilidad de agua o coincidir con periodos de baja demanda. Por eso, es clave programar siembras y cosechas según el clima, la variedad y el mercado objetivo. A esto se suma la sostenibilidad, que implica adoptar prácticas como el uso racional del agua, la fertilización equilibrada, el manejo de residuos y la conservación del suelo. Las Buenas Prácticas Agrícolas (BPA) aseguran inocuidad, trazabilidad y permanencia del cultivo en el tiempo.


   


</template>

<script>
export default {
  name: 'Tema3',
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
