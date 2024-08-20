import Navigation from "@/module/navigation";
import Layout from "./layout";
import Photo from "@/assets/images/aboutus/alparslancelik.jpg"
import Banner from "@/assets/images/banner/banner_1.jpg"
function Hakkimda() {


    return (
        <Layout>
            <Navigation page="Hakkımızda" image={Banner.src} />
            <section className="about section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h6>Art Studio</h6>
                            <h1>Alparslan Çelik Kimdir ?</h1>
                            <p>
                                1978 yılında Kastamonu'da doğan Çelik, 1994 yılında Kastamonu Sanat Okulu'ndan mezun olduktan sonra sanat ve zanaat alanında kariyerine adım atmıştır. Mezuniyetinin ardından, dönemin en iyi ustalarıyla çalışarak tekne imalatı ve kalıp üretimi gibi alanlarda derinlemesine bir bilgi ve beceri kazanmıştır.
                                2003 yılında Antalya Serbest Bölgesi'nde kendi işini kurarak, sanatsal vizyonunu daha geniş bir kitleye sunma fırsatı bulmuştur.
                            </p>
                            <p>
                                Başlangıçta sadece bir hobi olarak gördüğü sanatsal objeler, zamanla onun en büyük tutkusuna dönüşmüş ve profesyonel uygulama alanına dönüşmüştür. Çelik'in çalışmalarında, hayal gücünü gerçeğe dönüştürme ve her projede özgünlük ile estetiği bir araya getirme hedefi ön plandadır.
                                Bu tutku ve özveri, onun sanatsal ve teknik becerilerini sürekli olarak geliştirmesine ve her projede yenilikçi çözümler üretmesine olanak tanımıştır.
                            </p>
                            <ul className="list-unstyled list mb-30" hidden>
                                <li>
                                    <div className="list-icon"> <i className="fa-solid fa-check"></i> </div>
                                    <div className="list-text">
                                        <p>Sanatsal Boyama & Uygulamaları</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="list-icon"> <i className="fa-solid fa-check"></i> </div>
                                    <div className="list-text">
                                        <p>Heykel Tasarımlar & Uygulamaları</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="list-icon"> <i className="fa-solid fa-check"></i> </div>
                                    <div className="list-text">
                                        <p>Tema Park Tasarımlar & Uygulamaları</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="list-icon"> <i className="fa-solid fa-check"></i> </div>
                                    <div className="list-text">
                                        <p>Sanatsal Ahşap Tasarımları</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="list-icon"> <i className="fa-solid fa-check"></i> </div>
                                    <div className="list-text">
                                        <p>Tiny House Yapımı</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="list-icon"> <i className="fa-solid fa-check"></i> </div>
                                    <div className="list-text">
                                        <p>Tekne Bakım & Onarımı</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="list-icon"> <i className="fa-solid fa-check"></i> </div>
                                    <div className="list-text">
                                        <p>Kaydırak Bakım & Onarımı</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <div className="item">
                                <div className="wrap">
                                    <div className="img"> <img src={Photo.src} className="img-fluid" /> </div>
                                    <div className="title">
                                        <h4>Alparslan Çelik</h4>
                                        <h6>CEO / Founder</h6>
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

export default Hakkimda;