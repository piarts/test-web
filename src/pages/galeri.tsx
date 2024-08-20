import Navigation from "@/module/navigation";
import Layout from "./layout";
import Banner from "@/assets/images/banner/banner_1.jpg"


import Gal1 from "@/assets/images/galery/1.jpg"
import Gal2 from "@/assets/images/galery/2.jpg"
import Gal3 from "@/assets/images/galery/3.jpg"
import Gal4 from "@/assets/images/galery/4.jpg"
import Gal5 from "@/assets/images/galery/5.jpg"
import Gal6 from "@/assets/images/galery/6.jpg"
import Gal7 from "@/assets/images/galery/7.jpg"
import Gal8 from "@/assets/images/galery/8.jpg"
import Gal9 from "@/assets/images/galery/9.jpg"
import Gal10 from "@/assets/images/galery/10.jpg"
import Gal16 from "@/assets/images/galery/16.jpg"
import Gal17 from "@/assets/images/galery/17.jpg"
import Gal18 from "@/assets/images/galery/18.jpg"
import Gal19 from "@/assets/images/galery/19.jpg"
import Gal20 from "@/assets/images/galery/20.jpg"
import Gal21 from "@/assets/images/galery/21.jpg"
import Gal22 from "@/assets/images/galery/22.jpg"
import Gal23 from "@/assets/images/galery/23.jpg"
import Gal24 from "@/assets/images/galery/24.jpeg"
import Gal25 from "@/assets/images/galery/25.jpg"
import Gal44 from "@/assets/images/galery/44.jpg"
import Gal45 from "@/assets/images/galery/45.jpg"
import Gal46 from "@/assets/images/galery/46.jpg"
import Gal47 from "@/assets/images/galery/47.jpg"
import Gal48 from "@/assets/images/galery/48.jpg"
import Gal49 from "@/assets/images/galery/49.jpg"
import Gal52 from "@/assets/images/galery/52.jpg"
import Gal53 from "@/assets/images/galery/53.jpeg"
import Gal54 from "@/assets/images/galery/54.jpg"
import Gal55 from "@/assets/images/galery/55.jpg"

import Gal56 from "@/assets/images/galery/52.jpg"
import Gal57 from "@/assets/images/galery/52.jpg"
import Gal58 from "@/assets/images/galery/52.jpg"
import Gal59 from "@/assets/images/galery/52.jpg"
import Gal60 from "@/assets/images/galery/52.jpg"
import Gal61 from "@/assets/images/galery/52.jpg"
import Gal62 from "@/assets/images/galery/52.jpg"
import Gal63 from "@/assets/images/galery/52.jpg"
import Gal64 from "@/assets/images/galery/52.jpg"

import Gal65 from "@/assets/images/galery/65.jpeg"
import Gal66 from "@/assets/images/galery/66.jpeg"
import Gal67 from "@/assets/images/galery/67.jpeg"
import Gal68 from "@/assets/images/galery/68.jpeg"
import Gal69 from "@/assets/images/galery/69.jpeg"
import Gal70 from "@/assets/images/galery/70.jpeg"
import Gal71 from "@/assets/images/galery/71.jpeg"




function Galeri() {



    const RefGalery = [
        {
            image: Gal1.src
        },
        {
            image: Gal2.src
        },
        {
            image: Gal3.src
        },
        {
            image: Gal4.src
        },
        {
            image: Gal5.src
        },
        {
            image: Gal6.src
        },
        {
            image: Gal7.src
        },
        {
            image: Gal8.src
        },
        {
            image: Gal9.src
        },
        {
            image: Gal10.src
        },
        {
            image: Gal16.src
        },
        {
            image: Gal17.src
        },
        {
            image: Gal18.src
        },
        {
            image: Gal19.src
        },
        {
            image: Gal20.src
        },
        {
            image: Gal21.src
        },
        {
            image: Gal22.src
        },
        {
            image: Gal23.src
        },
        {
            image: Gal24.src
        },
        {
            image: Gal25.src
        },
        {
            image: Gal44.src
        },
        {
            image: Gal45.src
        },
        {
            image: Gal46.src
        },
        {
            image: Gal47.src
        },
        {
            image: Gal48.src
        },
        {
            image: Gal49.src
        },
        {
            image: Gal52.src
        },
        {
            image: Gal53.src
        },
        {
            image: Gal54.src
        },
        {
            image: Gal55.src
        },
        {
            image: Gal56.src
        },
        {
            image: Gal57.src
        },
        {
            image: Gal58.src
        },
        {
            image: Gal59.src
        },
        {
            image: Gal60.src
        },
        {
            image: Gal61.src
        },
        {
            image: Gal62.src
        },
        {
            image: Gal63.src
        },
        {
            image: Gal64.src
        },
        {
            image: Gal65.src
        },
        {
            image: Gal66.src
        },
        {
            image: Gal67.src
        },
        {
            image: Gal68.src
        },
        {
            image: Gal69.src
        },
        {
            image: Gal70.src
        },
        {
            image: Gal71.src
        }
    ]

    return (
        <Layout>
            <Navigation page="Galeri" image={Banner.src} />
            <section className="section-padding">
                <div className="container">
                    <div className="row gallery-items">
                        {
                            (RefGalery || []).map((d: any, x: number) => {
                                return (
                                    <div className="col-lg-4 col-md-6 single-item branding mb-25">
                                        <div title="" className="img-zoom">
                                            <div className="gallery-box">
                                                <div className="gallery-img img-grayscale" style={{ backgroundImage: `url(${d.image})`, height: "350px", width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
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

export default Galeri;