//Variables
  //Selectores
    //Icons
    const arrowDownHTML = document.querySelector('#arrow-down-html');
    const arrowDownCSS = document.querySelector('#arrow-down-css');
    const arrowDownJS = document.querySelector('#arrow-down-js');
    const arrowDownGIT = document.querySelector('#arrow-down-git');
    const arrowDownEnglish = document.querySelector('#arrow-down-english');
    const slideRight = document.querySelector('#slide-right')
    const slideLeft = document.querySelector('#slide-left')
    //Text
    const htmlText = document.querySelector('#html-text');
    const cssText = document.querySelector('#css-text');
    const jsText = document.querySelector('#js-text');
    const gitText = document.querySelector('#git-text');
    const englishText = document.querySelector('#english-text');
    //Containers
    const slider = document.querySelector('#slider')
    // const contenedorProyectos = document.querySelector('#contenedor-proyectos')
    const planner = document.querySelector('#planner')
    const vet = document.querySelector('#vet')
    const restaurant = document.querySelector('#restaurant')
    const ecommerce = document.querySelector('#ecommerce')
    const name = document.querySelector('#name')
    //Buttons
    const jsFilterBtn = document.querySelector('#js-filter-btn');
    const responsiveFilterBtn = document.querySelector('#responsive-filter-btn');
    const apiFilterBtn = document.querySelector('#api-filter-btn')
    const reactFilterBtn = document.querySelector('#react-filter-btn')
    const nodeFilterBtn = document.querySelector('#node-filter-btn')
    const allFilterBtn = document.querySelector('#all-filter-btn')
    const viewAllBtn = document.querySelector('#viewAll-Btn')
    const ecommerceBtn = document.querySelector('#ecommerce-btn')
    const plannerBtn = document.querySelector('#planner-btn')
    const restaurantBtn = document.querySelector('#restaurant-btn')
    const vetBtn = document.querySelector('#vet-btn')
    //Animation spans
    const animationSpanBottomAll = document.querySelector('.animation-to-projects-bottom-all')
    const animationSpanLeftAll = document.querySelector('.animation-to-projects-left-all')
    const animationSpanTopAll = document.querySelector('.animation-to-projects-top-all')
    const animationSpanRightAll = document.querySelector('.animation-to-projects-right-all')
    
    const animationSpanBottomEcommerce = document.querySelector('.animation-to-projects-bottom-ecommerce')
    const animationSpanLeftEcommerce = document.querySelector('.animation-to-projects-left-ecommerce')
    
    const animationSpanBottomPlanner = document.querySelector('.animation-to-projects-bottom-planner')
    const animationSpanLeftPlanner = document.querySelector('.animation-to-projects-left-planner')

    const animationSpanBottomVet = document.querySelector('.animation-to-projects-bottom-vet')
    const animationSpanLeftVet = document.querySelector('.animation-to-projects-left-vet')

    const animationSpanBottomRestaurant = document.querySelector('.animation-to-projects-bottom-restaurant')
    const animationSpanLeftRestaurant = document.querySelector('.animation-to-projects-left-restaurant')

    const animationSpanArrowDrop = document.querySelector('#arrow-down-projects')

  //Objects and arrays
    let selectorsCertificados = []
    let proyectos = [
      {
        nombre: 'Calculadora de cuenta y propina para restaurante',
        img: './medios/ss_calculador_propina.png',
        descripcion: 'App que añade y elimina platillos a una cuenta y calcula la propina para entregar un total subtotal a cobrar',
        demoUrl: 'https://andrescpulveda.github.io/calculadora-propinas/',
        codeUrl: 'https://github.com/AndresCpulveda/calculadora-propinas',
        tipo: ['javascript']
      },
      {
        nombre: 'Web site de agencia de viajes con Nodejs y Express',
        img: './medios/ss_agencia_viajes.png',
        descripcion: 'Demo de un website de agencia de viajes hecho con Nodejs, conexion a base de datos SQL y deployment con Heroku',
        demoUrl: 'https://vast-island-54198.herokuapp.com/',
        codeUrl: 'https://github.com/AndresCpulveda/travel-agency-with-node',
        tipo: ['javascript', 'node']
      },
      {
        nombre: 'Cotizador de criptomonedas con API',
        img: './medios/ss_api_crypto.png',
        descripcion: 'Utiliza una API para mostrar al usuario el valor actual de distintas criptomonedas del mercado',
        demoUrl: 'https://andrescpulveda.github.io/cotizador-criptomonedas-api/',
        codeUrl: 'https://github.com/AndresCpulveda/cotizador-criptomonedas-api',
        tipo: ['api']
      },
      {
        nombre: 'App en React de administrador de tareas',
        img: './medios/ss_todo_react.png',
        descripcion: 'App de tareas que agrega, elimina y completa tareas, realizada en React',
        demoUrl: 'https://andrescpulveda.github.io/To-do-React-app/',
        codeUrl: 'https://github.com/AndresCpulveda/To-do-React-app/',
        tipo: ['react']
      },
      {
        nombre: 'CRM de clientes',
        img: './medios/ss_crm_indexedDb.png',
        descripcion: 'Simula un software de CRM que permite crear, leer, actualizar y borrar clientes de una base de datos usando la API de indexedDB',
        demoUrl: 'https://andrescpulveda.github.io/CRM-de-clientes/',
        codeUrl: 'https://github.com/AndresCpulveda/CRM-de-clientes',
        tipo: ['javascript']
      },
      {
        nombre: 'Formulario',
        img: './medios/ss_form_envio_email.png',
        descripcion: 'Formulario de envio de email con interfaz atractiva que cuenta con validación de email y alertas al usuario',
        demoUrl: 'https://andrescpulveda.github.io/validacion_formulario/',
        codeUrl: 'https://github.com/AndresCpulveda/validacion_formulario',
        tipo: ['javascript']
      },
      {
        nombre: 'E-commerce con productos y carrito abandonado',
        img: './medios/ss_carrito_local_storage.png',
        descripcion: 'Este proyecto simula un E-commerce donde se puede interactivamente agregar productos al carrito y este se salva en local storage y vuelve a ser mostrado al cliente asi se recargue la pagina',
        demoUrl: 'https://carrito-funcional-local-storage.netlify.app/',
        codeUrl: 'https://github.com/AndresCpulveda/e-commerce-carrito-abandonado',
        tipo: ['javascript']
      },
      {
        nombre: 'Administrador de citas',
        img: './medios/ss_agencia_viajes.png',
        descripcion: 'Simula la asignación y administración de una cita de veterinaria mediante un formulario',
        demoUrl: 'https://andrescpulveda.github.io/administrador_citas/',
        codeUrl: 'https://github.com/AndresCpulveda/administrador_citas',
        tipo: ['javascript']
      },
      {
        nombre: 'Diseño responsive de una web',
        img: './medios/ss_eddie_homepage.png',
        descripcion: 'Diseño de pagina para una agencia de desarrollo web, utilizando html y css puro, con multiples componentes y funcionalidades',
        demoUrl: 'https://edihomepage.netlify.app/',
        codeUrl: 'https://github.com/AndresCpulveda/devChallenge_ediHomePage',
        tipo: ['responsive']
      },
      {
        nombre: 'Landing page Exchange de Crypto',
        img: './medios/ss_landing_responsive.png',
        descripcion: 'Landing page estatica que pretende vender planes de suscripcion a un exchange de cryptomonedas, en este ejemplo de pagina se emplean multiples herramientas de css y html',
        demoUrl: 'https://andrescpulveda.github.io/landing-page-crypto-exchange/',
        codeUrl: 'https://github.com/AndresCpulveda/landing-page-crypto-exchange',
        tipo: ['responsive']
      },
      {
        nombre: 'Cotizador de seguros',
        img: './medios/ss_cotizador_seguros.png',
        descripcion: 'En este proyecto se simula una interfaz en la que el usuario puede ingresar la informacion de su vehiculo y segun esta se le cotizará un seguro con un precio y tipo de seguro específico para su vehículo',
        demoUrl: 'https://andrescpulveda.github.io/cotizador-de-seguros/',
        codeUrl: 'https://github.com/AndresCpulveda/cotizador-de-seguros',
        tipo: ['javascript']
      },
      {
        nombre: 'Pronostico de clima con API',
        img: './medios/ss_api_clima.png',
        descripcion: 'Este proyecto utiliza una API externa para obtener datos del clima de distintas ciudades y mostrarlas al usuario',
        demoUrl: 'https://andrescpulveda.github.io/api-clima/',
        codeUrl: 'https://github.com/AndresCpulveda/api-clima',
        tipo: ['api']
      },
      {
        nombre: 'Buscador de imagenes con API de Pixabay',
        img: './medios/ss_api_pixabay.png',
        descripcion: 'Utiliza la API de Pixabay para implementar un buscador de imágenes con paginador e interactividad',
        demoUrl: 'https://andrescpulveda.github.io/buscador-de-imagenes-api/',
        codeUrl: 'https://github.com/AndresCpulveda/buscador-de-imagenes-api',
        tipo: ['api']
      },
      {
        nombre: 'Portafolio',
        img: './medios/ss_portafolio.png',
        descripcion: 'Si, este proyecto es el mismo portafolio que estas viendo en este momento, te lo muestro para que abajo en el boton de "Código" puedas ver como esta desarrollado, es un diseño 100% responsive hecho con Tailwind y dinamico gracias a Javascript.',
        demoUrl: 'https://portfolio-andres-sepulveda.netlify.app/',
        codeUrl: 'https://github.com/AndresCpulveda/portfolio',
        tipo: ['javascript', 'responsive']
      },
    ]
    let certificados = [
      './medios/certificaciones/diploma-frontend-developer-practico.png', './medios/certificaciones/diploma_intro_react.png', './medios/certificaciones/basicoJS-1copy copy.png', './medios/certificaciones/diploma-html-practico.png', './medios/certificaciones/diploma-mobile-first.png', './medios/certificaciones/diplomaFundamentosIngenieriaSoftware-1copy copy.png', './medios/certificaciones/diplomaTerminal-1copy copy.png', './medios/certificaciones/responsiveDesignCertificationcopy copy.png'
    ]

//Event Listeners
  document.addEventListener('DOMContentLoaded', llenar())
  slideRight.addEventListener('click', moverSliderDerecha)
  slideLeft.addEventListener('click', moverSliderIzquierda)

  arrowDownHTML.addEventListener('click', () => {
    htmlText.classList.toggle('text-[0px]');
    htmlText.classList.toggle('text-xs')
    htmlText.classList.toggle('sm:text-base')
    arrowDownHTML.classList.toggle('rotate-180')
  });
  arrowDownCSS.addEventListener('click', () => {
    cssText.classList.toggle('text-[0px]')
    cssText.classList.toggle('text-xs')
    cssText.classList.toggle('sm:text-base')
    arrowDownCSS.classList.toggle('rotate-180')
  });
  arrowDownJS.addEventListener('click', () => {
    jsText.classList.toggle('text-[0px]')
    jsText.classList.toggle('text-xs')
    jsText.classList.toggle('sm:text-base')
    arrowDownJS.classList.toggle('rotate-180')
  });
  arrowDownGIT.addEventListener('click', () => {
    gitText.classList.toggle('text-[0px]')
    gitText.classList.toggle('text-xs')
    gitText.classList.toggle('sm:text-base')
    arrowDownGIT.classList.toggle('rotate-180')
  });
  arrowDownEnglish.addEventListener('click', () => {
    englishText.classList.toggle('text-[0px]')
    englishText.classList.toggle('text-xs')
    englishText.classList.toggle('sm:text-base')
    arrowDownEnglish.classList.toggle('rotate-180')
  });
  viewAllBtn.addEventListener('mouseover', () => {
    animationSpanLeftAll.classList.remove('end-animation')
    animationSpanLeftAll.classList.add('start-animation')
    animationSpanTopAll.classList.remove('end-animation')
    animationSpanTopAll.classList.add('start-animation')
  });
  viewAllBtn.addEventListener('mouseout', () => {
    animationSpanLeftAll.classList.remove('start-animation')
    animationSpanLeftAll.classList.add('end-animation')
    animationSpanTopAll.classList.remove('start-animation')
    animationSpanTopAll.classList.add('end-animation')
    setTimeout(() => {
      animationSpanArrowDrop.classList.remove('start-animation')
      animationSpanLeftAll.classList.remove('end-animation')
      animationSpanBottomAll.classList.remove('end-animation')
    }, 500);
  });
  viewAllBtn.addEventListener('click', () => {
    animationSpanTopAll.classList.add('start-animation')
    animationSpanRightAll.classList.add('start-animation')
    animationSpanArrowDrop.classList.add('start-animation')
    setTimeout(() => {
      animationSpanTopAll.classList.remove('start-animation')
      animationSpanRightAll.classList.remove('start-animation')
    }, 500);
  });

  ecommerceBtn.addEventListener('mouseover', () => {
    animationSpanBottomEcommerce.classList.remove('end-animation')
    animationSpanBottomEcommerce.classList.add('start-animation')
    animationSpanLeftEcommerce.classList.remove('end-animation')
    animationSpanLeftEcommerce.classList.add('start-animation')
  });
  ecommerceBtn.addEventListener('mouseout', () => {
    animationSpanBottomEcommerce.classList.remove('start-animation')
    animationSpanBottomEcommerce.classList.add('end-animation')
    animationSpanLeftEcommerce.classList.remove('start-animation')
    animationSpanLeftEcommerce.classList.add('end-animation')
    setTimeout(() => {
      animationSpanBottomEcommerce.classList.remove('end-animation')
      animationSpanLeftEcommerce.classList.remove('end-animation')
    }, 2000);
  });

  plannerBtn.addEventListener('mouseover', () => {
    animationSpanBottomPlanner.classList.remove('end-animation')
    animationSpanBottomPlanner.classList.add('start-animation')
    animationSpanLeftPlanner.classList.remove('end-animation')
    animationSpanLeftPlanner.classList.add('start-animation')
  });
  plannerBtn.addEventListener('mouseout', () => {
    animationSpanBottomPlanner.classList.remove('start-animation')
    animationSpanBottomPlanner.classList.add('end-animation')
    animationSpanLeftPlanner.classList.remove('start-animation')
    animationSpanLeftPlanner.classList.add('end-animation')
    setTimeout(() => {
      animationSpanBottomPlanner.classList.remove('end-animation')
      animationSpanLeftPlanner.classList.remove('end-animation')
    }, 2000);
  });

  vetBtn.addEventListener('mouseover', () => {
    animationSpanBottomVet.classList.remove('end-animation')
    animationSpanBottomVet.classList.add('start-animation')
    animationSpanLeftVet.classList.remove('end-animation')
    animationSpanLeftVet.classList.add('start-animation')
  });
  vetBtn.addEventListener('mouseout', () => {
    animationSpanBottomVet.classList.remove('start-animation')
    animationSpanBottomVet.classList.add('end-animation')
    animationSpanLeftVet.classList.remove('start-animation')
    animationSpanLeftVet.classList.add('end-animation')
    setTimeout(() => {
      animationSpanBottomVet.classList.remove('end-animation')
      animationSpanLeftVet.classList.remove('end-animation')
    }, 2000);
  });

  restaurantBtn.addEventListener('mouseover', () => {
    animationSpanBottomRestaurant.classList.remove('end-animation')
    animationSpanBottomRestaurant.classList.add('start-animation')
    animationSpanLeftRestaurant.classList.remove('end-animation')
    animationSpanLeftRestaurant.classList.add('start-animation')
  });
  restaurantBtn.addEventListener('mouseout', () => {
    animationSpanBottomRestaurant.classList.remove('start-animation')
    animationSpanBottomRestaurant.classList.add('end-animation')
    animationSpanLeftRestaurant.classList.remove('start-animation')
    animationSpanLeftRestaurant.classList.add('end-animation')
    setTimeout(() => {
      animationSpanBottomRestaurant.classList.remove('end-animation')
      animationSpanLeftRestaurant.classList.remove('end-animation')
    }, 2000);
  });

  function goHome() {
    name.classList.remove('card-out')
    planner.classList.add('card-out')
    vet.classList.add('card-out')
    restaurant.classList.add('card-out')
    ecommerce.classList.add('card-out')
  }

  plannerBtn.addEventListener('click', (e) => {
    e.preventDefault()
    name.classList.add('card-out')
    planner.classList.remove('card-out')
    planner.classList.add('card-in')
    vet.classList.add('card-out')
    restaurant.classList.add('card-out')
    ecommerce.classList.add('card-out')
  })
  vetBtn.addEventListener('click', (e) => {
    e.preventDefault()
    name.classList.add('card-out')
    planner.classList.add('card-out')
    vet.classList.remove('card-out')
    vet.classList.add('card-in')
    restaurant.classList.add('card-out')
    ecommerce.classList.add('card-out')
  })
  restaurantBtn.addEventListener('click', (e) => {
    e.preventDefault()
    name.classList.add('card-out')
    planner.classList.add('card-out')
    vet.classList.add('card-out')
    restaurant.classList.remove('card-out')
    restaurant.classList.add('card-in')
    ecommerce.classList.add('card-out')
  })
  ecommerceBtn.addEventListener('click', (e) => {
    e.preventDefault()
    name.classList.add('card-out')
    planner.classList.add('card-out')
    vet.classList.add('card-out')
    restaurant.classList.add('card-out')
    ecommerce.classList.remove('card-out')
    ecommerce.classList.add('card-in')
  })

  
  jsFilterBtn.addEventListener('click', filtrarProyectos)
  responsiveFilterBtn.addEventListener('click', filtrarProyectos)
  apiFilterBtn.addEventListener('click', filtrarProyectos)
  reactFilterBtn.addEventListener('click', filtrarProyectos)
  nodeFilterBtn.addEventListener('click', filtrarProyectos)
  allFilterBtn.addEventListener('click', filtrarProyectos)

//Funciones
  function moverSliderDerecha(e) {
    e.preventDefault();
    const mostrando = selectorsCertificados.findIndex(cur => {
      return cur.classList.contains('max-w-full');
    })
    if(mostrando < selectorsCertificados.length - 1) {
      selectorsCertificados[mostrando].classList.remove('max-w-full')
      selectorsCertificados[mostrando + 1].classList.add('max-w-full')
    }else{
      selectorsCertificados[0].classList.add('max-w-full');
      selectorsCertificados[selectorsCertificados.length - 1].classList.remove('max-w-full')
    }
  }
  function moverSliderIzquierda(e) {
    e.preventDefault();
    const mostrando = selectorsCertificados.findIndex(cur => {
      return cur.classList.contains('max-w-full');
    })
    if(mostrando > 0) {
      selectorsCertificados[mostrando].classList.remove('max-w-full')
      selectorsCertificados[mostrando - 1].classList.add('max-w-full')
    }else{
      selectorsCertificados[0].classList.remove('max-w-full');
      selectorsCertificados[selectorsCertificados.length - 1].classList.add('max-w-full')
    }
  }

  function llenar() {
    llenarSlider(certificados);
    llenarProyectos(proyectos)
  }

  function llenarSlider(certificados) {
    certificados.forEach((cur, index) => {
      const slideContainer = document.createElement('div')
      const slideImg = document.createElement('img')
      slideImg.classList.add('max-w-[0px]', 'transition-all', 'duration-700')
      slideImg.setAttribute('id', `certificado${index + 1}`)
      slideImg.setAttribute('src', cur)
      selectorsCertificados = [...selectorsCertificados, slideImg]
      slideContainer.append(slideImg);
      slider.append(slideContainer);
    });
    const certificado1 = document.querySelector('#certificado1');
    certificado1.classList.add('max-w-full')
  }

  function filtrarProyectos(e) {
    e.preventDefault()
    const tipo = e.target.getAttribute('tipo')
    if(tipo == 'all') {
      llenarProyectos(proyectos);
    }else{
      const newList = proyectos.filter(cur => {
        if(cur.tipo.includes(tipo)) {
          return cur;
        }
      })
      console.log(newList);
      llenarProyectos(newList)
    }
  }

  function llenarProyectos(list) {
    limpiarHTML();
    console.log(list);
    list.forEach(cur => {
      const demoBtn = document.createElement('a');
      demoBtn.classList.add('col-span-1', 'row-span-1', 'border-2', 'border-blue-600', 'mx-5', 'text-blue-600', 'rounded-lg', 'hover:bg-blue-600', 'hover:text-white', 'transition-all', 'cursor-pointer', 'text-sm', 'sm:text-base', 'md:text-lg');
      demoBtn.setAttribute('href', cur.demoUrl);
      demoBtn.setAttribute('target', '_blank');
      demoBtn.textContent = 'Demo'
      const codeBtn = document.createElement('a');
      codeBtn.classList.add('col-span-1', 'row-span-1', 'border-2', 'border-blue-600', 'mx-5', 'text-blue-600', 'rounded-lg', 'hover:bg-blue-600', 'hover:text-white', 'transition-all', 'cursor-pointer', 'text-sm', 'sm:text-base', 'md:text-lg');
      codeBtn.setAttribute('href', cur.codeUrl);
      codeBtn.setAttribute('target', '_blank');
      codeBtn.textContent = 'Código'

      const contenedorProyecto = document.createElement('div');
      contenedorProyecto.classList.add('grid', 'grid-cols-2', 'grid-rows-5', 'max-w-sm', 'items-center', 'rounded-lg', 'p-3', 'bg-zinc-900', 'shadow-inner', 'shadow-zinc-700');
      const proyectoImg = document.createElement('img');
      proyectoImg.classList.add('col-span-2', 'row-span-2', 'rounded-md', 'cursor-pointer')
      proyectoImg.setAttribute('src', cur.img)
      const titulo = document.createElement('h3');
      titulo.classList.add('col-span-2', 'row-span-1', 'text-left');
      titulo.textContent = cur.nombre;
      const descripcion = document.createElement('p');
      descripcion.classList.add('col-span-2', 'row-span-1', 'text-left', 'text-sm', 'sm:text-base', 'md:text-lg');
      descripcion.textContent = cur.descripcion
      contenedorProyecto.append(proyectoImg, titulo, descripcion, demoBtn, codeBtn)
      contenedorProyectos.append(contenedorProyecto);
    })
  }

  function limpiarHTML() {
    console.log('limpiando');
    while(contenedorProyectos.firstChild) {
      console.log('true');
      contenedorProyectos.removeChild(contenedorProyectos.firstChild)
    }
  }