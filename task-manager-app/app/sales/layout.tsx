export default function SalesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <nav></nav>

            {children}
        </section>
    )
}