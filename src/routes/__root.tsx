/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import * as React from 'react'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
import { NotFound } from '~/components/NotFound'

import { seo } from '~/utils/seo'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title:
          'TanStack Start | Type-Safe, Client-First, Full-Stack React Framework',
        description: `TanStack Start is a type-safe, client-first, full-stack React framework. `,
      }),
    ],
    links: [
      
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
    scripts: [
      {
        src: '/customScript.js',
        type: 'text/javascript',
      },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <header className="py-4">
            <nav className="flex justify-between items-center">
              <div className="flex gap-4 text-lg">
                <Link
                  to="/"
                  activeProps={{
                    className: 'font-bold',
                  }}
                  activeOptions={{ exact: true }}
                  className="hover:text-gray-300"
                >
                  Home
                </Link>{' '}
                <Link
                  to="/posts"
                  activeProps={{
                    className: 'font-bold',
                  }}
                  className="hover:text-gray-300"
                >
                  Posts
                </Link>{' '}
                <Link
                  to="/users"
                  activeProps={{
                    className: 'font-bold',
                  }}
                  className="hover:text-gray-300"
                >
                  Users
                </Link>{' '}
                <Link
                  to="/route-a"
                  activeProps={{
                    className: 'font-bold',
                  }}
                  className="hover:text-gray-300"
                >
                  Pathless Layout
                </Link>{' '}
                <Link
                  to="/deferred"
                  activeProps={{
                    className: 'font-bold',
                  }}
                  className="hover:text-gray-300"
                >
                  Deferred
                </Link>{' '}
                <Link
                  // @ts-expect-error
                  to="/this-route-does-not-exist"
                  activeProps={{
                    className: 'font-bold',
                  }}
                  className="hover:text-gray-300"
                >
                  This Route Does Not Exist
                </Link>
              </div>
            </nav>
          </header>
          <main className="py-8">{children}</main>
        </div>
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  )
}
