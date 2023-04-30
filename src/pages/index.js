import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Link href="/dashboard">
				<button className="btn btn-secondary">tes</button>
			</Link>
			<a></a>
		</>
	);
}
