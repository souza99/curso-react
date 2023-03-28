import { Component } from 'react';
import { Button } from '../../components/Button';
import { Posts } from '../../components/Posts';
import { TextInput } from '../../components/TextInput';
import { loadPosts } from '../../utils/load-posts';

import './styles.css';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: '',
  }

  timeoutUpdate = null;

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {

    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();

    this.setState({
      //Ultimo index passado no splice do array não é incluido.
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    });
  }

  loadMorePosts = () => {

    const { posts, postsPerPage, page, allPosts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ searchValue: value });

  }

  render() {
    const { posts, page, allPosts, postsPerPage, searchValue } = this.state;

    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPost = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
      :
      posts;

    return (

      <section className='container'>

        <div className="search-container">

          {/* QUANDO USANDOMOS "!!" O VALOR É CONVERTIDO PARA BOOLEAN,
        NO CASO DE "!!" DUAS ESCLAMAÇÕES, ESTAMOS DIZENDO, SE FOR TRUE, VERDADEIRO  */}
          {!!searchValue && (
            <h1>Search value </h1>
          )}

          <TextInput searchValue={searchValue} handleChange={this.handleChange} />

        </div>

        {!!filteredPost.length > 0 && (
          <Posts posts={filteredPost} />
        )
        }

        {filteredPost.length === 0 && (
          <p> Nenhum post encontrado com esse titulo </p>
        )}

        <div className='button-container'>

          {/* UMA "!" É USADA PARA CONVERTER O VALOR PARA BOOLEAN, NO CASO DE "!" UMA EXCLAMAÇÃO,
          NEGA O VALOR, COLOCAR COMO FALSE, FALSO */}
          {!searchValue && (
            <Button
              text="Load more posts"
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>

    );
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          {1 + 1} Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



export default Home;
