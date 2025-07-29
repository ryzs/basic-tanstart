import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      <div
        className="min-h-[60vh] bg-cover bg-fixed bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80)',
        }}
      >
        <div className="p-8 bg-black bg-opacity-50 rounded-lg text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome Home!</h1>
          <p className="text-xl text-gray-300">
            This is a simple, modern UI using Tailwind CSS with a parallax
            effect.
          </p>
        </div>
      </div>
      <div className="p-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-400">
                Feature One
              </h3>
              <p className="text-gray-400">
                A short description of the first amazing feature.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-400">
                Feature Two
              </h3>
              <p className="text-gray-400">
                A brief explanation of what makes this second feature so great.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-400">
                Feature Three
              </h3>
              <p className="text-gray-400">
                Details about the third feature that will capture your
                interest.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="min-h-[50vh] bg-cover bg-fixed bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80)',
        }}
      />
      <div className="p-8 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Discover More</h2>
          <p className="text-lg text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla.
          </p>
        </div>
      </div>
    </div>
  )
}
