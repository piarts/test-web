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
                                    <li><a href="/hakkimda">Hakkımızda</a></li>
                                    <li><a href="/hizmetler">Hizmetlerimiz</a></li>
                                    <li><a href="/referanslar">Referanslar</a></li>
                                    <li><a href="/galeri">Galeri</a></li>
                                    <li><a href="/iletisim">İletişim</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4 mb-45">
                                <h5>İletişim</h5>
                                <div className="fw-bold">Antalya</div>
                                <p>Şelale mah. 7282 sok. No:7 Kepez Antalya</p>
                                <div className="phone"><a href="tel:05323064533">0532 306 45 33</a></div>
                                <div className="mail"><a href="mailto:alparsancelik037@gmail.com">alparsancelik037@gmail.com</a></div>

                                <div className="fw-bold mt-4">Bodrum</div>
                                <p>Çırkan Mh.Aytfer Feray sk. No 2 Bodrum Muğla</p>
                                <div className="phone"><a href="tel:05324962733">0532 496 27 33</a></div>
                                <div className="mail"><a href="mailto:alparsancelik037@gmail.com">alparsancelik037@gmail.com</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}