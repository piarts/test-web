import Link from "next/link";

export default function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="top">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-4 mb-45">
                                <h5>Hızlı Linkler</h5>
                                <ul className="list list-unstyled">
                                    <li><Link href="/hakkimda">Hakkımızda</Link></li>
                                    <li><Link href="/hizmetler">Hizmetlerimiz</Link></li>
                                    <li><Link href="/referanslar">Referanslar</Link></li>
                                    <li><Link href="/galeri">Galeri</Link></li>
                                    <li><Link href="/iletisim">İletişim</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-4 mb-45">
                                <h5>İletişim</h5>
                                <div className="fw-bold">Antalya</div>
                                <p>Şelale mah. 7282 sok. No:7 Kepez Antalya</p>
                                <div className="phone"><Link href="tel:05323064533">0532 306 45 33</Link></div>
                                <div className="mail"><Link href="mailto:alparsancelik037@gmail.com">alparsancelik037@gmail.com</Link></div>

                                <div className="fw-bold mt-4">Bodrum</div>
                                <p>Çırkan Mh.Aytfer Feray sk. No 2 Bodrum Muğla</p>
                                <div className="phone"><Link href="tel:05324962733">0532 496 27 33</Link></div>
                                <div className="mail"><Link href="mailto:alparsancelik037@gmail.com">alparsancelik037@gmail.com</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}