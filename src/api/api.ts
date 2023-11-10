<<<<<<< HEAD
import ky from 'ky';
import type { Post } from '../payload-types';

type Props = Post;

const post = ky.create({
  prefixUrl: 'http://localhost:3000/api/',
});

const fetchData = async () => {
  try {
    const posts: Post[] = await ky.get('posts').json();
    return posts;
  } catch (err) {
    console.log(err.message);
  }
};

export default fetchData;
=======
let data = await fetch("http://localhost:3000/api/posts")
let posts = await data.json()

export default posts;
>>>>>>> a05444266ebf3a4e0cd7c50eff1680a0d9b53b75
