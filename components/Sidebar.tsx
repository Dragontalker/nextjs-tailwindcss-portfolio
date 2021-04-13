const Sidebar = () => {
    return (
        <div>
            <img 
                src='https://dragontalker.github.io/FullStack-DeveloperPortfolio/Assets/Image/profile_picture.jpg'
                alt='user avatar'
            />
            <h3><span>Richard</span>Yang</h3>
            <p>Web Developer</p>
            <p>Download Resume</p>
            {/* social icon */}

            {/* address */}
            <div>
                <div>
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
