import React from "react";
import useAlertNotification from "../../../../hooks/useToast";
import FestivalIcon from "@mui/icons-material/Festival";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const location = useLocation();
	// useAlertNotification({
	// 	message: "Hello World",
	// 	type: "warning",
	// });

	const excludedPaths: string[] = [];
	const hideNavSections: boolean = excludedPaths.some((path) =>
		location.pathname.includes(path),
	);
	return (
		<div className="flex sticky top-0 z-50 w-full bg-black p-4 sm:px-10 lg:px-20 border-b-2 border-indigo-500/80">
			
		</div>
	);
};

export default Navbar;
