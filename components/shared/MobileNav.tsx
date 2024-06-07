"use client"

import {Sheet, SheetContent, SheetTrigger,} from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
  

const MobileNav = () => {
    const pathname = usePathname();

        return (
            <header className="header">
                <Link href='/' className="flex items-center gap-2 md:py-2">
                    <Image 
                    src='/assets/Logo-black.svg'
                    alt="Logo"
                    width={180}
                    height={28}
                    />
                </Link>

                <nav className="flex gap-2">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/"/>

                        <Sheet>
                            <SheetTrigger>
                                <Image
                                    src='/assets/icons/menu.svg'
                                    alt='menu'
                                    width='32'
                                    height='32'
                                    className='cursor-pointer'
                                />
                            </SheetTrigger>
                            <SheetContent className='sheet-content sm:w-64' >
                                <>
                                    <Image 
                                        src='/assets/Logo.svg'
                                        alt='Logo'
                                        width={152}
                                        height={23}
                                    />


                                    <ul className="header-nav_elements">
                                        {navLinks.map((link) =>{
                                            const isActive = link.route === pathname

                                            return (
                                                <li 
                                                className={`${isActive &&
                                                'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                                                key={link.route} 
                                                >
                                            <Link className='sidebar-link' href={link.route}>
                                            <Image
                                                src={link.icon}
                                                alt='Logo'
                                                width={16}
                                                height={16}
                                                style={{ filter: 'brightness(0) invert(1) sepia(100%) saturate(0%) hue-rotate(0deg)' }}
                                                className={`${isActive && 'brightness-200'}`}
                                            />

                                            {link.label}
                                            </Link>
                                                </li>
                                                )
                                            })}
                                    </ul>
                                </>
                            </SheetContent>
                        </Sheet>

                    </SignedIn>
                </nav>
            </header>
        )
}

export default MobileNav