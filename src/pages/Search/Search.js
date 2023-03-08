import styles from './Search.module.css';

import { useFetchDocuments } from '../../hooks/useFetchDocument';
import { useQuery } from '../../hooks/useQuery';
import PostDetail from '../../components/PostDetail';
import { Link } from 'react-router-dom';

const Search = () => {

  const query = useQuery();
  const search = query.get('q');

  const {documents: posts} = useFetchDocuments('posts', search);
  return (
    <div className={styles.search_container}>
      <h1>Busca</h1>
      <div>

        {posts && posts.length === 0 && (
          <div className={styles.nopost}>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className='btn btn-dark'>Voltar</Link>
          </div>
        )}
        {posts && posts.map((post) => (
          <PostDetail key={post.id} post={post}></PostDetail>
        ))}
      </div>
    </div>
  )
}

export default Search