'use client'

import Image from 'next/image'
import Link from "next/link";

export const Header = () => {
    return (
        <header className="w-full fixed top-0 left-0 bg-white">
            <div className="flex items-center justify-between p-4">
                <Link href="/" scroll={true} className="block">
                    <Image
                        src="/images/logo.svg"
                        alt="Marvel Power Group"
                        width={146}
                        height={55}
                        priority
                    />
                </Link>

                <nav className="space-x-8 text-lg font-semibold">
                    <Link href="#about">
                        About
                    </Link>

                    <Link href="#services">
                        Services
                    </Link>

                    <Link href="#contact">
                        Contact
                    </Link>
                </nav>

            </div>
        </header>
    );

}
