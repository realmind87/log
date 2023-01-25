import { AiFillAliwangwang } from 'react-icons/ai'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Logo from "@/public/images/common/logo.png"
import Image from 'next/image'


const Header = () => {
    return (
        <header className='header'>
            <h1 className='logo'>
                <Image 
                    src={Logo} 
                    alt="Logo"
                />
            </h1>
        </header>
    )
}

export default Header