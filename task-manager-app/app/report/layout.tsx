export default function ReportLayout({
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