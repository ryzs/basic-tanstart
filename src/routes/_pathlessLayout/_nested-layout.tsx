import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pathlessLayout/_nested-layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div className="flex gap-8 p-4 bg-gray-800 rounded-lg">
      <div className="w-1/4">
        <h2 className="text-xl font-bold mb-4">Nested Layout</h2>
        <nav className="flex flex-col gap-2">
          <Link
            to="/route-a"
            activeProps={{
              className: 'font-bold text-blue-400',
            }}
            className="p-2 rounded-md hover:bg-gray-700"
          >
            Go to route A
          </Link>
          <Link
            to="/route-b"
            activeProps={{
              className: 'font-bold text-blue-400',
            }}
            className="p-2 rounded-md hover:bg-gray-700"
          >
            Go to route B
          </Link>
        </nav>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}
