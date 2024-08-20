import Navigation from "@/module/navigation";
import Layout from "./layout";
import Banner from "@/assets/images/banner/banner_1.jpg"
function Iletisim() {


    return (
        <Layout>
            <Navigation page="İletişim" image={Banner.src} />
            <div className="line-vr-section"></div>
            <section className="contact section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-60">
                            <div className="row mb-60">
                                <div className="col-md-12">
                                    <h5>Antalya Adres</h5>
                                    <div className="con">
                                        <div className="icon"> <span className="fa-solid fa-phone"></span> </div>
                                        <div className="con-content">
                                            <p className="text"><a href="tel:05323064533">0532 306 45 33</a></p>
                                        </div>
                                    </div>
                                    <div className="con">
                                        <div className="icon"> <span className="fa-solid fa-envelope"></span> </div>
                                        <div className="con-content">
                                            <p className="text"><a href="mailto:alparsancelik037@gmail.com">alparsancelik037@gmail.com</a></p>
                                        </div>
                                    </div>
                                    <div className="con">
                                        <div className="icon"> <span className="fa-solid fa-location"></span> </div>
                                        <div className="con-content">
                                            <p className="text">Şelale mah. 7282 sok. No:7 Kepez Antalya</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-60">
                            <div className="row mb-60">
                                <div className="col-md-12">
                                    <h5>Bodrum Adres</h5>
                                    <div className="con">
                                        <div className="icon"> <span className="fa-solid fa-phone"></span> </div>
                                        <div className="con-content">
                                            <p className="text"><a href="tel:05324962733">0532 496 27 33</a></p>
                                        </div>
                                    </div>
                                    <div className="con">
                                        <div className="icon"> <span className="fa-solid fa-envelope"></span> </div>
                                        <div className="con-content">
                                            <p className="text"><a href="mailto:alparsancelik037@gmail.com">alparsancelik037@gmail.com</a></p>
                                        </div>
                                    </div>
                                    <div className="con">
                                        <div className="icon"> <span className="fa-solid fa-location"></span> </div>
                                        <div className="con-content">
                                            <p className="text">Çırkan Mh.Aytfer Feray sk. No 2 Bodrum Muğla</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default Iletisim;