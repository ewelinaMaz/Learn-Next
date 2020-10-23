import Link from "next/link";

const Navbar = () => {
    const styles = {
        display: "flex",
        background: "grey",
        justifyContent: "Space-between",
        padding: "0 15px",
        alignItems: "Center",
        height: "80px"
    };
    return (
        <div style={styles}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </div>
    );
};
export default Navbar;