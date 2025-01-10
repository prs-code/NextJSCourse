import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="main-next-container">
      <h2 className="next-title">Next JS Learning ...</h2>
      <Link href="/SSG">
        <FaArrowRightLong className="link-pages-icon" />
        Go To SSG Page
      </Link>
      <Link href="/ISR">
        <FaArrowRightLong className="link-pages-icon" />
        Go To ISR Page
      </Link>
    </div>
  )
}
