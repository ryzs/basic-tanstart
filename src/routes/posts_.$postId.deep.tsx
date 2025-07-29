import { Link, createFileRoute } from '@tanstack/react-router'
import { fetchPost } from '../utils/posts'
import { PostErrorComponent } from '~/components/PostError'

export const Route = createFileRoute('/posts_/$postId/deep')({
  loader: async ({ params: { postId } }) =>
    fetchPost({
      data: postId,
    }),
  errorComponent: PostErrorComponent,
  component: PostDeepComponent,
})

function PostDeepComponent() {
  const post = Route.useLoaderData()

  return (
    <div className="p-4 space-y-4 bg-gray-800 rounded-lg">
      <Link
        to="/posts"
        className="block py-1 text-blue-400 hover:text-blue-300"
      >
        ← All Posts
      </Link>
      <h4 className="text-2xl font-bold">{post.title}</h4>
      <p className="text-gray-300">{post.body}</p>
    </div>
  )
}
