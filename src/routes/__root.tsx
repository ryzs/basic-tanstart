/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsInProd } from '@tanstack/react-router-devtools'
import * as React from 'react'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
import { NotFound } from '~/components/NotFound'

import { seo } from '~/utils/seo'
import '~/styles/global.css'

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
        title: 'A Modern Web Application Example',
        description: 'An example of a modern web application with best practices.',
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
      <body className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto p-4">
          <header className="mb-8">
            <nav className="flex items-center justify-between p-4 bg-gray-800 rounded-xl">
              <div className="flex items-center gap-4 text-lg">
                <Link
                  to="/"
                  activeProps={{
                    className: 'font-bold text-blue-400',
                  }}
                  activeOptions={{ exact: true }}
                  className="hover:text-blue-400"
                >
                  Home
                </Link>{' '}
                <Link
                  to="/posts"
                  activeProps={{
                    className: 'font-bold text-blue-400',
                  }}
                  className="hover:text-blue-400"
                >
                  Posts
                </Link>{' '}
                <Link
                  to="/users"
                  activeProps={{
                    className: 'font-bold text-blue-400',
                  }}
                  className="hover:text-blue-400"
                >
                  Users
                </Link>{' '}
                <Link
                  to="/route-a"
                  activeProps={{
                    className: 'font-bold text-blue-400',
                  }}
                  className="hover:text-blue-400"
                >
                  Pathless Layout
                </Link>{' '}
                <Link
                  to="/deferred"
                  activeProps={{
                    className: 'font-bold text-blue-400',
                  }}
                  className="hover:text-blue-400"
                >
                  Deferred
                </Link>{' '}
                <Link
                  // @ts-expect-error
                  to="/this-route-does-not-exist"
                  activeProps={{
                    className: 'font-bold',
                  }}
                  className="text-gray-500 cursor-not-allowed"
                >
                  This Route Does Not Exist
                </Link>
              </div>
            </nav>
          </header>
          <main>{children}</main>
        </div>
        <TanStackRouterDevtoolsInProd position="bottom-right" />
        <Scripts />
      </body>
    </html>
  )
}
