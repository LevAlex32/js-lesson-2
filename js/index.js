const NOF = +prompt("Сколько фильмов вы посмотрели?");
const PersonalMovies = {
      count: NOF,
      movies: {},
      actors: {},
};
for ( let i = 0; i < 1; i++) {
      const a = prompt ("Последний просмотренный фильм?");
            e = prompt ("Назовите актёров которые снимались в нём?");
            b = prompt ("Насколько оцените его?");     
           if ( a != '' && b != '' && e != '' && a != null && e != null && b != null && a.length <50) {
                 PersonalMovies.movies[a] = b;
                 console.log(PersonalMovies);
                 document.body.innerHTML += ' Фильм: ' + a + ' Актёры: ' + e + ' Оценка: ' + b + ' ';      
           }
           else {
                 console.log('error');
                 i--;
           }
     }   
     for ( let i = 0; i < 1; i++) {
      const c = prompt ("Последний просмотренный фильм?");
            d = prompt ("Назовите актёров которые снимались в нём?");
            f = prompt ("Насколько оцените его?");     
           if ( c != '' && f != '' && d != '' && c != null && d != null && f != null && c.length <50) {
                 PersonalMovies.movies[c] = f;
                 console.log(PersonalMovies);
                 document.body.innerHTML += ' Фильм: ' + c + ' Актёры: ' + d + ' Оценка: ' + f;      
           }
           else {
                 console.log('error');
                 i--;
           }
     }   
