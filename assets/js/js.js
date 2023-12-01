
let sumaTotal =0;
let domicilio =0;
let valorPizza=0;
let valorGaseosa=0;
let valorPostre=0;






let pizzas= [{

descripcion: "Peperoni",
imagen: "/assets/media/peperoni.jpg",
precio: 25000



},

{

    
descripcion: "Napolitana",
imagen: "/assets/media/napolitana.jpg",
precio: 35000

},
{

    
    descripcion: "Super Queso",
    imagen: "/assets/media/superQueso.jpg",
    precio: 32000
    
    },
    {

    
        descripcion: "Vegetariana",
        imagen: "/assets/media/vegetariana.jpg",
        precio: 25000
        
        },
        {

    
            descripcion: "Hawaiana",
            imagen: "/assets/media/hawaiana.jpg",
            precio: 35000
            
            }


]

let refrescos= [{

    descripcion: "Jugo Hit",
    imagen: "/assets/media/jugohit.jpg",
    precio: 25000
    
    
    
    },
    
    {
    
        
    descripcion: "Limonada",
    imagen: "/assets/media/limonada.jpg",
    precio: 35000
    
    },
    {
    
        
        descripcion: "Gaseosa",
        imagen: "/assets/media/gaseosa.jpg",
        precio: 32000
        
        },
        {
    
        
            descripcion: "Jugo natural",
            imagen: "/assets/media/jugonatural.webp",
            precio: 25000
            
            }
    
    
    ]

    let postres= [{

        descripcion: "Tres leches",
        imagen: "/assets/media/tresleches.jpg",
        precio: 25000
        
        
        
        },
        
        {
        
            
        descripcion: "Postre de Mango",
        imagen: "/assets/media/mango.jpeg",
        precio: 35000
        
        },
        {
        
            
            descripcion: "Postre de maracuya",
            imagen: "/assets/media/postreMaracuya.webp",
            precio: 32000
            
            },
            {
        
            
                descripcion: "Postre de Fresas",
                imagen: "/assets/media/postrefresa.webp",
                precio: 25000
                
                },
                {
        
            
                    descripcion: "Postre de Mora",
                    imagen: "/assets/media/postreMora.jpg",
                    precio: 35000
                    
                    }
        
        
        ]
        let contadorPizza =0;
        let contadorPostre =0;
        let comtadorRefresco =0;
        let sumaPizza=0;
        let sumaPostre =0;
        let sumaRefresco=0;
        let descripcionPizza="";
        let descripcionPostre = "";
        let descripcionRefresco="";
let contenido = document.getElementById("contenido");
let Pizza ="Pizza"
let Postre ="Postre"
let Refresco = "Refresco"
let contenidoJugos = document.getElementById("contenidoJugos");

let contenidoPostres = document.getElementById("contenidoPostres");
let funcEstrcuturar = () =>{
  
pizzas.map((element)=>{

let card2 = `<div class="col d-flex justify-content-center">
<div class="card h-100">
  <img src="${element.imagen}" class="card-img-top imagen" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.descripcion}</h5>
    <p class="card-text">$ ${element.precio}</p>
    <button id="btnAgregar" onclick="funCalcular(${element.precio},${Pizza})" class="btn btn-success" value="${element.descripcion}" data-otro-valor="${element.descripcion}">Agregar</button>
  </div>
</div>
</div>`

contenido.innerHTML += card2

})
refrescos.map((element)=>{

    let card2 = `<div class="col d-flex justify-content-center">
    <div class="card h-100">
      <img src="${element.imagen}" class="card-img-top imagen" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.descripcion}</h5>
        <p class="card-text">$ ${element.precio}</p>
        <button id="btnAgregar" class="btn btn-success" onclick="funCalcular(${element.precio},${Refresco})" >Agregar</button>
      </div>
    </div>
    </div>`
    
    contenidoJugos.innerHTML += card2
    
    })

    postres.map((element)=>{

        let card2 = `<div class="col d-flex justify-content-center">
        <div class="card h-100">
          <img src="${element.imagen}" class="card-img-top imagen" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.descripcion}</h5>
            <p class="card-text">$ ${element.precio}</p>
            <button id="btnAgregar" class="btn btn-success" onclick="funCalcular(${element.precio},${Postre})" value="${element.precio}" data-otro-valor="${element.descripcion}">Agregar</button>
          </div>
        </div>
        </div>`
        
        contenidoPostres.innerHTML += card2
        
        })
}
funcEstrcuturar();



let btnAgregar = document.getElementById("btnAgregar");
let descripcionCompra ="";

let funCalcular = (valorPrecio,descripcion2)=>{


  Swal.fire({
    title: 'Ingrese la cantidad del producto que desea',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
    showLoaderOnConfirm: true,
    preConfirm: (valor) => {
      // Aquí puedes hacer algo con el valor ingresado
      console.log(`Ingresaste: ${valor}`);
      // Por ejemplo, puedes devolver una promesa resuelta con el valor
      return Promise.resolve(valor);
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      // Si se confirmó, puedes usar el valor ingresado
      

      if(descripcion2=="Pizza" && contadorPizza==0){
       
        sumaPizza = (sumaPizza + parseInt(valorPrecio)) * parseInt(result.value)
        descripcionPizza = descripcion2 +" "+ `${sumaPizza}`+" ";
        sumaTotal += parseInt(result.value) * parseInt(valorPrecio)
        contadorPizza = 1;
      }else if(descripcion2== "Pizza"){
        sumaPizza = (sumaPizza + parseInt(valorPrecio)) * parseInt(result.value)
        descripcionPizza = descripcion2 +" "+ `${sumaPizza}`+" ";
        sumaTotal += parseInt(result.value) * parseInt(valorPrecio)
      
      }

      if(descripcion2=="Postre" && contadorPostre==0){
       
        sumaPostre = (sumaPostre + parseInt(valorPrecio)) * parseInt(result.value)
        descripcionPostre = descripcion2 +" "+ `${sumaPostre}`+" ";
        sumaTotal += parseInt(result.value) * parseInt(valorPrecio)
        contadorPostre = 1;
      }else if(descripcion2== "Postre"){
        sumaPostre = sumaPostre * parseInt(result.value)
        descripcionPostre = descripcion2 +" "+ `${sumaPostre}`+" ";
        sumaTotal += parseInt(result.value) * parseInt(valorPrecio)
      
      }

      if(descripcion2=="Refresco" && comtadorRefresco==0){
     
        sumaRefresco = (sumaRefresco + parseInt(valorPrecio)) * parseInt(result.value)
        descripcionRefresco = descripcion2 +" "+ `${sumaRefresco}`+" ";
        sumaTotal += parseInt(result.value) * parseInt(valorPrecio)
        comtadorRefresco = 1;
      }else if(descripcion2== "Refresco"){
        sumaRefresco = (sumaRefresco + parseInt(valorPrecio))* parseInt(result.value)
        descripcionRefresco = descripcion2 +" "+ `${sumaRefresco}`+" ";
        sumaTotal += parseInt(result.value) * parseInt(valorPrecio)
      
      }
    
      console.log(descripcionPizza + descripcionRefresco)
      console.log(btnAgregar.value)
      console.log(sumaTotal)
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto Agregado",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      if(descripcion2=="Pizza" && contadorPizza==0){
       
        sumaPizza = (sumaPizza + parseInt(valorPrecio)) * parseInt(result.value)
        descripcionPizza = descripcion2 +" "+ `${sumaPizza}`+" ";
        sumaTotal += parseInt(result.value) * parseInt(valorPrecio)
        contadorPizza = 1;
      }else if(descripcion2== "Pizza"){
        sumaPizza = (sumaPizza + parseInt(valorPrecio)) * parseInt(result.value)
        descripcionPizza = descripcion2 +" "+ `${sumaPizza}`+" ";
        sumaTotal += parseInt(result.value) * parseInt(valorPrecio)
      
      }

      if(descripcion2=="Postre" && contadorPostre==0){
      
        sumaPostre = (sumaPostre + parseInt(valorPrecio)) * parseInt(result.value)
        descripcionPostre = descripcion2 +" "+ `${sumaPostre}`+" ";
        sumaTotal += parseInt(result.value) * parseInt(valorPrecio)
        contadorPostre = 1;
      }else if(descripcion2== "Postre"){
        sumaPostre = sumaPostre * parseInt(result.value)
        descripcionPostre = descripcion2 +" "+ `${sumaPostre}`+" ";
        sumaTotal += parseInt(result.value) * parseInt(valorPrecio)
      
      }

      if(descripcion2=="Refresco" && comtadorRefresco==0){
       
        sumaRefresco = (sumaRefresco + parseInt(valorPrecio)) * parseInt(result.value)
        descripcionRefresco = descripcion2 +" "+ `${sumaRefresco}`+" ";
        sumaTotal += parseInt(result.value) * parseInt(valorPrecio)
        comtadorRefresco = 1;
      }else if(descripcion2== "Refresco"){
        sumaRefresco = (sumaRefresco + parseInt(valorPrecio))* parseInt(result.value)
        descripcionRefresco = descripcion2 +" "+ `${sumaRefresco}`+" ";
        sumaTotal += parseInt(result.value) * parseInt(valorPrecio)
      
      }
     
      console.log('Operación cancelada');
    }
  });



}
let db = window.localStorage;
let btnPagar = document.getElementById("btnPagar");

let funPagar = () =>{
  
  Swal.fire({
    title: "Desea enviarlo a domicilio?",
    text: "!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Domicilio asignado",
        text: "...",
        icon: "success"
      });
      domicilio = 1500
      sumaTotal+=domicilio
      
  Swal.fire({
    title: `Sus productos son:<br> ${descripcionPizza} <br> ${descripcionPostre} <br> ${descripcionRefresco} <br> el precio total es ${sumaTotal}`,
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    }
  });

  let objeto ={

    descripcion: descripcionPizza +" "+ descripcionPostre + " "+descripcionRefresco ,
    precio: sumaTotal
    
    
    
    
  
    }
    
  let random = Math.floor(Math.random(1,100) * 100)
db.setItem(random,JSON.stringify(objeto))
descripcionPizza =""
descripcionPostre=""
descripcionRefresco=""
sumaPizza=0
sumaPostre=0
sumaRefresco=0
    }else{

      Swal.fire({
        title: `Sus productos son:<br> ${descripcionPizza} <br> ${descripcionPostre} <br> ${descripcionRefresco} <br> el precio total es ${sumaTotal}`,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      descripcionPizza =""
      descripcionPostre=""
      descripcionRefresco=""
      sumaPizza=0
      sumaPostre=0
      sumaRefresco=0
      sumaTotal =0;
    }
  });
 









contadorPizza=0
contadorPostre=0
comtadorRefresco=0




}





btnPagar.addEventListener("click",funPagar);
btnAgregar.addEventListener("click",funCalcular)
