import Footer from "@/module/footer";
import Header from "@/module/header";
import { useEffect } from "react";





export default function Layout({ children }: any) {


    useEffect(() => {

        document.body.setAttribute("style", "background:#000")
    }, [])

    return (
        <>
            <Header />
            {children}

            <Footer />
        </>
    )
}
