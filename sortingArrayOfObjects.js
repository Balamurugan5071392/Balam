//movies

const movie = [
    { title: 'a', year: 2016, rating: 4.1},
    { title: 'b', year: 2015, rating: 3.2},
    { title: 'c', year: 2016, rating: 4.5},
    { title: 'd', year: 2016, rating: 5.5},
    { title: 'e', year: 2018, rating: 5.5}
]

const l = movie.filter(n => n.year == 2016 && n.rating >=4)
   .sort((a,b) => a.rating - b.rating)
   .reverse()
   .map(m => m.title)

console.log(l)
