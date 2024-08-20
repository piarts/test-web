import Footer from "@/module/footer";
import Header from "@/module/header";





export default function Layout({ children }: any) {


    return (
        <>
            <Header />
            {children}

            <Footer />
        </>
    )
}
