let data = await fetch("http://localhost:3000/api/posts")
let posts = await data.json()

export default posts;