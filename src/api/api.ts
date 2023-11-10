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
