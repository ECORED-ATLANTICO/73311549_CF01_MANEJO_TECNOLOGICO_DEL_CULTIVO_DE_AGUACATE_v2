export default {
  global: {
    Name: 'Nombre del recurso educativo',
    Description: 'Descripción del RED',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades del aguacate',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Origen y taxonomía',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Morfología de la planta',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos y razas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Fenología y variedades',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Normas técnicas y bioseguridad',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Zonas de vida y clima',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación ecológica',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Requerimientos climáticos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Altitud y adaptación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Suelos y propiedades',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Encalado y fertilización',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Planeación de la producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Análisis de mercado y demanda',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Ciclo productivo y sostenibilidad',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Material vegetal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Selección genética y sanitaria',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Métodos de propagación',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Manejo del vivero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Diseño y establecimiento del vivero',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Producción y calidad de plántulas',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Instrumentos y control',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Monitoreo y medición técnica',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Registro y trazabilidad',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF01_73311549_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Generalidades del cultivo de aguacate',
      referencia:
        'Corporación Colombiana de Investigación Agropecuaria (AGROSAVIA). (2020). Actualización tecnológica y buenas prácticas agrícolas en el cultivo de aguacate Hass.',
      tipo: 'PDF',
      link:
        'https://www.avocadosource.com/books/BernalyDiaz2020.pdf?utm_source=chatgpt.com',
    },
    {
      tema: 'Manejo tecnológico del cultivo de aguacate',
      referencia:
        'AGROSAVIA. (2023). Cultivo de aguacate: Prácticas y recomendaciones de manejo integrado.',
      tipo: 'Artículo técnico PDF',
      link:
        'https://www.agrosavia.co/media/ia1pqoyi/digital_informe-asamblea-2024.pdf?utm_source=chatgpt.com',
    },
    {
      tema: 'Siembra en campo de aguacate',
      referencia:
        'Agrovisión. (2023, septiembre 19). ¿Cómo sembrar aguacate en terreno plano? [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Wlz9mD6Anco',
    },
  ],
  glosario: [
    {
      termino: 'Acuicultura',
      significado:
        'Práctica agrícola que influye en el entorno del cultivo, especialmente en zonas de vida próximas a cuerpos de agua; aunque no es directa al aguacate, puede afectar condiciones agroclimáticas.',
    },
    {
      termino: 'Altitud',
      significado:
        'Altura sobre el nivel del mar que define el piso térmico y determina la raza y variedad de aguacate más adecuada.',
    },
    {
      termino: 'BPA (Buenas Prácticas Agrícolas)',
      significado:
        'Conjunto de acciones orientadas a asegurar la sostenibilidad, inocuidad y trazabilidad en la producción agrícola.',
    },
    {
      termino: 'Cambium',
      significado:
        'Tejido vegetal clave para la unión exitosa entre patrón e injerto en la propagación asexual.',
    },
    {
      termino: 'Dicogamia protógina',
      significado:
        'Práctica para corregir la acidez del suelo mediante la aplicación de cal, mejorando la disponibilidad de nutrientes',
    },
    {
      termino: 'Fenología',
      significado:
        'Estudio de las fases de desarrollo del cultivo, desde brotación hasta madurez, útil para planificar prácticas agronómicas.',
    },
    {
      termino: 'Injertación',
      significado:
        'Técnica de propagación asexual que une un patrón con una variedad deseada para preservar características genéticas y mejorar producción.',
    },
    {
      termino: '<em>Lauraceae</em>',
      significado:
        'Familia botánica a la que pertenece el aguacate, caracterizada por especies leñosas con aceites esenciales.',
    },
    {
      termino: 'Micorrizas',
      significado:
        'Hongos benéficos que se asocian con las raíces, mejorando la absorción de nutrientes y la sanidad del cultivo.',
    },
    {
      termino: 'NTC 5209',
      significado:
        'Norma Técnica Colombiana que regula los requisitos de calidad, empaque y comercialización del aguacate en fresco.',
    },
    {
      termino: 'Persea americana',
      significado:
        'Nombre científico del aguacate, especie domesticada por su fruto comestible de alto valor nutricional.',
    },
    {
      termino: '<em>Phytophthora cinnamomi </em>',
      significado:
        'Método de reproducción mediante semillas que no garantiza fidelidad genética pero se usa para obtener patrones.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Registro sistemático que permite seguir el proceso productivo del aguacate desde la semilla hasta el campo, garantizando calidad y cumplimiento normativo.',
    },
  ],
  referencias: [
    {
      referencia:
        'AGROSAVIA. (2020). <em>Actualización tecnológica y buenas prácticas agrícolas en el cultivo de aguacate Hass. Corporación Colombiana de Investigación Agropecuaria.</em>',
      link:
        'https://repository.agrosavia.co/bitstream/handle/20.500.12324/37613/AGROSAVIA_AGUACATE_BPA.pdf',
    },
    {
      referencia:
        'AGROSAVIA. (2023). <em>Manejo integrado de plagas de importancia económica y cuarentenaria del cultivo de aguacate. Corporación Colombiana de Investigación Agropecuaria.</em>',
      link: '',
    },
    {
      referencia:
        'AGROSAVIA. (s. f.). <em>Ecofisiología del aguacate cv. Hass en el trópico andino colombiano. Corporación Colombiana de Investigación Agropecuaria.</em>',
      link:
        'https://repository.agrosavia.co/bitstream/handle/20.500.12324/37720/AGUACATE_PLAGAS_AGROSAVIA.pdf',
    },
    {
      referencia:
        'FAO. (2023). <em>Ripe for change: adapting avocado production to a changing climate. FAO.</em>',
      link:
        'https://openknowledge.fao.org/server/api/core/bitstreams/c1062d72-ae62-43b1-97ae-aab32c75cadf/content',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2021). <em>Paquete tecnológico del cultivo de aguacate Hass. SiOC – Sistema de Información de la Cadena.</em>',
      link:
        'https://sioc.minagricultura.gov.co/Aguacate/Normatividad/Paquete%20Tecnologico%20Aguacate.pdf',
    },
    {
      referencia:
        'CCOA & Asproagricol. (2023). <em>Cartilla técnica: Producción y comercialización del aguacate. Consejo Coordinador de Organizaciones Agrarias.</em>',
      link:
        'https://ccoa.org.co/wp-content/uploads/2023/02/Cartilla-aguacate-2.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Bobadilla Gutiérrez',
          cargo: 'Guionista línea de producción',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jair Coll',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
