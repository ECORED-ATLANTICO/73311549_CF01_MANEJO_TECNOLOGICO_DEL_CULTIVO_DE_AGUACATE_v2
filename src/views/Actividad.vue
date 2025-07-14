<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Estrategia de producción y propagación del aguacate.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Desarrollar e implementar una estrategia integral de producción y propagación del aguacate que optimice la calidad de los materiales de siembra, maximice la productividad y promueva prácticas sostenibles, asegurando así el éxito del cultivo a largo plazo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el clima ideal para el cultivo del aguacate?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Frío extremo',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Templado',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cálido y húmedo',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Desértico',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué tipo de suelo es más adecuado para el aguacate?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Arenoso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Arcilloso',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Franco areno',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Suelo salino',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es la distancia recomendada entre plantas de aguacate?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '1 metro',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '3 a 6 metros',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '10 metros',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '15 metros',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué factor es crucial en la selección de patrones para el aguacate?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color de la fruta',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tolerancia a enfermedades',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tamaño del árbol',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Forma de las hojas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es la principal forma de propagación del aguacate?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Semilla',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Acodo',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Injerto',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Esqueje',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué debe hacerse antes de sembrar semillas de aguacate en el vivero?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pintarlas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desinfectarlas',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Congelarlas',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cocinarlas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la duración promedio de un aguacate desde la siembra hasta la cosecha?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '1 año',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '3 años',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '5 años',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '7 años',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué característica de la flor del aguacate ayuda a evitar la autofecundación?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tamaño',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Protoginia',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fragancia',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué se debe hacer con la semilla de aguacate después de extraerla del fruto?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Secarlas',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cocinarlas',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Meterla en agua',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ponerla en sol',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el principal desafío en el manejo de vivero para aguacate?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Riego',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Control de plagas',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Selección de semillas',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fertilización',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuánto tiempo puede almacenarse una semilla de aguacate sin afectar su germinación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '1 semana',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '2 semanas',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '1 mes',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '2 meses',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué tipo de fertilizante se recomienda para el aguacate en el vivero?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo orgánico',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo químico',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Orgánico y químico',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ninguno',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿En qué fase del crecimiento del aguacate se realiza la poda?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Al inicio',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Durante la floración',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'En el crecimiento vegetativo',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'En la cosecha',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué tipo de riego es más efectivo para el cultivo de aguacate?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Riego por goteo',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Riego aspersión',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Riego manual',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Riego a surcos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el tamaño ideal del contenedor para iniciar el cultivo de aguacate en vivero?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '1 litro',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '3 a 5 litros',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '10 litros',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '20 litros',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué aspecto de la planta de aguacate debe ser monitoreado para evitar plagas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color de las hojas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tamaño del tronco',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estado del sustrato',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Altura de la planta',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es el principal beneficio de utilizar injertos en el aguacate?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acelera el crecimiento',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejora la calidad de la fruta',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumenta la resistencia a enfermedades',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reduce el tamaño del árbol',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué se debe evitar al manejar las yemas para injerto?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exposición a la luz',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Exposición a la humedad',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contacto con el aire',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso de herramientas limpias',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué color pueden tener las flores del aguacate?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo blanco',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo rojo',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Variados (crema, amarillo, verde, café)',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo azul',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es la importancia de la selección del material vegetal en el cultivo de aguacate?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumenta el costo',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejora la estética',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Asegura mejor producción y calidad',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reduce el tiempo de cosecha',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
