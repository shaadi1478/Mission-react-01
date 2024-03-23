import { useState } from "react";
import Link from "../Link/Link";
import { IoMenuSharp, IoClose  } from "react-icons/io5";


const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'ProductDetails', path: '/products/:id' },
        { id: 5, name: 'Contact', path: '/contact' }
      ];
      
    return (
        <nav className="text-black bg-yellow-300 p-4">
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoClose></IoClose>
                    :<IoMenuSharp className=""></IoMenuSharp>
                }
            
            </div>
            <ul className={`
            md:flex duration-1000 absolute md:static bg-yellow-300 p-4
            ${open ? 'top-16' : '-top-60'}
            `}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;