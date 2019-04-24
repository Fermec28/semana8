

add2DOM = function(text){    

  $('ul#makers').append(`<li> ${this}</li>`)

}

$.support.cors = true;

$('form#maker-form').submit(function(e){
   
    e.preventDefault();
    //let $name= $('form#maker-form  input#firstname')
    let firstName = $('form#maker-form  input#firstname').val()
    let lastName = $('form#maker-form  input#lastname').val()
    let age = $('form#maker-form  input#age').val()
    let lenguage = $('form#maker-form  input#language').val()
    $('form#maker-form')[0].reset();
   

    $.ajax({
        url: "https://apijade.herokuapp.com/api/v1/products/",
        method: "POST",
        crossDomain: true,         
        data: JSON.stringify({ name: "fer2", price: 18 }),
        contentType: "application/json",
        success: function(result){
            add2DOM(result)
        }       
    
    });

})

