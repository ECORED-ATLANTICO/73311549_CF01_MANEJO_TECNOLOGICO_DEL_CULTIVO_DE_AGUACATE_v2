<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Manejo del vivero

    .color-primario-10.box-icons.position-relative.mb-5.bg-hojas-3
      .row.align-items-center
        .col-5.col-md-3
          img(src="@/assets/curso/temas/tema5/img_01.png", alt="alt").w-auto.position-relative
        .col-12.col-md-8.p-3
          p.mb-0 El manejo adecuado del vivero es esencial para garantizar plántulas sanas y de alta calidad. Esto implica desde el diseño y ubicación estratégica del espacio productivo, hasta la implementación de prácticas que aseguren condiciones óptimas para la siembra, el injerto y el desarrollo vegetal, con criterios técnicos que favorezcan la uniformidad, sanidad y adaptabilidad de las futuras plantas.
        img(src="@/assets/curso/temas/tema5/img_21.png", alt="alt").w-auto.second


    .titulo-segundo.color-acento-contenido
      h2#t_5_1 5.1 Diseño y establecimiento del vivero
    
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-5.col-md-12.mb-4
        figure
          img(src='@/assets/curso/temas/tema5/img_02.png', alt='Imagen decorativa')
      .col-lg-7.mb-4
        .cajon.color-adicional-1-10.p-4
          p El diseño del vivero debe responder a criterios técnicos que garanticen el desarrollo sano del material vegetal. Su ubicación debe seleccionarse en un terreno con buena ventilación, acceso permanente a agua limpia, exposición moderada a la luz solar y lejos de fuentes de contaminación o zonas inundables. Un suelo con pendiente suave favorece el drenaje natural y evita acumulaciones de agua que podrían afectar las raíces jóvenes.
    
    .tarjeta.bg-verde.p-4.mb-5
      .tarjeta.bg-white.p-4
         SlyderA(tipo="b")
            .row.align-items-center.mx-auto
              .col-6.col-md-5.mx-auto
                figure
                  img(src="@/assets/curso/temas/tema5/img_07.png", alt="alt").mx-auto.mb-4.mb-lg-0
              .col-md-6.mb-md-0.mx-auto
                h4
                  b Paso 1. Selección del terreno
                p Ubicar el vivero en una zona con pendiente suave (para drenaje), buena ventilación, acceso a agua limpia, luz solar parcial y lejos de zonas inundables o fuentes de contaminación.	 
            
            .row.align-items-center.mx-auto
              .col-md-6.mb-md-0.mx-auto
                h4
                  b Paso 2. Preparación del terreno
                p Limpiar el área de residuos, nivelar el suelo si es necesario y delimitar el espacio total del vivero. Marcar las zonas de camas, circulación, insumos y cuarentena.
              .col-6.col-md-5.mx-auto
                figure
                  img(src="@/assets/curso/temas/tema5/img_08.png", alt="alt").mx-auto.mb-4.mb-lg-0
             
            .row.align-items-center.mx-auto
              .col-6.col-md-5.mx-auto
                figure
                  img(src="@/assets/curso/temas/tema5/img_09.png", alt="alt").mx-auto.mb-4.mb-lg-0
              .col-md-6.mb-md-0.mx-auto
                h4
                  b Paso 3. Instalación de camas elevadas
                p Construir camas o bancales de 25 a 30 cm de altura, con drenaje y bordes definidos. Esto mejora la aireación del sustrato y previene el contacto con patógenos del suelo.
            
            .row.align-items-center.mx-auto
              .col-md-6.mb-md-0.mx-auto
                h4
                  b Paso 4. Instalación de estructuras de protección
                p Colocar mallas de sombra (35–50 % de cobertura) para controlar la radiación solar. Incorporar mallas laterales o cercas para proteger contra animales y lluvias intensas.
              .col-6.col-md-5.mx-auto
                figure
                  img(src="@/assets/curso/temas/tema5/img_10.png", alt="alt").mx-auto.mb-4.mb-lg-0
             
            .row.align-items-center.mx-auto
              .col-6.col-md-5.mx-auto
                figure
                  img(src="@/assets/curso/temas/tema5/img_11.png", alt="alt").mx-auto.mb-4.mb-lg-0
              .col-md-6.mb-md-0.mx-auto
                h4
                  b Paso 5. Preparación del sustrato
                p Elaborar una mezcla aireada, rica en materia orgánica (por ejemplo, tierra negra + cascarilla + compost), desinfectada previamente con calor o productos autorizados.

            .row.align-items-center.mx-auto
              .col-6.col-md-5.mx-auto
                figure
                  img(src="@/assets/curso/temas/tema5/img_12.png", alt="alt").mx-auto.mb-4.mb-lg-0
              .col-md-6.mb-md-0.mx-auto
                h4
                  b Paso 6. Llenado de bolsas y distribución
                p Utilizar bolsas plásticas de 40–45 cm de altura y mínimo 20 cm de diámetro. Llenarlas uniformemente con el sustrato, y ubicarlas sobre las camas dejando pasillos para el acceso.

            .row.align-items-center.mx-auto
              .col-6.col-md-5.mx-auto
                figure
                  img(src="@/assets/curso/temas/tema5/img_13.png", alt="alt").mx-auto.mb-4.mb-lg-0
              .col-md-6.mb-md-0.mx-auto
                h4
                  b Paso 7. Distribución funcional del vivero
                p Organizar las zonas del vivero por actividad: área de germinación, zona de injertación, sección de endurecimiento, espacio de almacenamiento de insumos y área de cuarentena para material sospechoso.

    separador

    .titulo-segundo.color-acento-contenido
      h2#t_5_2 5.2 Producción y calidad de plántulas

    p La producción de plántulas de aguacate en vivero es un proceso técnico que requiere control riguroso desde la siembra hasta el punto de trasplante.

    .row.mb-5
      .col-12.col-lg-10.mx-auto
        PasosA.mb-5(tipo="n")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Siembra
              p.mb-0 Se inicia con la colocación de semillas desinfectadas y frescas (no mayores a 3 semanas) en bolsas de polietileno de 40–45 cm de alto y 20 cm de diámetro. La semilla se ubica verticalmente, con el extremo basal hacia abajo, a una profundidad de 2 a 5 cm, sobre un sustrato suelto, aireado, rico en materia orgánica y previamente desinfectado.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img_10.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema5/img_11.png', alt='Texto que describa la imagen')
            .col-md-6
              h3 Germinación
              p.mb-0 Ocurre entre los 15 y 20 días después de la siembra. Aparece el brote y luego las primeras hojas verdaderas. En esta etapa, el viverista debe mantener un riego suave, evitar el exceso de humedad y proteger el brote de plagas. Esta fase marca el inicio del crecimiento activo.
              

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h3 Desarrollo vegetativo
              p.mb-0 Durante las semanas siguientes (3 a 8), la plántula desarrolla tallo, hojas y raíces. Se deben mantener condiciones ambientales controladas (temperatura entre 18 y 28 °C, humedad relativa del 70–80 %). Se recomienda aplicar micorrizas al sustrato y Trichoderma como biocontrolador. El riego debe ser frecuente, pero sin saturar. Esta etapa define la fortaleza del patrón.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img_12.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h3 Injertación
              p.mb-0 Al alcanzar unos 30–35 cm de altura, con tallo lignificado y buen calibre, se realiza el injerto en cuña o terminal. Se usa una yema o púa de una variedad deseada y se cubre con cinta plástica para proteger la unión. Es fundamental realizar la injertación en condiciones de sombra parcial y baja evaporación.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img_13.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h3 Posinjerto
              p.mb-0 Después de la injertación, la plántula se mantiene entre 8 y 10 semanas en condiciones protegidas: ventilación progresiva, corte parcial de la bolsa protectora, y exposición gradual al sol. Se continúa con el monitoreo de sanidad y se retira la cinta cuando el injerto esté bien prendido.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img_14.png', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
        .col-lg-4.col-md-12.mb-4
          figure
            img(src='@/assets/curso/temas/tema5/img_15.png', alt='Imagen decorativa')
        .col-lg-8.mb-4
          p.mb-2 La calidad de la plántula de aguacate es un factor determinante en el éxito del establecimiento del cultivo en campo. Una plántula que cumpla con los parámetros físicos y sanitarios mínimos asegura mayor tasa de prendimiento, menor estrés postransplante, mayor uniformidad de desarrollo y, en el largo plazo, una mejor productividad.
          .cajon.color-adicional-1-10.p-4
            p.mb-0 Durante la fase final del vivero, es fundamental realizar una evaluación visual y técnica de cada planta, considerando criterios agronómicos estandarizados. Esta verificación permite clasificar, seleccionar y descartar material no conforme, evitando pérdidas en campo y garantizando la trazabilidad del proceso productivo.
      
      TabsA.color-primario
        .tarjeta.color-primario-10.p-4(titulo="Altura (60–120 cm)")
          .row.mx-auto.align-items-center
            .col-1
            .col-lg-7
              p Una planta demasiado baja indica bajo desarrollo, y una demasiado alta puede presentar debilidad estructural. La altura óptima muestra buen equilibrio vegetativo.
            .col-lg-3.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img_16.svg', alt='Texto que describa la imagen')
            .col-1
            
        .tarjeta.color-primario-10.p-4(titulo="Mínimo 15 hojas sanas")
          .row.mx-auto.align-items-center
            .col-1
            .col-lg-7
              p Hojas completas, con coloración verde uniforme, sin manchas, mordeduras, quemaduras solares ni signos de clorosis o deficiencia nutricional.
            .col-lg-3.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img_17.svg', alt='Texto que describa la imagen')
            .col-1
        
        .tarjeta.color-primario-10.p-4(titulo="Injerto firme y bien sellado")
          .row.mx-auto.align-items-center
            .col-1
            .col-lg-7
              p Una planta demasiado baja indica bajo desarrollo, y una demasiado alta puede presentar debilidad estructural. La altura óptima muestra buen equilibrio vegetativo.
            .col-lg-3.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img_18.svg', alt='Texto que describa la imagen')
            .col-1

        .tarjeta.color-primario-10.p-4(titulo="Sin manchas ni deformaciones")
          .row.mx-auto.align-items-center
            .col-1
            .col-lg-7
              p El tallo debe ser recto, sin curvaturas o daños por manipulación. La planta no debe presentar síntomas visibles de enfermedades fúngicas o bacterianas.
            .col-lg-3.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img_19.svg', alt='Texto que describa la imagen')
            .col-1

        .tarjeta.color-primario-10.p-4(titulo="Raíz en buen estado")
          .row.mx-auto.align-items-center
            .col-1
            .col-lg-7
              p Aunque no se observa completamente, una raíz sana no debe sobresalir en exceso por la bolsa ni presentar espiralización, pudrición o asfixia.
            .col-lg-3.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img_20.svg', alt='Texto que describa la imagen')
            .col-1



</template>

<script>
export default {
  name: 'Tema5',
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
