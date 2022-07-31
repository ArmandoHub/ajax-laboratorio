/*

$(function(){
    $('#selector-universal').click(function(){
        $('*').addClass('selector');
    });

    $('#selector-id').click(function(){
        $('#email').addClass('selector');
    });

    $('#selector-clase').click(function(){
        $('.campo').addClass('selector');
    });

    $('#selector-etiqueta').click(function(){
        $('div').addClass('selector');
    });

    $('#selector-parrafo').click(function(){
        $('p').addClass('selector');
    });

    $('#selector-input').click(function(){
        $('input').addClass('selector');
    });

});

*/

var btnPeople = document.getElementById('btnPeoples');
btnPeople.addEventListener('click',function(){
    $.ajax({
        url: 'https://swapi.dev/api/people',
        method:'GET',
        success: function(data){
            var peopleHTML = document.getElementById('peoples');
            var output = '';
            $.each(data.results, function(index,value){  //<-- Con each vamos a recorrer cada elemento de la "data"
                output += `
                <div class="card" style="width: 18rem;">
                    <img src="./assets/images/st4.jpg" class="card-img-top" alt="imagen">
                    <div class="card-body">
                        <h5 class="card-title">${value.name}</h5>
                        <p class="card-text">${value.name}</p>
                        <p class="card-text">${value.height}</p>
                        <p class="card-text">${value.gender}</p>
                        <a href="#" class="btn btn-primary">${value.birth_year}</a>
                    </div>
                </div>

                `;     //<-- los `` nos permite interpolar data dentro del string 
            });

            peopleHTML.innerHTML = output;
            
        },
            error: function(e){
                alert("hubo un error");
                console.log(e);
            }
    });
});