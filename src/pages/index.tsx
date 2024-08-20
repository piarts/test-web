import Layout from "./layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import Banner from "@/assets/images/banner/banner_1.jpg"
import Ourworks_1 from "@/assets/images/ourworks/1.jpg"
import Ourworks_2 from "@/assets/images/ourworks/2.jpg"
import Ourworks_3 from "@/assets/images/ourworks/3.jpg"
import Ourworks_4 from "@/assets/images/ourworks/4.jpeg"
import Ourworks_5 from "@/assets/images/ourworks/5.jpg"
import Ourworks_6 from "@/assets/images/ourworks/6.jpeg"

import Ourworks_7 from "@/assets/images/ourworks/7.jpg"
import Ourworks_8 from "@/assets/images/ourworks/8.jpg"

function Index() {


    const Portfoy = [
        {
            id: 1,
            title: "",
            subtitle: "",
            image: Ourworks_1.src
        },
        {
            id: 2,
            title: "",
            subtitle: "",
            image: Ourworks_2.src
        },
        {
            id: 3,
            title: "",
            subtitle: "",
            image: Ourworks_3.src
        },
        {
            id: 4,
            title: "",
            subtitle: "",
            image: Ourworks_4.src
        },
        {
            id: 5,
            title: "",
            subtitle: "",
            image: Ourworks_5.src
        },
        {
            id: 6,
            title: "",
            subtitle: "",
            image: Ourworks_6.src
        },
        {
            id: 7,
            title: "",
            subtitle: "",
            image: Ourworks_7.src
        },
        {
            id: 8,
            title: "",
            subtitle: "",
            image: Ourworks_8.src
        },

    ]

    const Service = [
        {
            id: 1,
            title: "Creative Sanatsal Boyama & uygulamaları",
            subtitle: "Creative Sanatsal Boyama & Uygulamaları, özgün tasarımlarla yaşam alanlarınıza estetik dokunuşlar katar. Sanat ve renk uyumuyla mekânlarınıza benzersiz bir kimlik kazandırır.",
            image: Ourworks_1.src
        },
        {
            id: 2,
            title: "Creative Heykel Tasarımlar & uygulamaları",
            subtitle: "Creative Heykel Tasarımlar & Uygulamaları, mekanlarınıza sanatsal dokunuşlar katarak özgün ve estetik heykellerle benzersiz bir atmosfer oluşturur. Hayal gücünüzü gerçeğe dönüştürür.",
            image: Ourworks_2.src
        },
        {
            id: 3,
            title: "Tema Park Tasarımlar & Uygulamaları",
            subtitle: "Tema Park Tasarımlar & Uygulamaları, eğlence alanlarınıza özgün konseptler sunarak ziyaretçilere unutulmaz deneyimler yaşatır. Yaratıcı çözümlerle her yaşa hitap eden büyülü dünyalar oluşturur.",
            image: Ourworks_3.src
        },
        {
            id: 4,
            title: "Sanatsal Ahşap tasarımları",
            subtitle: "Sanatsal Ahşap Tasarımları, doğal malzemeleri yaratıcı tasarımlarla buluşturarak mekânlarınıza sıcaklık ve estetik kazandırır. Her parça, el işçiliğiyle benzersiz bir sanat eserine dönüşür.",
            image: Ourworks_4.src
        },
        {
            id: 5,
            title: "Tiny House Yapımı",
            subtitle: "Tiny House Yapımı, minimalist yaşam tarzını benimseyenler için pratik, işlevsel ve estetik küçük ev çözümleri sunar. Kompakt alanlarda büyük konfor ve özgürlük sağlar.",
            image: Ourworks_5.src
        },
        {
            id: 6,
            title: "Tekne bakım & onarımı",
            subtitle: "Tekne Bakım & Onarımı, deniz araçlarınızın uzun ömürlü ve güvenli kalmasını sağlamak için profesyonel hizmetler sunar. Düzenli bakım ve onarımla teknelerinizin performansını en üst seviyede tutar.",
            image: Ourworks_6.src
        }


    ]

    return (
        <Layout>
            <section className="parallax-header valign bg-img" data-overlay-dark="6" style={{backgroundImage:`url(${Banner.src})`}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center mt-60">
                            <h1><span>Yaratıcı</span><br />Çözümler</h1>
                            <p>Hareketli objeler ve mekanik temalar, projelerinize dinamik ve ilgi çekici bir boyut kazandırır. Bu öğeler, mekanlarda estetik ve işlevselliği bir araya getirerek görsel ve fonksiyonel zenginlik sağlar. </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="line-vr-section"></div>

            <section className="services section-padding" >
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-md-12 text-center">
                            <h6 className="wow" data-splitting="">Ne Yapıyoruz</h6>
                            <h1 className="wow" data-splitting="">Hizmetlerimiz</h1>
                            <div className="line-hr-section center"></div>
                        </div>
                    </div>
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
                                                <div className="numb">0{x+1}</div>
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

            <section className="works section-padding bg-drk">
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-md-12 text-center">
                            <h6 className="wow" >Portföy & Proje</h6>
                            <h1 className="wow cw">Çalışmalarımızdan Bazıları</h1>
                            <div className="line-hr-section center"></div>
                        </div>
                    </div>
                </div>
                <div className="full-width">
                    <div className="row">
                        <div className="col-md-12">
                            <Swiper
                                loop={true}
                                modules={[Autoplay]}
                                autoplay={{ delay: 2500 }}
                                className="slider-arrows"
                                breakpoints={{
                                    300: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    400: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    525: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    578: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                }}
                            >
                                {
                                    (Portfoy || []).map((d: any, x: number) => {
                                        return (
                                            <SwiperSlide>
                                                <div className="wrap img-grayscale">
                                                    <div className="img img-grayscale"> <img src={d.image} className="img-fluid" /> </div>
                                                    <div className="text">
                                                        <a href="services-single.html">
                                                            <h4 className="mb-0" style={{ color: "#fff" }}>Business Card</h4>
                                                            <p>Cretive & Desing</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                            <div className="owl-carousel owl-theme" hidden>
                                <div className="item">

                                </div>
                                <div className="item">
                                    <div className="wrap img-grayscale">
                                        <div className="img img-grayscale"> <img src="images/work/2.jpg" className="img-fluid" /> </div>
                                        <div className="text">
                                            <h4>Exterior Design</h4>
                                            <p>Architecture</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap img-grayscale">
                                        <div className="img img-grayscale"> <img src="images/work/3.jpg" className="img-fluid" /> </div>
                                        <div className="text">
                                            <a href="services-single.html">
                                                <h4>Grand Canyon</h4>
                                                <p>Branding</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap img-grayscale">
                                        <div className="img img-grayscale"> <img src="images/work/4.jpg" className="img-fluid" /> </div>
                                        <div className="text">
                                            <a href="services-single.html">
                                                <h4>Power Up Drive</h4>
                                                <p>Web Design</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap img-grayscale">
                                        <div className="img img-grayscale"> <img src="images/work/5.jpg" className="img-fluid" /> </div>
                                        <div className="text">
                                            <a href="services-single.html">
                                                <h4>T-shirt Design</h4>
                                                <p>Branding</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap img-grayscale">
                                        <div className="img img-grayscale"> <img src="images/work/6.jpg" className="img-fluid" /> </div>
                                        <div className="text">
                                            <a href="services-single.html">
                                                <h4>Brochure Design</h4>
                                                <p>Branding</p>
                                            </a>
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

export default Index;