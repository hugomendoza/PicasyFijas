//Genera array con numero aleatorio

var random = [];
while(random.length < 4){
    var randomnumber = parseInt( Math.random() * 10);
    if(random.indexOf(randomnumber) > -1) continue;
    random[random.length] = randomnumber;
}

console.log(random.join('')); //Genera el arreglo con el número aleatorio

$( document ).ready(function() {
    $('#formulario').on('submit', function (e){ //Activa el juego

        var user = $('#input').val();
        var newArray = user.split('').map(Number);

        function warning (user) {
            if(user.length < 4) {
                $('span').addClass('warning');
                $('#input').addClass('warning');
            }
            else if(user.length > 4) {
                $('span').addClass('warning');
                $('#input').addClass('warning');
            }

            else if (/^(.)\1*$/.test(user)){ //Compara si los 4 digitos del input son identicos
                $('span').addClass('warning');
                $('#input').addClass('warning');
            }

            else {
                $('span').removeClass('warning');
                $('#input').removeClass('warning');
                match(random, newArray); // Llama la función para hacer comparación entre
                $('#input').val('');     //el input y el número aleatorio
            }
        }

        warning(user);  //Activa la advertencia

        function match (random, newArray) {
            var picas = [];
            var fijas = [];

            for (var i = 0; i < random.length; i++ ) {
                //Compara si el número aleatorio y el input son identicos en posición y valor
                if(newArray.indexOf(random[i]) >= 0 && newArray.indexOf(random[i]) == i )fijas.push(random[i])
                //Compara si el número aleatorio y el input son identicos en valor
                else if(newArray.indexOf(random[i]) >= 0)picas.push(random[i])
            }

            console.log(picas);
            console.log(fijas);

            $('.table-result tbody').append('<tr><td>' +  user + '</td></tr>');
            $('tr:last').append('<td>' +  picas.length + '</td>');
            $('tr:last').append('<td>' +  fijas.length + '</td>');

            if (fijas.length == 4) {
                $('.modal').fadeIn();
            }
        }
        e.preventDefault();

        $('.close').click(function () {
            location.reload(); // Reinicia el juego
        });

    });

});

