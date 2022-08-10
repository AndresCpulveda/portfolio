//Variables
  //Selectores
    //Icons
    const arrowDownHTML = document.querySelector('#arrow-down-html');
    const arrowDownCSS = document.querySelector('#arrow-down-css');
    const arrowDownJS = document.querySelector('#arrow-down-js');
    const arrowDownGIT = document.querySelector('#arrow-down-git');
    const slideRight = document.querySelector('#slide-right')
    const slideLeft = document.querySelector('#slide-left')
    //Text
    const htmlText = document.querySelector('#html-text');
    const cssText = document.querySelector('#css-text');
    const jsText = document.querySelector('#js-text');
    const gitText = document.querySelector('#git-text');
    //Containers
    const slider = document.querySelector('#slider')
    const contenedorProyectos = document.querySelector('#contenedor-proyectos')
    //Buttons
    const jsFilterBtn = document.querySelector('#js-filter-btn');
    const responsiveFilterBtn = document.querySelector('#responsive-filter-btn');
    const apiFilterBtn = document.querySelector('#api-filter-btn')
    const allFilterBtn = document.querySelector('#all-filter-btn')
  //Objects and arrays
    let selectorsCertificados = []
    let proyectos = [
      {
        nombre: 'Formulario',
        img: './medios/ss_form_envio_email.png',
        descripcion: 'Formulario de envio de email con interfaz atractiva que cuenta con validación de email y alertas al usuario',
        demoUrl: '',
        codeUrl: '',
        tipo: 'javascript'
      },
      {
        nombre: 'Administrador de citas',
        img: './medios/ss_administrador_citas.png',
        descripcion: 'Simula la asignación y administración de una cita de veterinaria mediante un formulario y mantiene la información del cliente almacenada mediante indexedDB',
        demoUrl: '',
        codeUrl: '',
        tipo: 'javascript'
      },
      {
        nombre: 'CRM de clientes',
        img: './medios/ss_crm_indexedDb.png',
        descripcion: 'Simula un software de CRM que permite crear, leer, actualizar y borrar clientes de una base de datos usando la api de indexedDB',
        demoUrl: '',
        codeUrl: '',
        tipo: 'javascript'
      },
      {
        nombre: 'Diseño responsive de una web',
        img: './medios/ss_eddie_homepage.png',
        descripcion: 'Diseño de pagina para una agencia de desarrollo web, utilizando html y css puro, con multiples componentes y funcionalidades',
        demoUrl: '',
        codeUrl: '',
        tipo: 'responsive'
      },
      {
        nombre: 'Landing page Exchange de Crypto',
        img: './medios/ss_landing_responsive.png',
        descripcion: 'Landing page estatica que pretende vender planes de suscripcion a un exchange de cryptomonedas, en este ejemplo de pagina se emplean multiples herramientas de css y html',
        demoUrl: '',
        codeUrl: '',
        tipo: 'responsive'
      },
      {
        nombre: 'E-commerce con productos y carrito abandonado',
        img: './medios/ss_carrito_local_storage.png',
        descripcion: 'Este proyecto simula un E-commerce donde se puede interactivamente agregar productos al carrito y este se salva en local storage y vuelve a ser mostrado al cliente asi se recargue la pagina',
        demoUrl: '',
        codeUrl: '',
        tipo: 'javascript'
      },
      {
        nombre: 'Cotizador de seguros',
        img: './medios/ss_cotizador_seguros.png',
        descripcion: 'En este proyecto se simula una interfaz en la que el usuario puede ingresar la informacion de su vehiculo y segun esta se le cotizara un seguro con un precio y tipo de seguro especifico para su vehiculo',
        demoUrl: '',
        codeUrl: '',
        tipo: 'javascript'
      },
    ]
    let certificados = [
      './medios/basicoJS-1copy copy.png', './medios/diplomaFundamentosIngenieriaSoftware-1copy copy.png', './medios/diplomaTerminal-1copy copy.png', './medios/responsiveDesignCertificationcopy copy.png'
    ]

//Event Listeners
  document.addEventListener('DOMContentLoaded', llenar())
  slideRight.addEventListener('click', moverSliderDerecha)
  slideLeft.addEventListener('click', moverSliderIzquierda)

  arrowDownHTML.addEventListener('click', () => {
    htmlText.classList.toggle('text-[0px]');
    arrowDownHTML.classList.toggle('rotate-180')
  });
  arrowDownCSS.addEventListener('click', () => {
    cssText.classList.toggle('text-[0px]')
    arrowDownCSS.classList.toggle('rotate-180')
  });
  arrowDownJS.addEventListener('click', () => {
    jsText.classList.toggle('text-[0px]')
    arrowDownJS.classList.toggle('rotate-180')
  });
  arrowDownGIT.addEventListener('click', () => {
    gitText.classList.toggle('text-[0px]')
    arrowDownGIT.classList.toggle('rotate-180')
  });

  jsFilterBtn.addEventListener('click', filtrarProyectos)
  responsiveFilterBtn.addEventListener('click', filtrarProyectos)
  apiFilterBtn.addEventListener('click', filtrarProyectos)
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
        if(cur.tipo == tipo) {
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
      demoBtn.classList.add('col-span-1', 'row-span-1', 'border-2', 'border-blue-600', 'mx-5', 'text-blue-600', 'rounded-lg', 'hover:bg-blue-600', 'hover:text-white', 'transition-all', 'cursor-pointer');
      demoBtn.setAttribute('src', '');
      demoBtn.textContent = 'Demo'
      const codeBtn = document.createElement('a');
      codeBtn.classList.add('col-span-1', 'row-span-1', 'border-2', 'border-blue-600', 'mx-5', 'text-blue-600', 'rounded-lg', 'hover:bg-blue-600', 'hover:text-white', 'transition-all', 'cursor-pointer');
      codeBtn.setAttribute('src', '');
      codeBtn.textContent = 'Code'

      const contenedorProyecto = document.createElement('div');
      contenedorProyecto.classList.add('grid', 'grid-cols-2', 'grid-rows-5', 'gap-3', 'max-w-sm', 'items-center', 'rounded-lg', 'p-3', 'bg-zinc-900', 'shadow-inner', 'shadow-zinc-700');
      const proyectoImg = document.createElement('img');
      proyectoImg.classList.add('col-span-2', 'row-span-2', 'rounded-md', 'cursor-pointer')
      proyectoImg.setAttribute('src', cur.img)
      const titulo = document.createElement('h3');
      titulo.classList.add('col-span-2', 'row-span-1', 'justify-self-start');
      titulo.textContent = cur.nombre;
      const descripcion = document.createElement('p');
      descripcion.classList.add('col-span-2', 'row-span-1', 'text-left');
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