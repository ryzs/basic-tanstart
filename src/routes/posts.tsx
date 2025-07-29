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
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...posts, { id: 'i-do-not-exist', title: 'Non-existent Post' }].map(
          (post) => {
            const isNonExistent = post.id === 'i-do-not-exist'
            return (
              <div
                key={post.id}
                className={`rounded-lg p-4 transition-colors ${
                  isNonExistent
                    ? 'bg-gray-800 opacity-50'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <Link
                  to="/posts/$postId"
                  params={{
                    postId: post.id,
                  }}
                  className={`block text-lg font-semibold ${
                    isNonExistent
                      ? 'text-gray-500 cursor-not-allowed'
                      : 'text-blue-400 hover:text-blue-300'
                  }`}
                  activeProps={{ className: 'text-white font-bold' }}
                  onClick={(e) => isNonExistent && e.preventDefault()}
                >
                  {post.title.substring(0, 20)}
                </Link>
              </div>
            )
          },
        )}
      </div>
      <hr className="my-8 border-gray-700" />
      <Outlet />
    </div>
  )
}
