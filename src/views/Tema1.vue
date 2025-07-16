<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades del aguacate

    .color-adicional-1-10.bg-hojas.tarjeta.mb-2
      .row
        .col-12.col-lg-2.position-relative
          figure
            img(src='@/assets/curso/temas/tema1/img_01.png', alt='Imagen decorativa').w-auto.mx-auto.img-outside
        .col-12.col-lg-9.p-4
          p.mb-0 El cultivo del aguacate se ha consolidado como una alternativa productiva de alto valor estratégico en diferentes regiones del mundo, especialmente por su creciente demanda en los mercados internacionales y sus múltiples aplicaciones alimenticias, cosméticas y agroindustriales. Para entender mejor esta especie, es importante conocer aspectos como su origen, cómo se clasifica, cómo es su planta, qué tipos y variedades existen, y qué normas técnicas se deben cumplir para su producción. Estos temas permiten tener una base sólida para cuidar el cultivo, mejorar la calidad del fruto y asegurar una producción eficiente y segura.
    
    separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Concepto

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-8.mb-4
        p.mb-2 El aguacate (Persea americana) es una especie originaria de Mesoamérica, principalmente de las zonas montañosas del sur de México y Guatemala. Su historia se remonta a más de 8.000 años de domesticación, con evidencias fósiles que datan de hace al menos 12.000 años. Esta fruta era parte fundamental en la dieta de culturas antiguas como los mayas y aztecas. Su nombre proviene del náhuatl ahuacatl, en alusión a la forma del fruto.
        .cajon.color-adicional-1-10.p-4
          p.mb-0 La taxonomía del aguacate permite identificarlo como una planta frutal de origen tropical, perteneciente a un grupo de árboles perennes con hojas simples, flores pequeñas y frutos con una sola semilla. Su clasificación científica agrupa al aguacate en los siguientes niveles:
      .col-lg-4.col-md-12.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img_03.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in")
      .col-lg-5.col-12.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img_04.png', alt='Imagen decorativa')
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-adicional-1-10")
          .row(titulo="Clase")
            .content-left
              p 
                b Magnoliopsida (Dicotiledóneas)
              p El aguacate pertenece al grupo de plantas que se desarrollan a partir de semillas con dos cotiledones. Esto se refleja en su estructura: hojas anchas con nervaduras ramificadas, flores completas y frutos desarrollados con una sola semilla central. 
          .row(titulo="Orden")
            .content-left
              p 
                b Laurales
              p El aguacate forma parte de la familia del laurel, conocida por la presencia de aceites esenciales. Esta familia se distingue por plantas perennes, de follaje denso, flores discretas y gran diversidad ecológica.
          .row(titulo="Familia")
            .content-left
              p 
                b Lauraceae
              p El aguacate forma parte de la familia del laurel, conocida por la presencia de aceites esenciales. Esta familia se distingue por plantas perennes, de follaje denso, flores discretas y gran diversidad ecológica.
          .row(titulo="Género")
            .content-left
              p 
                b Persea
              p Dentro de este género, el aguacate se relaciona con más de 150 especies tropicales, aunque solo unas pocas son aptas para el consumo humano. Persea se caracteriza por sus frutos grandes con semilla única y alto contenido de lípidos.
          .row(titulo="Especie")
            .content-left
              p 
                b Persea americana Mill
              p Es la especie domesticada y cultivada por su fruto comestible, cuya pulpa suave, cremosa y rica en grasas saludables lo hace altamente valorado en la alimentación humana y la industria agroalimentaria.
         
    separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Morfología de la planta
   
    .row.justify-content-center.align-items-center.my-3.mb-0(data-aos="zoom-in")
      .col-md-7.col-lg-4.col-10
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img_05.png", alt="alt").mx-auto.mb-4.mb-lg-0
      .col-lg-8
        SlyderF.mb-5(columnas="col-md-6 col-lg-6 col-xl-6")
          .tarjeta.tarjeta--slyder.p-4.d-flex.flex-column.justify-content-center
            img(src="@/assets/curso/temas/tema1/img_06.svg", alt="alt").mx-auto.w-auto.mb-4
            h5.text-center.color-primario-70 Raíz
            p.text-center.mb-0 El aguacate tiene raíces superficiales sin pelos absorbentes. La absorción de agua y nutrientes ocurre en zonas jóvenes, lo que requiere suelos aireados y con buen drenaje para evitar enfermedades como la pudrición radical.

          .tarjeta.tarjeta--slyder.p-4.d-flex.flex-column.justify-content-center
            img(src="@/assets/curso/temas/tema1/img_07.svg", alt="alt").mx-auto.w-auto.mb-4
            h5.text-center.color-primario-70 Tallo
            p.text-center.mb-0 Es leñoso, erecto y robusto, con corteza grisácea. Puede alcanzar más de 20 m si no se poda. Forma una copa amplia que sostiene el follaje necesario para la fotosíntesis y el equilibrio estructural del árbol.

          .tarjeta.tarjeta--slyder.p-4.d-flex.flex-column.justify-content-center
            img(src="@/assets/curso/temas/tema1/img_08.svg", alt="alt").mx-auto.w-auto.mb-4
            h5.text-center.color-primario-70  Hojas
            p.text-center.mb-0 Son simples, alternas y de forma elíptica. Su color verde brillante facilita la captación de luz. Algunas variedades desprenden aromas específicos. Cumplen funciones esenciales en la fotosíntesis y en el soporte energético del fruto.

          .tarjeta.tarjeta--slyder.p-4.d-flex.flex-column.justify-content-center
            img(src="@/assets/curso/temas/tema1/img_09.svg", alt="alt").mx-auto.w-auto.mb-4
            h5.text-center.color-primario-70 Flores
            p.text-center.mb-0 Agrupadas en panículas, son pequeñas y hermafroditas. Presentan dicogamia protógina, donde primero madura el órgano femenino. Esta característica favorece la polinización cruzada y debe considerarse al elegir variedades compatibles en una plantación.

          .tarjeta.tarjeta--slyder.p-4.d-flex.flex-column.justify-content-center
            img(src="@/assets/curso/temas/tema1/img_10.svg", alt="alt").mx-auto.w-auto.mb-4
            h5.text-center.color-primario-70 Fruto
            p.text-center.mb-0 Es una drupa con una sola semilla. Su tamaño, forma y color varían por variedad. La maduración ocurre fuera del árbol. Su pulpa es cremosa y rica en grasas saludables, ideal para consumo fresco y procesado.
    
    separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3 Tipos y razas

    p El aguacate cuenta con tres razas botánicas principales, cada una con características particulares que determinan su adaptación climática, morfología y comportamiento agronómico. Estas razas son la base para el desarrollo de variedades comerciales e híbridos cultivados actualmente en el mundo.

    .row.justify-content-center.align-items-center.my-3.mb-0(data-aos="zoom-in")
      .col-lg-7
        .tarjeta.color-adicional-1-10.bg-hojas.mb-4.mb-lg-0.p-3
          SlyderA(tipo="b")
            
            .row.align-items-center.mx-auto
              .col-1
              .col-md-8.mb-4.mb-md-0
                p
                  b Mexicana
                p Originaria de altitudes elevadas, esta raza se adapta bien a climas fríos y secos, entre 1.700 y 2.500 m s. n. m. Sus frutos son pequeños, de corteza delgada y con alto contenido de grasa. Las hojas desprenden un aroma anisado, útil para su identificación. Tiene una floración corta (6 – 8 meses) y es ideal como portainjerto por su resistencia y rusticidad.
              .col-6.col-md-2.mx-auto
                figure
                  img(src="@/assets/curso/temas/tema1/img_11.svg", alt="alt").mx-auto.mb-4.mb-lg-0
              .col-1
            
            .row.align-items-center.mx-auto
              .col-1
              .col-md-8.mb-4.mb-md-0
                p
                  b Guatemalteca
                p Prefiere zonas templadas-altas (1.200–2.400 m s. n. m.) y se caracteriza por frutos medianos o grandes con cáscara gruesa, rugosa y buena resistencia al transporte. Su pulpa es mantecosa, de sabor suave, y el periodo de desarrollo del fruto es más largo (hasta 15 meses). La variedad Hass, altamente comercial, proviene de esta raza.
              .col-6.col-md-2.mx-auto
                figure
                  img(src="@/assets/curso/temas/tema1/img_12.svg", alt="alt").mx-auto.mb-4.mb-lg-0
              .col-1
            
            .row.align-items-center.mx-auto
              .col-1
              .col-md-8.mb-4.mb-md-0
                p
                  b Antillana
                p Se desarrolla en zonas cálidas y húmedas, desde el nivel del mar hasta los 1.500 m s. n. m. Produce frutos de gran tamaño, con pulpa fibrosa y cáscara verde clara. Su crecimiento es rápido y su floración a cosecha toma de 5 a 8 meses. Es muy sensible al frío pero resistente a suelos salinos o con alto contenido de cloruros.
              .col-6.col-md-2.mx-auto
                figure
                  img(src="@/assets/curso/temas/tema1/img_13.svg", alt="alt").mx-auto.mb-4.mb-lg-0
              .col-1

      .col-md-7.col-lg-5.col-10
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img_14.png", alt="alt").mx-auto.mb-4.mb-lg-0
      
    separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4 Fenología y variedades

    .color-adicional-1-10.p-4.box-icons.position-relative.mb-5
      .row
        img(src="@/assets/curso/temas/tema1/img_15.png", alt="alt").w-auto.first
        .col-12.col-md-10.mx-auto
          p La fenología es el estudio de las etapas del desarrollo de una planta a lo largo del tiempo, desde su brotación hasta la madurez del fruto. En el caso del aguacate, estas fases no solo permiten planear el manejo agronómico (como podas, fertilización y riego), sino también anticipar la cosecha y alinear la producción con los requerimientos del mercado.
          p.mb-0 El ciclo fenológico varía según la raza y variedad, y puede durar entre 5 a 15 meses desde la floración hasta la maduración fisiológica del fruto. A continuación, se describen sus principales etapas:
        img(src="@/assets/curso/temas/tema1/img_16.png", alt="alt").w-auto.second

    .tarjeta.mb-5.p-3.color-primario-10
      .row.justify-content-center.align-items-center.p-3.mb-0(data-aos="zoom-in")
        .col-md-5.col-lg-4.col-10
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img_17.png", alt="alt").mx-auto.mb-4.mb-lg-0
        .col-lg-8
          SlyderF(columnas="col-md-6 col-lg-6 col-xl-6").style2
            .tarjeta.tarjeta--slyder.py-2.px-4.d-flex.flex-column.justify-content-center
              img(src="@/assets/curso/temas/tema1/img_18.svg", alt="alt").mx-auto.w-auto.mb-2
              h5.text-center Brotación
              p.text-center.mb-0 Aparición de nuevos brotes y hojas. Es una señal de reinicio del ciclo vegetativo.
            .tarjeta.tarjeta--slyder.py-2.px-4.d-flex.flex-column.justify-content-center
              img(src="@/assets/curso/temas/tema1/img_19.svg", alt="alt").mx-auto.w-auto.mb-2
              h5.text-center Floración
              p.text-center.mb-0 El árbol produce panículas con cientos de flores, pero solo una pequeña parte llegará a cuajarse.
            .tarjeta.tarjeta--slyder.py-2.px-4.d-flex.flex-column.justify-content-center
              img(src="@/assets/curso/temas/tema1/img_20.svg", alt="alt").mx-auto.w-auto.mb-2
              h5.text-center Cuajado del fruto
              p.text-center.mb-0 Ocurre después de la fecundación. Aquí se define cuántos frutos llegarán a cosecha.
            .tarjeta.tarjeta--slyder.py-2.px-4.d-flex.flex-column.justify-content-center
              img(src="@/assets/curso/temas/tema1/img_21.svg", alt="alt").mx-auto.w-auto.mb-2
              h5.text-center Desarrollo del fruto
              p.text-center.mb-0 Fase de crecimiento en tamaño, peso y acumulación de aceites en la pulpa.
            .tarjeta.tarjeta--slyder.py-2.px-4.d-flex.flex-column.justify-content-center
              img(src="@/assets/curso/temas/tema1/img_22.svg", alt="alt").mx-auto.w-auto.mb-2
              h5.text-center Maduración fisiológica
              p.text-center.mb-0 El fruto está listo para cosecha, aunque su madurez final ocurre después de ser recolectado.
      
    p La duración del ciclo fenológico del aguacate varía según la raza: en la raza mexicana el fruto madura entre 6 y 8 meses, en la antillana entre 5 y 8 meses, y en la guatemalteca, como en el caso de la variedad Hass, puede extenderse hasta 15 meses. Esta diferencia en los tiempos de desarrollo es clave para que los agricultores seleccionen las variedades no solo por su calidad de fruto, sino también en función de su calendario productivo, lo que permite escalonar las cosechas y acceder a ventanas comerciales más rentables.

    .color-adicional-1-10.bg-hojas.tarjeta.mb-5.p-4
      .row.align-items-center
        .col-12.col-lg-2
          figure
            img(src='@/assets/curso/temas/tema1/img_23.png', alt='Imagen decorativa').w-auto.mx-auto.mb-3.mb-lg-0
        .col-12.col-lg-9
          p.mb-0 Además de las diferencias entre razas, existen múltiples variedades de aguacate que se cultivan en función de su comportamiento agronómico, calidad del fruto y demanda comercial. Algunas destacan por su resistencia, otras por su sabor o capacidad de conservación, lo que permite al productor elegir la más adecuada según el clima, el mercado y la época de cosecha.
    
    
    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-lg-4.col-12.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img_24.png', alt='Imagen decorativa')
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-adicional-1-10")
          .row(titulo="Hass (Tipo A)")
            .col-1
            .col-12.col-lg-10
              p Variedad líder en exportación. Fruto ovalado con piel gruesa y rugosa que se oscurece al madurar. Alta vida útil, pulpa cremosa y sabor suave. Excelente comportamiento poscosecha. Deriva de la raza guatemalteca.
            .col-1
          .row(titulo="Fuerte (Tipo B)").align-items-center
            .col-1
            .col-12.col-lg-8
              p Híbrido entre razas mexicana y guatemalteca. Fruto mediano, piel lisa y pulpa sabrosa. Buena adaptación climática, resistencia al frío y útil como polinizador. Muy cultivada en mercados nacionales.
            .col-3.col-lg-2.mx-auto
               img(src='@/assets/curso/temas/tema1/img_25.png', alt='Imagen decorativa')
            .col-1
          .row(titulo="Reed (Tipo A)").align-items-center
            .col-1
            .col-12.col-lg-8
              p Fruto grande y redondo, con piel gruesa y pulpa mantecosa. Se conserva verde al madurar. Requiere altitudes medias. Buena vida poscosecha. Ideal para consumo fresco y procesamiento.
            .col-3.col-lg-2.mx-auto
               img(src='@/assets/curso/temas/tema1/img_26.png', alt='Imagen decorativa')
            .col-1
          .row(titulo="Bacon (Tipo B)").align-items-center
            .col-1
            .col-12.col-lg-8
              p Variedad de floración temprana. Fruto mediano, piel delgada y sabor suave. Se adapta a zonas templadas. Es comúnmente utilizada como variedad polinizadora.
            .col-3.col-lg-2.mx-auto
               img(src='@/assets/curso/temas/tema1/img_27.png', alt='Imagen decorativa')
            .col-1
          .row(titulo="Pinkerton (Tipo A)").align-items-center
            .col-1
            .col-12.col-lg-8
              p Fruto en forma de pera, con piel rugosa y fácil de pelar. Alta productividad y buena relación pulpa semilla. Pulpa de excelente calidad. Apta para climas subtropicales y mercados frescos.
            .col-3.col-lg-2.mx-auto
               img(src='@/assets/curso/temas/tema1/img_28.png', alt='Imagen decorativa')
            .col-1
          .row(titulo="Zutano (Tipo B)").align-items-center
            .col-1
            .col-12.col-lg-8
              p De origen californiano, muy usada como polinizadora para Hass. Fruto mediano, piel delgada y brillante, de color verde. Alta resistencia al frío. Pulpa menos cremosa, pero útil para diversificación.
            .col-3.col-lg-2.mx-auto
               img(src='@/assets/curso/temas/tema1/img_25.png', alt='Imagen decorativa')
            .col-1

    separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_5 1.5 Normas técnicas y bioseguridad

    .color-adicional-1-10.p-4.box-icons.position-relative.mb-5.bg-hojas
      .row
        img(src="@/assets/curso/temas/tema1/img_15.png", alt="alt").w-auto.first
        .col-12.col-md-10.mx-auto
          p Colombia cuenta con la Norma Técnica Colombiana NTC 5209, que establece los requisitos de calidad para la comercialización de frutas frescas de aguacate. Esta norma regula aspectos como la clasificación por tamaño, estado de madurez, tolerancias de defectos, condiciones de empaque y etiquetado, garantizando que el producto cumpla con estándares nacionales e internacionales, especialmente en procesos de exportación.
          p.mb-0 En paralelo al cumplimiento normativo, es fundamental implementar medidas de bioseguridad en todas las fases de producción, particularmente durante la propagación en vivero. Entre las más importantes se destacan:
        img(src="@/assets/curso/temas/tema1/img_16.png", alt="alt").w-auto.second

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img_30.png", alt="alt")
          .crd_hover_txt--body.text-center
            h5.mb-3 Semillas certificadas 	
            p.mb-2 Utilizar solo semillas o yemas provenientes de árboles madre sanos y trazables, libres de patógenos.

      .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img_31.png", alt="alt")
          .crd_hover_txt--body.text-center.color-secundario
            h5.mb-3 Desinfección de herramientas
            p.mb-2 Limpiar y desinfectar frecuentemente mesas, bandejas, tijeras y utensilios para evitar la propagación de enfermedades entre lotes.

      .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img_32.png", alt="alt")
          .crd_hover_txt--body.text-center
            h5.mb-3 Micorrizas y 
              i Trichoderma	
            p.mb-2 Incorporar microorganismos benéficos en el sustrato para proteger las raíces y mejorar la absorción de nutrientes.
      
      .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img_33.png", alt="alt")
          .crd_hover_txt--body.text-center.color-secundario
            h5.mb-3 Protocolos fitosanitarios	
            p.mb-2 Implementar vigilancia constante de plagas, control de acceso a viveros, eliminación segura de residuos y registro de actividades.
      

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
