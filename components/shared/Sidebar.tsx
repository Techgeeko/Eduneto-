"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import CustomUserButton from './CustomUserButton'
import { Button } from '../ui/button'

const sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className='sidebar'>
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className='sidebar-logo'>
          <Image src="/assets/Logo.svg" alt='Logo'  width={150} height={57}/>
        </Link>

        <nav className='sidebar-nav'>
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0,3).map((link) =>{
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                  }`}>
                    <Link className='sidebar-link' href={link.route}>
                      <Image
                        src={link.icon}
                        alt='Logo'
                        width={16}
                        height={16}
                        className={`${isActive && 'brightness-200'}`}
                       />
                       {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <ul className="sidebar-nav_elements">
            {navLinks.slice(3).map((link) =>{
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                  }`}>
                    <Link className='sidebar-link' href={link.route}>
                      <Image
                        src={link.icon}
                        alt='Logo'
                        width={16}
                        height={16}
                        className={`${isActive && 'brightness-200'}`}
                       />
                       {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </SignedIn>

          <SignedOut>
              <Button asChild className='button bg-purple-gradient bg-cover'>
                <Link href='/sign-in'>Login</Link>
              </Button>
          </SignedOut>
        </nav>

        <div className="end" style={{ backgroundColor: '#1C1C1C', borderRadius: '5px', padding: '10px' }}>
          <CustomUserButton />
        </div>
      </div>
    </aside>
  )
}

export default sidebar