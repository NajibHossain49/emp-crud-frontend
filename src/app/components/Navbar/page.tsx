import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link href="/" style={styles.link}>Home</Link>
      <Link href="/employees" style={styles.link}>Employees</Link>
      <Link href="/employees/create" style={styles.link}>Add Employee</Link>
      <Link href="/login" style={styles.link}>Login</Link>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-around",
    padding: "15px",
    backgroundColor: "#333",
    color: "#fff",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
};
