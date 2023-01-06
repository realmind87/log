import Header from "@/components/common/Header"

export default function Layout({ children }) {
    return (
        <div className="wrap">
            <Header />
            <section className="container">
                <main>{children}</main>
            </section>
        </div>
    )
}