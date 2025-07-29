import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import type { User } from '../utils/users'

export const Route = createFileRoute('/users')({
  loader: async () => {
    const res = await fetch('/api/users')

    if (!res.ok) {
      throw new Error('Unexpected status code')
    }

    const data = (await res.json()) as Array<User>

    return data
  },
  component: UsersComponent,
})

function UsersComponent() {
  const users = Route.useLoaderData()

  return (
    <div className="p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          ...users,
          { id: 'i-do-not-exist', name: 'Non-existent User', email: '' },
        ].map((user) => {
          return (
            <div
              key={user.id}
              className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
            >
              <Link
                to="/users/$userId"
                params={{
                  userId: String(user.id),
                }}
                className="block text-lg font-semibold text-blue-400 hover:text-blue-300"
                activeProps={{ className: 'text-white font-bold' }}
              >
                {user.name}
              </Link>
            </div>
          )
        })}
      </div>
      <hr className="my-8 border-gray-700" />
      <Outlet />
    </div>
  )
}
