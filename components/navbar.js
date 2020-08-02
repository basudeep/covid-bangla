import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { RiMenu3Line as MenuOpen, RiCloseLine as CloseMenu } from 'react-icons/ri'
const Navbar = () => {
    const [ isOpen, setIsopen ] = useState(false)
    const router = useRouter()
    function isActive (route){
        if(route == router.pathname){
            return 'active'
        }
        else ''
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-4 fixed-top">
                <div className='container '>
                    <div className='col-3'>
                       <Link href='/'><a className="navbar-brand font-weight-bolder">কোভিড বাংলা</a></Link> 
                    </div>
                    <button onClick={ () => {setIsopen(!isOpen)}} className='menu navbar-toggler' type="button">
                        {
                            isOpen ? <CloseMenu></CloseMenu> : <MenuOpen></MenuOpen>
                        }
                    </button>
                    <div className='col-9'>
                        <div className="collapse navbar-collapse text-right" className={ isOpen ? 'closed' : 'collapse navbar-collapse float-right'}>
                            <ul className="navbar-nav text-right float-right" onClick={ () => {setIsopen(!isOpen)}}>
                                <li className={`nav-item ${isActive('/')}`} >
                                    <Link href='/'><a className="nav-link">হোম</a></Link>
                                </li>
                                <li  className={`nav-item ${isActive('/state')}`}>
                                    <Link href='/state'><a className="nav-link" >রাজ্যভিত্তিক তথ্য</a></Link>
                                </li>
                                <li  className={`nav-item ${isActive('/district')}`} >
                                    <Link href='/district'><a className="nav-link" >জেলাভিত্তিক তথ্য</a></Link>
                                </li>
                                <li  className={`nav-item ${isActive('/beds')}`}>
                                    <Link href='/beds'><a className="nav-link" >হাসপাতাল ও বেড</a></Link>
                                </li>
                                <li  className={`nav-item ${isActive('/contacts')}`}>
                                    <Link href='/contacts'><a className="nav-link">জরুরী সহায়তা</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <style jsx>{`
            nav.navbar.navbar-expand-lg.navbar-light.bg-light.py-4.fixed-top {
                box-shadow: 0 5px 35px rgba(0, 0, 0, 0.1);
            }
            `}</style>
            </div>
   
    )
}


export default Navbar