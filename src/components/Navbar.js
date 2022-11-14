import React, {useState, useEffect} from 'react'

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            setScroll(window.scrollY > 200);
        })
    }, [])

  return (
    <header className={scroll ? 'bg-scroll' : ''}>
        <nav className='container'>
            <div className='container_between'>
                <div className='header_logo'>
                    <h2>Logo</h2>
                </div>
                <div className='header_menu'>
                    <ul className='header_list'>
                        <li>home</li>
                        <li>menu</li>
                        <li>chi siamo</li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;
