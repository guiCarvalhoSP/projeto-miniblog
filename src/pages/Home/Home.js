import styles from './Home.module.css';

import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {

  const [query, setQuery] = useState('');
  const [posts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.home}>
        <h1>Veja os nossos posts mais recentes</h1>
        <form onSubmit={handleSubmit} className={styles.search_form}>
          <input type="text" placeholder='Busque por tags...' onChange={(e) => setQuery(e.target.value)}/>
          <button className='btn btn-dark'>Pesquisar</button>
        </form>

        <div>
          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
              <p>Não foram encontrados posts, seja o primeiro a postar!</p>
              <Link className="btn" to="/posts/create">Criar primeiro post</Link>
            </div>
          )}
        </div>
    </div>
  )
}

export default Home