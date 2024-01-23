
import { Await, LoaderFunction, defer, useAsyncValue, useLoaderData } from "react-router-dom"
import { Post } from "../../../types/data"
import { Suspense } from "react"

interface PostLoaderParams {
    req?: any,
    params: any
}
interface ICommetns {
    "postId": number
    "id": number
    "name": string
    "email": string
    "body": string
}
interface IDefer {
    post: Post
    comments: ICommetns
}



const ResolvedPost = () => {
    const post = useAsyncValue() as Post
    return <>
        <h1>{post.id} {post.title} </h1>
        <p>{post.body}</p>
    </>
}
const ResolvedComments = () => {
    const comments = useAsyncValue() as ICommetns[]
    return <>
        <h2>Коментарии</h2>
        {comments && comments.map(comment => (
            <div key={comment.id}>
                <h3>{comment.email}</h3>
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
            </div>
        ))}
    </>
}

const SingPage = () => {
    const { post, comments } = useLoaderData() as IDefer

    return (
        <div>

            <Suspense fallback={<h1>Loading ....</h1>} >
                <Await resolve={post}>
                    <ResolvedPost />
                </Await>
            </Suspense>

            <Suspense fallback={<h1>Commints is Loading ....</h1>} >
                <Await resolve={comments}>
                    <ResolvedComments />
                </Await>
            </Suspense>

        </div>
    )
}

const getPost = async (id: string) => {

    const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await req.json()
    return data
}
const getComments = async (id: string) => {

    const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const data = await req.json()
    return data
}

const singlePostLoader: LoaderFunction<Post> = async ({ params }: PostLoaderParams) => {
    const id = params.id
    return defer({
        post: getPost(id),
        comments: getComments(id)
    })
}
export { SingPage, singlePostLoader }


