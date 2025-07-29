import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome Home!</h1>
      <p className="text-lg text-gray-400">
        This is a simple, modern UI using Tailwind CSS.
      </p>
    </div>
  )
}
