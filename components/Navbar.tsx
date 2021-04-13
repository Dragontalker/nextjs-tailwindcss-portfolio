import { useState } from 'react'

const Navbar = () => {

    const [activeItem, setActiveItem] = useState<string>('')

    return (
        <div>
            <span>{activeItem}</span>
        </div>
    )
}

export default Navbar
