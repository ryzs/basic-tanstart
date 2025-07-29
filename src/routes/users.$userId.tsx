import { createFileRoute } from '@tanstack/react-router'
import { NotFound } from 'src/components/NotFound'
import { UserErrorComponent } from 'src/components/UserError'

export const Route = createFileRoute('/users/$userId')({
  loader: async ({ params: { userId } }) => {
    try {
      const res = await fetch('/api/users/' + userId)
      if (!res.ok) {
        throw new Error('Unexpected status code')
      }

      const data = await res.json()

      return data
    } catch {
      throw new Error('Failed to fetch user')
    }
  },
  errorComponent: UserErrorComponent,
  component: UserComponent,
  notFoundComponent: () => {
    return <NotFound>User not found</NotFound>
  },
})

function UserComponent() {
  const user = Route.useLoaderData()

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
      <p className="text-gray-400 mb-4">{user.email}</p>
      <a
        href={`/api/users/${user.id}`}
        className="inline-block py-2 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold"
      >
        View as JSON
      </a>
    </div>
  )
}
