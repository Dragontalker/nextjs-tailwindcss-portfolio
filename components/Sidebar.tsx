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
            <h3 className='my-4 tex-3x1 font-medium tracking-wider'>
                <span>Richard</span>Yang
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
            <div className='flex justify-around my-5 text-green-500 md:w-full'>
                <a>
                    <AiFillYoutube className='w-8 h-8'/>
                </a>
                <a>
                    <AiFillGithub className='w-8 h-8'/>
                </a>
                <a>
                    <AiFillLinkedin className='w-8 h-8'/>
                </a>
            </div>

            {/* address */}
            <div>
                <div>
                    <GoLocation />
                    <span>Toronto, Canada</span>
                </div>
                <p>richard.yang.tong@gmail.com</p>
                <p>+1(647)533-7683</p>
            </div>
            <button>Email Me</button>
            <button>Toggle Theme</button>
        </div>
    )
}

export default Sidebar
