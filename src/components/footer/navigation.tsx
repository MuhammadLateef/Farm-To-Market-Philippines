'use client'

import Link from 'next/link'

const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'BUY', href: '/buy' },
    { label: 'SELL', href: '/sell' },
    { label: 'INVEST', href: '/invest' },
    { label: 'BLOG', href: '/blog' },
    { label: 'CONTACT', href: '/contact' },
]

export function Navigation() {
    return (
        <>
            <div className="flex items-center justify-center sm:gap-8 gap-3 py-6 sm:px-4 px-3">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-[#20A20B] sm:text-base text-sm font-normal hover:text-green-700 transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}

            </div>
            <div className="text-center mb-3">
                <p className='text-sm text-[#7A7A7A] font-normal'>Copyright © Farm To Market Philippines</p>
            </div>

        </>
    )
}
