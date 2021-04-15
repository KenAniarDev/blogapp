import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom"

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:1337/blogs/' + id)
    const history = useHistory()
    const handleClick = () => {
        fetch(`http://localhost:1337/blogs/${blog.id}`, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/')
        })
    }
    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Writtent by: { blog.author }</p>
                    <div> { blog.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;