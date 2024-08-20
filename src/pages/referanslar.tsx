import Navigation from "@/module/navigation";
import Layout from "./layout";

import Banner from "@/assets/images/banner/banner_1.jpg"


import Galery_1 from "@/assets/images/referances/ref-1.png"
import Galery_2 from "@/assets/images/referances/ref-2.svg"
import Galery_3 from "@/assets/images/referances//ref-3.webp"
import Galery_4 from "@/assets/images/referances/ref-4.png"
import Galery_5 from "@/assets/images/referances/ref-5.png"
import Galery_6 from "@/assets/images/referances/ref-6.png"
import Galery_7 from "@/assets/images/referances/ref-7.webp"
import Galery_8 from "@/assets/images/referances/ref-8.png"

function Referanslar() {

    const RefData = [

        {
            id: 1,
            title: "Land Of Lagends",
            location: "Kadriye"
        },

        {
            id: 2,
            title: "Vouge Otel",
            location: "Bodrum"
        },
        {
            id: 3,
            title: "Maxx Royel Otem ",
            location: "Kemer"
        },
        {
            id: 4,
            title: "YDA inşaat",
            location: "Antalya"
        },
        {
            id: 5,
            title: "Kontio House",
            location: "Antalya"
        },
        {
            id: 6,
            title: "Çamlıca Kulesi Uzay Üssü ",
            location: "İstanbul"
        },
        {
            id: 7,
            title: "Kervan saray Otel",
            iamge: "Kazakistan"
        },
        {
            id: 8,
            title: "Aktau Tema park",
            location: "Antalya"
        },
        {
            id: 8,
            title: "Türkistan Havalimanı",
            location: "Türkistan"
        }
    ]
    return (
        <Layout>
            <Navigation page="Referanslar" image={Banner.src} />
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>
                                Referanslarımız, yıllardır edindiğimiz deneyim ve başarılarla şekillenen güçlü işbirliklerimizin bir yansımasıdır. Her projede kalite, güven ve müşteri memnuniyetini ön planda tutarak, sektörde kalıcı izler bırakmayı başardık. İşte bu güvenilir iş ortaklarımız ve tamamladığımız projeler, başarımızın en somut göstergeleridir.
                            </p>
                        </div>
                        {
                            (RefData || []).map((d: any, x: number) => {
                                return (
                                    <div className="col-lg-6 col-md-6" key={`key-galery-list-${d.id}-list-${x}`}>
                                        <div className="border mb-5 mt-2 p-3">
                                            <div title="" className="img-zoom">
                                                <div className="text-white mb-3 mt-3">
                                                    <h4 style={{ color: "#fff" }}>{d.title}</h4>
                                                </div>
                                                <div className="text-white mb-3 mt-3">
                                                    <h6 style={{ color: "#fff" }}>{d.location}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Referanslar;