import './styles.css'

export const PostCard = (props) => {

    const post = props;
    
    return (
        <div key={post.id} className='post'>
            <img src={post.cover} alt={post.title} />
            <div className={"post-content"}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    );
}
