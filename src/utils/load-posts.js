export const loadPosts = async () => {
    
    const postsResponose = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos'); 

    // Vou executar varias requisições em paralele e quando todas terminarem eu vou pegar o resultado
    // todas de uma vez, passando um array com todas as promises
    const [posts, photos] = await Promise.all([postsResponose, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    //Juntando os dois arrays, um com os posts e outro com as fotos, mapeando usando o menor
    const postsAndPhotos = postsJson.map((post, index) => {
      return {
        ...post, cover: photosJson[index].url
      };
    });

    return postsAndPhotos;
    
}
