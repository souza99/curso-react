import { useEffect, useState, useCallback, Component } from 'react';
import { Button } from '../../components/Button';
import { Posts } from '../../components/Posts';
import { TextInput } from '../../components/TextInput';
import { loadPosts } from '../../utils/load-posts';

import './styles.css';



export class Home extends Component {

  state = {
    counter: 0
  }

  handleCount = () => {
    this.setState(
      (prevState, prevProps) => {
        console.log('PREV', prevState.counter);
        return { counter: prevState.counter + 1 }
      },
      () => {
      console.log('POST', this.state.counter);
    });
  };
  
  render() {
    return (
      <div className='container'>

        <h1>{this.state.counter}</h1>
        <button onClick={this.handleCount}>Contar</button>
      </div>
    )
  }
}

// export const Home = () => {
//   const [allPosts, setAllPosts] = useState([]);
//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(0);
//   const [postsPerPage] = useState(10);
//   const [searchValue, setSearchValue] = useState('');

//   const noMorePosts = page + postsPerPage >= allPosts.length;

//   const filteredPost = !!searchValue ?
//     allPosts.filter(post => {
//       return post.title.toLowerCase().includes(searchValue.toLowerCase());
//     })
//     :
//     posts;

//   const handleLoadPosts = useCallback(async (page, postsPerPage) => {

//     const postsAndPhotos = await loadPosts();

//     setPosts(postsAndPhotos.slice(page, postsPerPage));
//     setAllPosts(postsAndPhotos);
//   }, [])


//   useEffect(
//     () => {
//       handleLoadPosts(0, postsPerPage);
//     },
//     [handleLoadPosts, postsPerPage]
//   );

//   const loadMorePosts = () => {

//     const nextPage = page + postsPerPage;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

//     posts.push(...nextPosts);

//     setPosts(posts);
//     setPage(nextPage);
//   }

//   const handleChange = (e) => {

//     const { value } = e.target;
//     setSearchValue(value);

//   }

//   return (
//     <section className='container'>

//       <div className="search-container">

//         {!!searchValue && (
//           <h1>Search value </h1>
//         )}

//         <TextInput searchValue={searchValue} handleChange={handleChange} />

//       </div>

//       {!!filteredPost.length > 0 && (
//         <Posts posts={filteredPost} />
//       )
//       }

//       {filteredPost.length === 0 && (
//         <p> Nenhum post encontrado com esse titulo </p>
//       )}

//       <div className='button-container'>

//         {!searchValue && (
//           <Button
//             text="Load more posts"
//             onClick={loadMorePosts}
//             disabled={noMorePosts}
//           />
//         )}
//       </div>
//     </section>
//   )

// }