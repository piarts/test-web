import Logo from "@/assets/images/logo-light.png"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [Active, setActive] = useState(false)
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="logo-wrapper">
                        <Link className="logo" href="/">
                            <img src={Logo.src} className="logo-img" alt="" />
                        </Link>
                    </div>
                    <div className="me-3 d-lg-none">
                        <i className="fa-solid fa-bars fs-2" onClick={() => { setActive(true) }}></i>
                    </div>
                    <div className={`collapse navbar-collapse ${Active ? "d-flex" : "d-none"}`} id="navbar">
                        <ul className="navbar-nav w-100 d-flex justify-content-end">
                            <li className="nav-item"><Link className="nav-link" href="/">Anasayfa</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/hakkimda">Hakkımızda</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/hizmetler">Hizmetlerimiz</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/referanslar">Referanslar</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/galeri">Galeri</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/iletisim">İletişim</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}