import NavbarAtlet from "@/components/Navbar/NavbarAtlet";
import NavbarPelatih from "@/components/Navbar/NavbarPelatih";
import NavbarUmpire from "@/components/Navbar/NavbarUmpire";
import React, { useState } from "react";

const Dashboard = () => {
	const [user, setUser] = useState("ATLET");

	const getNavbarUser = (user) => {
		switch (user) {
			case "ATLET":
				return <NavbarAtlet />;
			case "PELATIH":
				return <NavbarPelatih />;
			case "UMPIRE":
				return <NavbarUmpire />;
			default:
				return <h1>restricted</h1>;
		}
	};

	return (
		<>
			{getNavbarUser("ATLET")}
			<></>
		</>
	);
};

export default Dashboard;
