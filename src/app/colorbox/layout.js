
export default function ColorBoxLayout({ children, left, right }) {
    const issidebar = true
    return (
        <section>
            {children}
            {/* {left} */}
            {issidebar ? left : right}
        </section >
    )
}