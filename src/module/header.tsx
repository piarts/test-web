import Logo from "@/assets/images/logo-light.png"
import { useState } from "react"

export default function Header() {
    const [Active, setActive] = useState(false)
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="logo-wrapper">
                        <a className="logo" href="/">
                            <img src={Logo.src} className="logo-img" alt="" />
                        </a>
                    </div>
                    <div className="me-3 d-lg-none">
                        <i className="fa-solid fa-bars fs-2" onClick={() => { setActive(true) }}></i>
                    </div>
                    <div className={`collapse navbar-collapse ${Active ? "d-flex" : "d-none"}`} id="navbar">
                        <ul className="navbar-nav w-100 d-flex justify-content-end">
                            <li className="nav-item"><a className="nav-link" href="/">Anasayfa</a></li>
                            <li className="nav-item"><a className="nav-link" href="/hakkimda">Hakkımızda</a></li>
                            <li className="nav-item"><a className="nav-link" href="/hizmetler">Hizmetlerimiz</a></li>
                            <li className="nav-item"><a className="nav-link" href="/referanslar">Referanslar</a></li>
                            <li className="nav-item"><a className="nav-link" href="/galeri">Galeri</a></li>
                            <li className="nav-item"><a className="nav-link" href="/iletisim">İletişim</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}