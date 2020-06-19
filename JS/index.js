var quotes = [
'Be yourself; everyone else is already taken - Oscar Wilde',
'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill',
'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe. ― Albert Einstein',
'So many books, so little time. ― Frank Zappa',
'A room without books is like a body without a soul. ― Marcus Tullius Cicero',
'Don\'t Let Yesterday Take Up Too Much Of Today.” – Will Rogers',
'El cafe con leche es como el cafe, pero con leche. - Unknown',
'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You. – Steve Jobs',
'You only live once, but if you do it right, once is enough.”― Mae West',
'Be the change that you wish to see in the world.” ― Mahatma Gandhi',
];
//Funcion genera un numero aleatorio que varia de 0 a la longitud de la matriz
function newQuote(){
    /*Llamamos a la funcion math.floor y math random toma un parametro 
    y redondea el numero habia abajo al entero mas cercano
    Ejm: Math.floor(5,7) devuelve 5*/
    var RandomNumber = Math.floor(Math.random() * (quotes.length));
    /*La funcion math.random generara un numero aleatorio entre 0 y 1*/

    document.getElementById('Display-Quote').innerHTML = quotes[RandomNumber];
}

