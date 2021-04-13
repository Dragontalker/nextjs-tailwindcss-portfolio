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
                {activeItem !== 'Resume' && (
                    <Link href="/">
                        <a>
                            <span>Resume</span>
                        </a>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Navbar
