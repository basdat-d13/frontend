import { Inter } from "next/font/google";
import Link from "next/link";
import getNavbarUser from "@/utils/getNavbarUser";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const user = "ATLET";

	return (
		<>
			{getNavbarUser(user)}
			<Link href="/dashboard">
				<button className="btn btn-secondary">dashboard</button>
			</Link>
		</>
	);
}
