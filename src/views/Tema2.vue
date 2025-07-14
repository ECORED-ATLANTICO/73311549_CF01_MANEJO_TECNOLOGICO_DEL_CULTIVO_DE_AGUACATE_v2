<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Zonas de vida y clima

    .color-adicional-1-10.bg-hojas.tarjeta.mb-2
      .row
        .col-12.col-lg-2.position-relative
          figure
            img(src='@/assets/curso/temas/tema2/img_01.png', alt='Imagen decorativa').w-auto.mx-auto.img-outside
        .col-12.col-lg-9.p-4
          p.mb-0 La producción del aguacate está estrechamente ligada a las condiciones ecológicas y climáticas del entorno, ya que influyen directamente en el desarrollo de la planta, la calidad del fruto y el rendimiento del cultivo. Comprender la clasificación ecológica, los requerimientos climáticos, la altitud óptima, las características del suelo y las prácticas de fertilización es clave para seleccionar adecuadamente las zonas de cultivo. Estos factores permiten adaptar las variedades a cada región, mejorar la eficiencia agronómica y garantizar una producción sostenible en el tiempo.
    
    separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Clasificación ecológica

    .row.mb-2.align-items-center.mb-5
      .col-6.col-lg-1.mb-3.mb-lg-0.mx-auto
        figure
          img(src='@/assets/curso/temas/tema2/img_02.svg', alt='Imagen decorativa').w-auto.mx-auto
      .col-12.col-lg-11
        p.mb-0 El cultivo del aguacate requiere condiciones ecológicas específicas para desarrollarse de forma óptima. Para determinar la aptitud de una zona, se utiliza el sistema de zonas de vida de Holdridge, que clasifica los ecosistemas según temperatura, humedad y altitud. Las zonas más favorables para el cultivo incluyen:
  
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1. 
          span Zonas aptas para el aguacate 

        .tabla-a.tabla-verde
          table
            caption <strong>Fuente:</strong> SENA, 2025.
            thead
              tr
                th Símbolo
                th Zona de vida
                th Temperatura (°C)
                th Precipitación (mm/año) 
                th Clima
                th Aptitud
            tbody
              tr
                td bs-T 
                td Bosque seco tropical 
                td > 24
                td 1.000 – 2.000 
                td Cálido seco 
                td Apta para raza antillana.
              tr
                td bh-PM 
                td Bosque húmedo premontano 
                td 18 – 24
                td 1.000 – 2.000 
                td Medio húmedo 
                td Ideal para Hass.
              tr
                td bh-MB 
                td Bosque húmedo montano bajo 
                td 12 – 18
                td 1.000 – 2.000 
                td Frío húmedo 
                td Óptimo para Hass y fuerte.
                 
    .cajon.color-adicional-1-10.p-4.mb-5
      p.mb-0 La taxonomía del aguacate permite identificarlo como una planta frutal de origen tropical, perteneciente a un grupo de árboles perennes con hojas simples, flores pequeñas y frutos con una sola semilla. Su clasificación científica agrupa al aguacate en los siguientes niveles:


    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Requerimientos climáticos

    p.mb-5 El aguacate es una especie frutal altamente influenciada por el clima. Su crecimiento, floración, cuajado del fruto y calidad final dependen en gran medida de variables como la temperatura, la precipitación y la humedad relativa. Un clima inadecuado puede generar estrés fisiológico, baja productividad, caída de flores o mayor susceptibilidad a enfermedades. Las condiciones óptimas son:
    
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Encuesta de <em>Net Promoter Score</em> (NPS)" :icono="require('@/assets/curso/temas/tema2/img_03.svg')")
        .row.px-4.align-items-center
          .col-1
          .col-md-6.mb-4.mb-md-0
            p 
              b Temperatura media: 
              | entre 
              b 15 y 30 °C
            p.mb-0 Las temperaturas por debajo de 5 °C pueden provocar daños por heladas, especialmente en variedades sensibles como la antillana. Por encima de 30 °C, se puede reducir la floración y aumentar el aborto floral.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/img_06.png', alt='Imagen decorativa')
          .col-1
      .py-4.py-md-5(titulo="Encuesta de satisfacción del producto" :icono="require('@/assets/curso/temas/tema2/img_04.svg')")
        .row.px-4.align-items-center
          .col-1
          .col-md-6.mb-4.mb-md-0
            p.mb-0 
              b Precipitación anual: 
              | entre 
              b 1.000 y 1.500 mm, 
              | distribuida a lo largo del año. El aguacate no tolera el encharcamiento prolongado. Lluvias concentradas en pocos meses aumentan el riesgo de enfermedades radiculares como la Phytophthora cinnamomi. Un buen régimen hídrico mejora el llenado y la calidad del fruto.  
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/img_07.png', alt='Imagen decorativa')
          .col-1
      .py-4.py-md-5(titulo="Encuesta de satisfacción del producto" :icono="require('@/assets/curso/temas/tema2/img_05.svg')")
        .row.px-4.align-items-center
          .col-1
          .col-md-6.mb-4.mb-md-0
            p 
              b Humedad relativa: 
              | entre 
              b 60 % y 80 %
            p.mb-0 Valores inferiores al 50 % pueden afectar la apertura floral y la polinización, mientras que humedades superiores al 85 % favorecen hongos patógenos. Un microclima balanceado es ideal para el desarrollo saludable de la planta.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/img_08.png', alt='Imagen decorativa')
          .col-1



    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3 Altitud y adaptación

    .row.mb-2.align-items-center.mb-5
      .col-6.col-lg-1.mx-auto.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img_09.svg', alt='Imagen decorativa').w-auto.mx-auto
      .col-12.col-lg-11
        p.mb-0 La altitud es una variable crítica para el cultivo del aguacate, ya que determina el piso térmico, es decir, el rango de temperatura media al que estará expuesta la planta. Esta condición incide directamente en el tipo de raza que se puede establecer, en la duración del ciclo fenológico, en la calidad del fruto y en el comportamiento frente al estrés ambiental.
      

    .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")
      .col-lg-10.mb-4
        .titulo-sexto.mb-4.color-acento-contenido
          h5 Figura 1. 
          span Adaptación de las razas de aguacate según altitud 

        figure.mb-4
          figure.mb-3
            img(src='@/assets/curso/temas/tema2/img_10.svg', alt='La figura muestra las condiciones de altitud y clima ideales para el cultivo de las principales razas de aguacate: mexicana, guatemalteca y antillana.').mx-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema2/img_10m.svg', alt='La figura muestra las condiciones de altitud y clima ideales para el cultivo de las principales razas de aguacate: mexicana, guatemalteca y antillana.').mx-auto.d-block.d-lg-none

          figcaption 
            b Fuente: 
            |  SENA, 2025.


    .titulo-segundo.color-acento-contenido
      h2#t_2_4 2.4 Suelos y propiedades

    .color-adicional-1-10.p-4.box-icons.position-relative.mb-5
      .row
        img(src="@/assets/curso/temas/tema1/img_15.png", alt="alt").w-auto.first
        .col-12.col-md-10.mx-auto
          p.mb-0 El aguacate es una especie altamente sensible a las condiciones del suelo, debido a las características particulares de su sistema radicular, que es superficial, poco ramificado y carente de pelos absorbentes. Esta morfología lo hace especialmente susceptible a problemas como el encharcamiento, la compactación del suelo y las deficiencias nutricionales. Por ello, es fundamental seleccionar suelos con propiedades físicas y químicas adecuadas para garantizar un desarrollo óptimo del cultivo. Las propiedades del suelo son:
        img(src="@/assets/curso/temas/tema1/img_16.png", alt="alt").w-auto.second

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").color-primario
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img_11.svg", alt="alt")
          .crd_hover_txt--body.text-center
            h5.mb-3 Texturas 	
            p.mb-2 Franca o franco-arenosa, que permita un buen drenaje y retención moderada de humedad.

      .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").color-primario
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img_12.svg", alt="alt")
          .crd_hover_txt--body.text-center
            h5.mb-3 Profundidad
            p.mb-2 Al menos 1 metro, para favorecer una adecuada expansión radicular.

      .col-xl-3.col-lg-7.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").color-primario
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img_13.svg", alt="alt")
          .crd_hover_txt--body.text-center
            h5.mb-3 pH ideal
            p.mb-2 Entre 5.5 y 6.5. Valores inferiores a 5.5 pueden generar toxicidad por aluminio y limitar la disponibilidad de fósforo.
      
      .col-xl-3.col-lg-7.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").color-primario
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img_14.svg", alt="alt")
          .crd_hover_txt--body.text-center
            h5.mb-3 Materia orgánica
            p.mb-2 Debe estar presente en niveles adecuados, ya que mejora la estructura del suelo y favorece el desarrollo de microorganismos benéficos.
      

    .row.justify-content-center.align-items-center.my-3.mb-0(data-aos="zoom-in").mb-3
      .col-md-7.col-lg-3.col-10
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/img_15.png", alt="alt").mx-auto.mb-4.mb-lg-0
      .col-lg-9
        .color-adicional-1-10.p-4.box-icons.position-relative.bg-hojas
          .row
            img(src="@/assets/curso/temas/tema1/img_15.png", alt="alt").w-auto.first
            .col-12.col-md-10.mx-auto
              p Suelos compactados, excesivamente ácidos o con deficiente drenaje pueden limitar seriamente el crecimiento del árbol, incrementar la incidencia de enfermedades como la 
                i Phytophthora 
                | y reducir la eficiencia en la absorción de nutrientes esenciales. Por esta razón, la realización de un análisis de suelo previo al establecimiento del cultivo no solo es recomendable, sino imprescindible.
    separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_5 2.5 Encalado y fertilización

    .row.mb-2.align-items-center.mb-5
      .col-6.col-lg-1.mx-auto.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img_16.svg', alt='Imagen decorativa').w-auto.mx-auto
      .col-12.col-lg-11
        p.mb-0 Para lograr un desarrollo vigoroso del cultivo de aguacate y obtener frutos de alta calidad, es fundamental garantizar una nutrición balanceada desde la etapa de vivero hasta la producción en campo. Esto implica corregir posibles deficiencias del suelo mediante el encalado y aplicar fertilizantes de manera racional, de acuerdo con los resultados del análisis de suelos.

    .row.mb-2.align-items-stretch.mb-5.d-flex
      .col-1
      .col-12.col-lg-5.d-flex.mb-4.mb-lg-0
        .tarjeta.d-flex.flex-column.w-100
          img(src="@/assets/curso/temas/tema2/img_17.png", alt="alt").w-100
          .color-primario-20.p-5.flex-grow-1.d-flex
            p.mb-0 El encalado es una práctica correctiva que consiste en aplicar materiales como cal dolomita para elevar el pH del suelo, especialmente cuando se encuentra por debajo de 5.5. Esta corrección es esencial para mejorar la disponibilidad de fósforo, calcio y otros nutrientes, así como para estimular la actividad biológica del suelo.
      .col-12.col-lg-5.d-flex.mb-4.mb-lg-0
        .tarjeta.d-flex.flex-column.w-100
          img(src="@/assets/curso/temas/tema2/img_18.png", alt="alt").w-100
          .color-primario-20.p-5.flex-grow-1.d-flex
            p.mb-0 La fertilización del aguacate consiste en suministrar al cultivo los nutrientes esenciales que necesita para crecer de forma saludable, desarrollarse adecuadamente y producir frutos de calidad, en las cantidades y momentos adecuados. Es un proceso técnico que debe adaptarse a la edad del árbol, el estado fenológico, las características del suelo y las condiciones climáticas del lugar.
      .col-1

    .color-principal.bg-verde.mb-2.borde-esquinas
      .row.align-items-center
        .col-12.col-lg-2
          figure
            img(src='@/assets/curso/temas/tema2/img_19.png', alt='Imagen decorativa').w-auto.mx-auto
        .col-12.col-lg-10.p-5
          p.mb-0 El aguacate requiere una adecuada disponibilidad de macronutrientes como nitrógeno (N), fósforo (P) y potasio (K), así como micronutrientes esenciales como zinc (Zn), boro (B) y hierro (Fe), indispensables para el crecimiento, la floración y el cuajado de frutos. La aplicación complementaria de microorganismos benéficos, como Trichoderma y micorrizas, mejora la absorción de nutrientes y refuerza la salud del sistema radicular
    


</template>

<script>
export default {
  name: 'Tema2',
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
