import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {

    const [activeItem, setActiveItem] = useState<string>('')

    return (
        <div>
            <span>{activeItem}</span>
            <div>
                {activeItem !== 'About' && (
                    <Link href="/">
                        <a>
                            <span>About</span>
                        </a>
                    </Link>
                )}
            </div>
            <div>
                {activeItem !== 'Projects' && (
                    <Link href="/">
                        <a>
                            <span>Projects</span>
                        </a>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Navbar
