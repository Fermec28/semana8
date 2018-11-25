/**
 * Refactor 
 * El reto consiste en crear una pagina dinamica que me permita crear
 * un maker desde la consola del navegador, de forma que al introducir
 * new Maker(nombre,apellido,edad,lenguaje) se agrege a la pagina
 * 
 * crear una funcion que me permite resaltar los maker con el lenguaje
 * igual
 * 
 * crear una funcion que como resultado me muestre solamente los makers con 
 * el mismo lenguaje al paramentro pasado 
 * 
 * 
 */


Maker= function(firstName,lastName,age,language){
    this.firstName= firstName
    this.lastName= lastName
    this.age = age
    this.language = language
    this.id = ++ Maker._numMakers
    /*  ¿Por que ejecutamos add2DOM?
       Queremos que al crear el usuario se agregue al DOM tan pronto
       lo creamos, asi que es tarea del constructor ejecutar la funcion
    */
    this.add2DOM()
}

Maker._numMakers =0 

Maker.prototype.add2DOM = function(){
    /* 
        $('ul#makers') => seleccionamos dentro del dom todo ul con id= makers
        .append() => nos permite agregar contenido al DOM
        
    */

  $('ul#makers').append(`<li id= ${this.id} class="list-group-item">
        Hola soy ${this.firstName} ${this.lastName}, tengo ${this.age} años y mi
        lenguaje de programacion favorito es ${this.language}    
     </li>`)

}


Maker.prototype.show = function(){
    $(`#${this.id}`).show()
}

Maker.prototype.emphasize= function(){
    $(`#${this.id}`).addClass('resaltar')
}


Class = function(){
    this.makers=[]
}

Class.prototype.addMaker= function(firstName,lastName,age,language){
    this.makers.push(new Maker(firstName,lastName,age,language))
}

Class.prototype.searchByLanguge= function(language){    
    $('li').hide()
    this.makers.forEach(function(element){
        element.language === language ? element.show(): false
    })
}

Class.prototype.showAll= function(){
    $('li').show()
}


jade= new Class()
/*jade.addMaker('angie','vanegas',29,'ruby')
jade.addMaker('leo','omaña',26,'js')
jade.addMaker('ferney','medina',23,'js')
jade.addMaker('josha','prpich',28,'ruby')*/

$('button#add-maker').click(function(e){
    jade.addMaker('ferney','medina',23,'js')   

})

$('div.blue').click(function(){
    $('body').removeClass()
    $('body').addClass('blue')
})
$('div.red').click(function(){
    $('body').removeClass()
    $('body').addClass('red')
})
$('div.green').click(function(){
    $('body').removeClass()
    $('body').addClass('green')
})