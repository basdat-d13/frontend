import Image from "next/image";
import { Inter } from "next/font/google";
import NavbarAtlet from "@/components/Navbar/NavbarAtlet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<NavbarAtlet />
		</>
	);
}
