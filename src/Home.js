import BlogList from './BlogList'
import useFetch from './useFetch';

const Home = () => {
    const { data, isPending, error } = useFetch('http://localhost:1337/blogs')
  
    
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending  && <div>loading...</div>}
            {data && <BlogList blogs={data} title={'All Blogs'} /> }
        </div>
    );
}
 
export default Home;
