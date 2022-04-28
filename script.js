// ASYNC/AWAIT
// https://624f3f05bdda77e9a9bc0f10.mockapi.io/users

// fetch("https://api.github.com/users")
//     .then(res => res.json())
//     .then(data => console.log(data))

// const getDataConTernario = async (id) => {
//     const response = await fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/${id ? id : ""}`)
//     const data = await response.json()
//     return data
// }

// const getDataConIf = async (id) => {
//     if (id) {
//         const response = await fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/${id}`)
//         const data = await response.json()
//         return data
//     } else {
//         const response = await fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/`)
//         const data = await response.json()
//         return data
//     }
// }

// getDataConTernario()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// getDataConTernario(5)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


// EJEMPLO CON API KEY
// const API_KEY = '36162ff97a309ab9150e20a5b14f5094'

// const getTrendingMovies = async () => {
//     const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
//     const movies = await response.json()
//     return movies
// }
// getTrendingMovies()