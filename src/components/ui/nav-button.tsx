'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import clsx from 'clsx'

type NavButtonProps = {
  href: string
  children: ReactNode
  tag?: 'left' | 'center' | 'right'
}

export function NavButton({ href, children, tag = 'center' }: NavButtonProps) {
  const tagClasses = {
    left: 'rounded-s-lg border-r-0',
    center: 'border-x-0',
    right: 'rounded-e-lg border-l-0',
  }

  return (
    <Link
      href={href}
      className={clsx(
        'px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white',
        tagClasses[tag]
      )}
    >
      {children}
    </Link>
  )
}
