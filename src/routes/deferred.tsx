import { Await, createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { Suspense, useState } from 'react'

const personServerFn = createServerFn({ method: 'GET' })
  .validator((d: string) => d)
  .handler(({ data: name }) => {
    return { name, randomNumber: Math.floor(Math.random() * 100) }
  })

const slowServerFn = createServerFn({ method: 'GET' })
  .validator((d: string) => d)
  .handler(async ({ data: name }) => {
    await new Promise((r) => setTimeout(r, 1000))
    return { name, randomNumber: Math.floor(Math.random() * 100) }
  })

export const Route = createFileRoute('/deferred')({
  loader: async () => {
    return {
      deferredStuff: new Promise<string>((r) =>
        setTimeout(() => r('Hello deferred!'), 2000),
      ),
      deferredPerson: slowServerFn({ data: 'Tanner Linsley' }),
      person: await personServerFn({ data: 'John Doe' }),
    }
  },
  component: Deferred,
})

function Deferred() {
  const [count, setCount] = useState(0)
  const { deferredStuff, deferredPerson, person } = Route.useLoaderData()

  return (
    <div className="p-4 space-y-4 bg-gray-800 rounded-lg">
      <h1 className="text-2xl font-bold">Deferred Loading</h1>
      <div
        data-testid="regular-person"
        className="p-2 bg-gray-700 rounded-md"
      >
        <span className="font-semibold">Regular Person:</span> {person.name} -{' '}
        {person.randomNumber}
      </div>
      <Suspense
        fallback={<div className="p-2 bg-gray-700 rounded-md">Loading person...</div>}
      >
        <Await
          promise={deferredPerson}
          children={(data) => (
            <div
              data-testid="deferred-person"
              className="p-2 bg-gray-700 rounded-md"
            >
              <span className="font-semibold">Deferred Person:</span> {data.name}{' '}
              - {data.randomNumber}
            </div>
          )}
        />
      </Suspense>
      <Suspense
        fallback={<div className="p-2 bg-gray-700 rounded-md">Loading stuff...</div>}
      >
        <Await
          promise={deferredStuff}
          children={(data) => (
            <h3
              data-testid="deferred-stuff"
              className="text-xl font-semibold text-blue-400"
            >
              {data}
            </h3>
          )}
        />
      </Suspense>
      <div className="flex items-center gap-4">
        <div className="text-lg">Count: {count}</div>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
        >
          Increment
        </button>
      </div>
    </div>
  )
}
