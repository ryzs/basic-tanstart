import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { fetchPosts } from '../utils/posts'

export const Route = createFileRoute('/posts')({
  loader: async () => fetchPosts(),
  component: PostsComponent,
})

function PostsComponent() {
  const posts = Route.useLoaderData()

  return (
    <div className="p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...posts, { id: 'i-do-not-exist', title: 'Non-existent Post' }].map(
          (post) => {
            return (
              <div
                key={post.id}
                className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
              >
                <Link
                  to="/posts/$postId"
                  params={{
                    postId: post.id,
                  }}
                  className="block text-lg font-semibold text-blue-400 hover:text-blue-300"
                  activeProps={{ className: 'text-white font-bold' }}
                >
                  {post.title.substring(0, 20)}
                </Link>
              </div>
            )
          },
        )}
      </ul>
      <hr className="my-8 border-gray-700" />
      <Outlet />
    </div>
  )
}
