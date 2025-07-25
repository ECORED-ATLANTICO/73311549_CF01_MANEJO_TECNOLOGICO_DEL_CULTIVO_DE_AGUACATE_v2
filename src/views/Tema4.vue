<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Material vegetal

    .color-adicional-1-10.bg-hojas.tarjeta.mb-2.position-relative.box-icons
      img(src="@/assets/curso/temas/tema1/img_15.png", alt="alt").w-auto.first
      .row.align-items-center.p-4
        .col-12.col-lg-3
            img(src='@/assets/curso/temas/tema4/img_01.png', alt='Imagen decorativa').w-auto.mx-auto.position-relative
        .col-12.col-lg-8
          p.mb-0 La producción del aguacate está estrechamente ligada a las condiciones ecológicas y climáticas del entorno, ya que influyen directamente en el desarrollo de la planta, la calidad del fruto y el rendimiento del cultivo. Comprender la clasificación ecológica, los requerimientos climáticos, la altitud óptima, las características del suelo y las prácticas de fertilización es clave para seleccionar adecuadamente las zonas de cultivo. Estos factores permiten adaptar las variedades a cada región, mejorar la eficiencia agronómica y garantizar una producción sostenible en el tiempo.
    
    separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1 Selección genética y sanitaria

    .bg_content
      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
        .col-lg-5.col-md-12.mb-4
          figure
            img(src='@/assets/curso/temas/tema4/img_02.png', alt='Imagen decorativa')
        .col-lg-7.mb-4
          .cajon.color-adicional-1-10.p-4
            p.mb-0 La calidad del patrón y del injerto determina en gran medida el éxito del vivero. Se deben seleccionar árboles madre con alta capacidad productiva, resistencia a enfermedades como Phytophthora cinnamomi, buena adaptabilidad agroecológica y trazabilidad conocida. Las semillas se extraen de frutos maduros sanos, sin daños visibles ni contacto con el suelo, y las yemas se toman de ramas activas con buen estado fitosanitario.
      

      .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")
        .col-lg-8
          .titulo-sexto.mb-4.color-acento-contenido
            h5 Figura 3. 
            span Ciclo de vida del aguacate

          figure.mb-3
            img(src='@/assets/curso/temas/tema4/img_03.svg', alt='La figura muestra el ciclo de vida del aguacate desde la germinación de la semilla hasta la obtención del fruto, resaltando su relevancia en el proceso de selección genética y sanitaria').mx-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema4/img_03m.svg', alt='La figura muestra el ciclo de vida del aguacate desde la germinación de la semilla hasta la obtención del fruto, resaltando su relevancia en el proceso de selección genética y sanitaria').mx-auto.d-block.d-lg-none

            figcaption 
              b Fuente: 
              |  SENA, 2025.

    separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_2 4.2 Métodos de propagación  
    
    .bg_content
      p.text-center
        b Existen dos métodos principales para propagar el aguacate, cada uno con características, aplicaciones y objetivos distintos.
      .row.mb-2.align-items-stretch.mb-5.d-flex
        .col-1
        .col-12.col-lg-5.d-flex.mb-4.mb-lg-0
          .tarjeta.d-flex.flex-column.w-100.bg-primario
            img(src="@/assets/curso/temas/tema4/img_04.png", alt="alt").w-100
            .p-5.flex-grow-1.d-flex.flex-column
              p
                b Propagación sexual (por semilla)
                | Utilizada principalmente para obtener patrones. Las semillas deben sembrarse pronto tras su extracción y mantenerse en condiciones controladas para germinar de manera uniforme. Este método no garantiza fidelidad genética, por lo que los árboles obtenidos presentan variabilidad.
        .col-12.col-lg-5.d-flex.mb-4.mb-lg-0
          .tarjeta.d-flex.flex-column.w-100.color-terciario
            img(src="@/assets/curso/temas/tema4/img_05.png", alt="alt").w-100
            .p-5.flex-grow-1.d-flex
              p.mb-0.text-white Es el método más utilizado comercialmente. Consiste en unir una yema o púa de una variedad deseada (injerto) sobre un patrón previamente establecido. Entre las técnicas más comunes están el injerto en cuña, de púa terminal o de hendidura. Este proceso conserva las características genéticas del cultivar, reduce el tiempo de entrada en producción y mejora el control fitosanitario.<br>El éxito del injerto depende del calibre adecuado del patrón, la alineación del cambium y las condiciones de humedad y temperatura post-injertación.
        .col-1


</template>

<script>
export default {
  name: 'Tema4',
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
