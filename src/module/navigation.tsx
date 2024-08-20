export default function Navigation({ image, page }: { image: string, page: string }) {

    return (
        <>
            <section className="banner-header section-padding bg-img bg-fixed bg-img-position-top" style={{ backgroundImage: `url(${image})` }}>
                <div className="v-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center mt-60">
                                <h1>{page}</h1>
                                <ul className="breadcrumbs">
                                    <li><a href="/">Anasayfa</a></li>
                                    <li>{page}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}