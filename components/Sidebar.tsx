import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const Sidebar = () => {
    return (
        <div>
            <img 
                src='/square_profile.jpg'
                alt='user avatar'
                className='w-32 h-32 mx-auto rounded-full'
            />
            <h3 className='my-4 text-3x1 font-medium tracking-wider font-kaushan'>
                <span>Richard</span> Yang
            </h3>
            <p className='px-2 py-1 my-3 bg-green-200 rounded-full'>
                Web Developer
            </p>
            <a 
                className='px-2 py-1 my-3 bg-green-200 rounded-full flex items-center justify-center' 
                href=''
                download='name'>
                <GiTie className='w-6 h-6'/>Download Resume
            </a>
            {/* social icon */}
            <div className='flex justify-around my-5 text-green md:w-full w-9/12 mx-auto'>
                <a>
                    <AiFillYoutube className='w-8 h-8 cursor-pointer'/>
                </a>
                <a>
                    <AiFillGithub className='w-8 h-8 cursor-pointer'/>
                </a>
                <a>
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
                </a>
            </div>

            {/* address */}
            <div 
                className='py-4 my-5 bg-green-200'
                style={{ marginLeft: '-1rem', marginRight: '-1rem'}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Toronto, Canada</span>
                </div>
                <p className='my-2'>richard.yang.tong@gmail.com</p>
                <p className='my-2'>+1(647)533-7683</p>
            </div>
            <button className='bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2'>Email Me</button>
            <button className='bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2'>Toggle Theme</button>
        </div>
    )
}

export default Sidebar
