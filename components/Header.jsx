import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white' aria-label="Site Header"> 
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link href="/" aria-label="Home">
          <h1 className='text-4xl font-semibold'>
            Marvin<span className='text-accent'>.</span>
          </h1>
        </Link>

        {/* desktop nav and hire me button*/}
        <div className="hidden xl:flex items-center gap-8" role="navigation" aria-label="Desktop Navigation">
          <Nav />
          <Link href="/contact" aria-label="Hire Me">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header