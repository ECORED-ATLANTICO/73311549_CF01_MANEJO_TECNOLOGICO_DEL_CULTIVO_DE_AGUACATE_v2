<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Instrumentos y control


    .color-adicional-1-10.box-icons.position-relative.mb-3.bg-hojas-2
      .row.align-items-center
        .col-5.col-md-2.mx-auto.mx-lg-0
          img(src="@/assets/curso/temas/tema6/img_01.png", alt="alt").w-auto.position-relative
        .col-12.col-md-9.p-4
          p.mb-0 El uso de instrumentos adecuados y el control riguroso de variables en el vivero son fundamentales para garantizar la calidad del material vegetal. A través del monitoreo técnico y la medición de condiciones ambientales, junto con el registro sistemático de cada etapa del proceso, se logra mantener la trazabilidad, optimizar recursos y prevenir desviaciones que afecten la sanidad y el desarrollo de las plántulas.
        img(src="@/assets/curso/temas/tema5/img_21.png", alt="alt").w-auto.second

    separador

    .titulo-segundo.color-acento-contenido
      h2#t_6_1 6.1 Monitoreo y medición técnica

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-7.mb-4
        .cajon.color-adicional-1-10.p-4
          p El monitoreo técnico en vivero consiste en observar, medir y registrar las condiciones ambientales y fisiológicas que afectan el desarrollo de las plántulas. Este control permite prevenir desviaciones, aplicar correcciones oportunas y asegurar un ambiente óptimo para la germinación, crecimiento e injertación del aguacate.
      .col-lg-5.col-md-12.mb-4
        figure
          img(src='@/assets/curso/temas/tema6/img_02.png', alt='Imagen decorativa')

    p.mb-5 Las principales variables que se deben controlar se describen en la tabla:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-10.mx-auto
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2. 
          span Variables de monitoreo en vivero 

        .tabla-a.tabla-verde
          table
            caption <strong>Fuente:</strong> SENA, 2025.
            thead
              tr
                th Variable
                th Rango ideal
                th Importancia técnica
            tbody
              tr
                td Temperatura ambiente
                td 18–28 °C
                td Afecta la tasa de germinación y el metabolismo de la plántula.
              tr
                td Humedad relativa
                td 70–80 %
                td Previene deshidratación de brotes e injertos; alta humedad promueve hongos.
              tr
                td Humedad del sustrato
                td 50–65 % (sin encharcamiento)
                td Clave para desarrollo radicular; evita pudrición por exceso de agua.
              tr
                td Luminosidad
                td 1.500–2.000 lux
                td Influye en la fotosíntesis; exceso puede quemar hojas tiernas. 
              tr
                td pH del sustrato
                td 5.5–6.5
                td Asegura disponibilidad de nutrientes.

    .row.mb-2.align-items-center.mb-5
      .col-6.col-lg-2.mb-3.mb-lg-0.mx-auto
        figure
          img(src='@/assets/curso/temas/tema6/img_03.svg', alt='Imagen decorativa').w-auto.mx-auto
      .col-12.col-lg-10
        p.mb-0 Para garantizar condiciones óptimas en el desarrollo de las plántulas de aguacate, es indispensable contar con instrumentos que permitan medir las variables ambientales y del sustrato de forma precisa y continua. Estos equipos facilitan el control técnico del vivero y la toma de decisiones oportunas para corregir desviaciones que puedan afectar el crecimiento o la sanidad del material vegetal:


    .row.justify-content-center.align-items-center(data-aos="zoom-in").mb-5
      .col-lg-5.col-12.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema6/img_04.png', alt='Imagen decorativa')
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-adicional-1-10")
          .row(titulo="Termohigrómetro")
            .content-left
              p Instrumento que permite medir simultáneamente la temperatura y la humedad relativa del ambiente en el vivero. Ayuda a detectar condiciones extremas que podrían alterar la germinación, el prendimiento del injerto o generar estrés fisiológico en las plántulas. Se recomienda colocarlo a la altura media de las plantas, alejado de corrientes de aire directo.
          .row(titulo="Sensor de humedad del sustrato").align-items-center
            .content-left
              p Dispositivo que evalúa el nivel de humedad directamente en el sustrato donde crecen las plantas. Su lectura permite ajustar el riego y evitar tanto el déficit como el exceso de agua, previniendo enfermedades como la pudrición radicular. Existen modelos manuales y digitales, con pantallas de lectura o conectividad a 
                i apps 
                | móviles.
          .row(titulo="Medidor de pH digital").align-items-center
            .content-left
              p Herramienta indispensable para verificar la acidez o alcalinidad del sustrato. El rango óptimo para el aguacate está entre 5.5 y 6.5. Niveles fuera de este margen pueden bloquear nutrientes y afectar el desarrollo radicular. El medidor requiere calibración frecuente con soluciones 
                i buffer 
                | para asegurar exactitud.
          .row(titulo="Luxómetro").align-items-center
            .content-left
              p Mide la intensidad de la luz solar o artificial en el entorno del vivero. Es útil para determinar si la cantidad de luminosidad es adecuada para la etapa vegetativa de las plántulas. El aguacate necesita entre 1.500 y 2.000 lx en vivero. Si la intensidad es demasiado alta, se recomienda instalar mallas de sombra.
          .row(titulo="Pluviómetro").align-items-center
            .content-left
              p Utilizado principalmente en viveros a cielo abierto, permite conocer la cantidad de lluvia caída durante un periodo determinado. Esta información es esencial para ajustar los riegos y prevenir encharcamientos. Debe vaciarse después de cada medición y ubicarse en un lugar sin interferencias.

    .color-primario-10.p-4.box-icons.position-relative.mb-3
      .row
        img(src="@/assets/curso/temas/tema1/img_15.png", alt="alt").w-auto.first
        .col-12.col-md-10.mx-auto
          p.mb-0 El monitoreo debe realizarse como mínimo una vez al día, registrando los valores de cada variable. En el caso de plántulas recién injertadas, se sugiere hacer lecturas cada 6–8 horas durante la primera semana, ya que el injerto es altamente sensible a cambios bruscos en humedad y temperatura.
        img(src="@/assets/curso/temas/tema1/img_16.png", alt="alt").w-auto.second           

    separador

    .titulo-segundo.color-acento-contenido
      h2#t_6_2 6.2 Registro y trazabilidad

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-8.mb-4
        p.mb-2 El registro y la trazabilidad son pilares fundamentales para garantizar la calidad, seguridad y control técnico en la producción de plántulas de aguacate. Tener documentado cada paso del proceso, desde la selección de la semilla hasta la entrega del material listo para campo, permite seguir el historial completo del lote, detectar fallos a tiempo, corregir desviaciones y responder a auditorías internas o externas. Esta práctica no solo mejora la gestión técnica del vivero, sino que también permite cumplir con normas de certificación, exigencias comerciales y requisitos de las Buenas Prácticas Agrícolas (BPA).
        .cajon.color-adicional-1-10.p-4
          .row
            .col-lg-2.col-4.mx-auto
              figure
                img(src='@/assets/curso/temas/tema1/img_16.png', alt='Imagen decorativa')
            .col-12.col-lg-10
              p.mb-0 La trazabilidad consiste en mantener un sistema de identificación, seguimiento y verificación continua de cada lote o unidad productiva, desde el origen del material vegetal hasta su salida del vivero. Implica tener registros sistemáticos y organizados, que reflejen el paso a paso del desarrollo de las plántulas, los insumos utilizados, las condiciones de producción y los resultados obtenidos.
      .col-lg-4.col-md-12.mb-4
        figure
          img(src='@/assets/curso/temas/tema6/img_05.png', alt='Imagen decorativa')

    .row.mb-5
      .col-7.col-lg-5.d-none.d-lg-block
         figure
          img(src='@/assets/curso/temas/tema6/img_15.png', alt='Imagen decorativa')
      .col-12.col-lg-7
        .tarjeta.bg-verde.p-4.mb-5
          .tarjeta.bg-white.p-4.bg-hojas
            SlyderA(tipo="b").p-3.morebullets
                .row.align-items-center.mx-auto
                  .col-md-6.mb-md-0.mx-auto
                    h4.mb-4
                      b 1. Origen del material vegetal
                    ul.bullets
                      li Código o número de lote.
                      li Procedencia del árbol madre.
                      li Raza o variedad.
                      li Fecha de recolección de semilla.
                  .col-6.col-md-3.mx-auto
                    figure
                      img(src="@/assets/curso/temas/tema6/img_06.svg", alt="alt").mx-auto.mb-4.mb-lg-0

                .row.align-items-center.mx-auto
                  .col-md-6.mb-md-0.mx-auto
                    h4.mb-4
                      b 2. Preparación del sustrato
                    ul.bullets
                      li Tipo de mezcla (proporciones de componentes).
                      li Método de desinfección.
                      li Fecha de preparación.
                  .col-6.col-md-3.mx-auto
                    figure
                      img(src="@/assets/curso/temas/tema6/img_07.svg", alt="alt").mx-auto.mb-4.mb-lg-0
                
                .row.align-items-center.mx-auto
                  .col-md-6.mb-md-0.mx-auto
                    h4.mb-4
                      b 3. Siembra
                    ul.bullets
                      li Fecha de siembra.
                      li Número de semillas sembradas.
                      li Tipo y tamaño de bolsa.
                      li Código de ubicación o cama.
                  .col-6.col-md-3.mx-auto
                    figure
                      img(src="@/assets/curso/temas/tema6/img_08.svg", alt="alt").mx-auto.mb-4.mb-lg-0

                .row.align-items-center.mx-auto
                  .col-md-6.mb-md-0.mx-auto
                    h4.mb-4
                      b 4. Germinación
                    ul.bullets
                      li Fecha de emergencia.
                      li Porcentaje de germinación.
                      li Observaciones sanitarias iniciales.
                  .col-6.col-md-3.mx-auto
                    figure
                      img(src="@/assets/curso/temas/tema6/img_09.svg", alt="alt").mx-auto.mb-4.mb-lg-0

                .row.align-items-center.mx-auto
                  .col-md-6.mb-md-0.mx-auto
                    h4.mb-4
                      b 5. Injertación
                    ul.bullets
                      li Fecha de injerto.
                      li Técnica usada (cuña, terminal, lateral).
                      li Variedad injertada.
                      li Resultado (prendido sí/no).
                  .col-6.col-md-3.mx-auto
                    figure
                      img(src="@/assets/curso/temas/tema6/img_10.svg", alt="alt").mx-auto.mb-4.mb-lg-0
                
                .row.align-items-center.mx-auto
                  .col-md-6.mb-md-0.mx-auto
                    h4.mb-4
                      b 6. Aplicación de tratamientos
                    ul.bullets
                      li Tipo de producto (fertilizante,     
                        i Trichoderma, 
                        | micorrizas).
                      li Dosis, frecuencia y método de aplicación.
                      li Fecha.
                  .col-6.col-md-3.mx-auto
                    figure
                      img(src="@/assets/curso/temas/tema6/img_11.svg", alt="alt").mx-auto.mb-4.mb-lg-0

                .row.align-items-center.mx-auto
                  .col-md-6.mb-md-0.mx-auto
                    h4.mb-4
                      b 7. Monitoreo de condiciones
                    ul.bullets
                      li Temperatura y humedad ambiente.   
                      li Humedad del sustrato.
                      li pH del sustrato.
                      li Observaciones diarias o semanales.
                  .col-6.col-md-3.mx-auto
                    figure
                      img(src="@/assets/curso/temas/tema6/img_12.svg", alt="alt").mx-auto.mb-4.mb-lg-0

                .row.align-items-center.mx-auto     
                  .col-md-6.mb-md-0.mx-auto
                    h4.mb-4
                      b 8. Evaluación de calidad
                    ul.bullets
                      li Altura de la plántula.
                      li Número de hojas.
                      li Estado del injerto.
                      li Presencia de plagas o daños.
                      li Clasificación (Apta / No apta).
                  .col-6.col-md-3.mx-auto
                    figure
                      img(src="@/assets/curso/temas/tema6/img_13.svg", alt="alt").mx-auto.mb-4.mb-lg-0

                .row.align-items-center.mx-auto
                  .col-md-6.mb-md-0.mx-auto
                    h4.mb-4
                      b 9. Salida del vivero
                    ul.bullets
                      li Fecha de entrega o trasplante.
                      li Número de plántulas entregadas.
                      li Destino (finca, lote, cliente).
                      li Nombre del responsable.
                  .col-6.col-md-3.mx-auto
                    figure
                      img(src="@/assets/curso/temas/tema6/img_14.svg", alt="alt").mx-auto.mb-4.mb-lg-0
                  


                
                


</template>

<script>
export default {
  name: 'Tema6',
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
