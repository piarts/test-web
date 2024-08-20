import Navigation from "@/module/navigation";
import Layout from "./layout";
import Banner from "@/assets/images/banner/banner_1.jpg"



function Hizmetler() {

    const Service = [
        {
            id: 1,
            title: "Creative Sanatsal Boyama & uygulamaları",
            subtitle: "Creative Sanatsal Boyama & Uygulamaları, özgün tasarımlarla yaşam alanlarınıza estetik dokunuşlar katar. Sanat ve renk uyumuyla mekânlarınıza benzersiz bir kimlik kazandırır.",
            image: ""
        },
        {
            id: 2,
            title: "Creative Heykel Tasarımlar & uygulamaları",
            subtitle: "Creative Heykel Tasarımlar & Uygulamaları, mekanlarınıza sanatsal dokunuşlar katarak özgün ve estetik heykellerle benzersiz bir atmosfer oluşturur. Hayal gücünüzü gerçeğe dönüştürür.",
            image: ""
        },
        {
            id: 3,
            title: "Tema Park Tasarımlar & Uygulamaları",
            subtitle: "Tema Park Tasarımlar & Uygulamaları, eğlence alanlarınıza özgün konseptler sunarak ziyaretçilere unutulmaz deneyimler yaşatır. Yaratıcı çözümlerle her yaşa hitap eden büyülü dünyalar oluşturur.",
            image: ""
        },
        {
            id: 4,
            title: "Sanatsal Ahşap tasarımları",
            subtitle: "Sanatsal Ahşap Tasarımları, doğal malzemeleri yaratıcı tasarımlarla buluşturarak mekânlarınıza sıcaklık ve estetik kazandırır. Her parça, el işçiliğiyle benzersiz bir sanat eserine dönüşür.",
            image: ""
        },
        {
            id: 5,
            title: "Tiny House Yapımı",
            subtitle: "Tiny House Yapımı, minimalist yaşam tarzını benimseyenler için pratik, işlevsel ve estetik küçük ev çözümleri sunar. Kompakt alanlarda büyük konfor ve özgürlük sağlar.",
            image: ""
        },
        {
            id: 6,
            title: "Tekne bakım & onarımı",
            subtitle: "Tekne Bakım & Onarımı, deniz araçlarınızın uzun ömürlü ve güvenli kalmasını sağlamak için profesyonel hizmetler sunar. Düzenli bakım ve onarımla teknelerinizin performansını en üst seviyede tutar.",
            image: ""
        }


    ]
    return (
        <Layout>
            <Navigation page="Hizmetlerimiz" image={Banner.src} />
            <div className="line-vr-section"></div>
            <section className="services section-padding">
                <div className="container">
                    <div className="row">


                        {
                            (Service || []).map((d: any, x: number) => {
                                return (
                                    <div className="col-lg-4 col-md-6 mb-25">
                                        <div className="item ">
                                            <div className="wrap">
                                                <div className="con">
                                                    <h4 style={{ fontSize: "19px", height: "40px" }}>{d.title}</h4>
                                                    <p style={{ height: "130px" }}>{d.subtitle}</p>

                                                </div>
                                                <div className="numb">01</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <div className="line-vr-section"></div>
            <section className="lets-talk background bg-img bg-fixed section-padding" data-overlay-dark="7" data-background="images/banner2.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h6 >Hayalleri Gerçekleştiriyoruz</h6>
                            <h5>İletişime Geç</h5>
                            <a href="tel:+05323064533" className="btn-1 mt-30"> <i className="fa-solid fa-phone"></i>0 532 306 45 33</a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Hizmetler;