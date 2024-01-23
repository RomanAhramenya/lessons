import { LoaderFunction, useLoaderData, useSearchParams, defer, Await } from "react-router-dom";
import style from './../react-router-guide.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { Post } from '../../../types/data'
import { useAuth } from '../../hoc/useAuth'

import SearchPost from '../SearchPost'
import { Suspense } from "react";
interface IDefer {
    posts: Post[]
}

const BlogPage = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()
    const context = useAuth()
    const params = searchParams.get('blog') || ''
    const latest = searchParams.has('latest')
    const postId = latest ? 80 : 1
    const logout = () => {

        context?.signOut(() => navigate('/', { replace: true }))
    }

    const { posts } = useLoaderData() as IDefer

    const setSearch = (blog: string, latest: boolean) => {
        console.log('0', blog, latest)
        if (blog.length && latest === true) {

            setSearchParams({ blog, latest: 'true' })
        }

        if (!blog.length && latest === true) {

            setSearchParams({ latest: 'true' })
        }
        if (blog.length && latest === false) {

            setSearchParams({ blog })
        }
        if (!blog.length && latest === false) {

            setSearchParams({})
        }
    }
    return (
        <div className={style.page}>
            <div className={style.logout}>
                <span>привет {context?.user}</span>
                <button onClick={logout}>logout</button>
            </div>

            <SearchPost setSearch={setSearch} />
            <Suspense fallback={<h1>Loding...</h1>}>
                <Await resolve={posts}>
                    {
                        (resolvedPosts: Post[]) => (<>
                            {resolvedPosts.filter(post => post.title.includes(params) && post.id >= postId).map(post => (
                                <NavLink key={post.id} to={`/router-dom/example/blog/${post.id}`} style={{ display: 'block', textAlign: 'start', marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px solid #fac855' }}>
                                    <h2>{post.id} {post.title}</h2>
                                    <p>{post.title}</p>
                                </NavLink>
                            ))}
                        </>)
                    }
                </Await>
            </Suspense>

        </div>
    )
}
const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}
const blogLoader: LoaderFunction<Post[]> = async () => {
    return defer({
        posts: getPosts()
    })
};
export { BlogPage, blogLoader }