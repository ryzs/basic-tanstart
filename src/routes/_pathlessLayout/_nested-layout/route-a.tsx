import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/_pathlessLayout/_nested-layout/route-a')(
  {
    component: LayoutAComponent,
  },
)

function LayoutAComponent() {
  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h2 className="text-xl font-bold">I'm A!</h2>
    </div>
  )
}
