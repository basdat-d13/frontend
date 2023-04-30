import React from "react";

const NavbarPelatih = () => {
	return (
		<div className="navbar bg-base-400 flex flex-row justify-between">
			<div className="navbar-start ml-4">
				<h1 className="text-xl font-bold">PELATIH</h1>
			</div>
			<div className="navbar-center flex">
				<a className="mr-2">
					<button className="btn btn-ghost hover:bg-slate-700">Dashboard</button>
				</a>
				<a className="mr-2">
					<button className="btn btn-ghost hover:bg-slate-700">Daftar Atlet</button>
				</a>
				<a className="mr-2">
					<button className="btn btn-ghost hover:bg-slate-700">List Atlet</button>
				</a>
			</div>
			<div className="navbar-end mr-4">
				<a className="btn bg-red-700 hover:bg-red-500">Logout</a>
			</div>
		</div>
	);
};

export default NavbarPelatih;
