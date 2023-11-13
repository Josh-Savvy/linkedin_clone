import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import * as Icons from "../../atoms/common/icons";
import CustomIconProps from "../../../../interfaces/icon.interface";
import classNames from "classnames";

const Navbar = () => {
	const location = useLocation();

	// useAlertNotification({
	// 	message: "Hello World",
	// 	type: "warning",
	// });
	const [active, setActive] = useState<string>(navLinks[0].name);
	const excludedPaths: string[] = [];
	const hideNavSections: boolean = excludedPaths.some((path) =>
		location.pathname.includes(path),
	);

	return (
		<div className="flex items-center gap-6 sticky top-0 z-50 w-full bg-white shadow-lg shadow-[#5978961A] sm:px-10 lg:px-16 divide-x divide-zinc-200">
			<div className="pr-5 md:pr-10 py-5">
				<svg
					width="46"
					height="46"
					viewBox="0 0 46 46"
					fill="none"
					className="cursor-pointer">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M2.5262 2.5262C0 5.05241 0 9.11827 0 17.25V28.75C0 36.8817 0 40.9476 2.5262 43.4738C5.05241 46 9.11827 46 17.25 46H28.75C36.8817 46 40.9476 46 43.4738 43.4738C46 40.9476 46 36.8817 46 28.75V17.25C46 9.11827 46 5.05241 43.4738 2.5262C40.9476 0 36.8817 0 28.75 0H17.25C9.11827 0 5.05241 0 2.5262 2.5262ZM11.4811 14.4099C9.58715 14.4099 8.05 12.8571 8.05 10.9425C8.05 9.02789 9.58715 7.475 11.4811 7.475C13.3751 7.475 14.9123 9.02789 14.9123 10.9425C14.9123 12.8571 13.3771 14.4099 11.4811 14.4099ZM8.54016 38.525V16.9024H14.4221V38.525H8.54016ZM32.068 38.525H37.95V25.2389C37.95 14.9132 26.9644 15.2886 24.2254 20.3719V16.9024H18.3434V38.525H24.2254V27.5093C24.2254 21.3901 32.068 20.8889 32.068 27.5093V38.525Z"
						fill="url(#paint0_linear_3015_361)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_3015_361"
							x1="23"
							y1="0"
							x2="23"
							y2="46"
							gradientUnits="userSpaceOnUse">
							<stop stop-color="#0077B5" />
							<stop offset="1" stop-color="#0E6795" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div className="flex gap-8 items-center px-5 md:px-10 py-5">
				{navLinks.map((nav) => {
					interface IconType {
						[key: string]: React.ElementType<CustomIconProps>;
					}
					const MappedIcon: IconType = Icons;
					const IconComp = MappedIcon[nav.icon];

					return (
						<div
							key={nav.name}
							className={classNames(
								"cursor-pointer flex flex-col items-center relative",
								active === nav.name ? "text-[#0275B1]" : "",
							)}>
							<IconComp
								color={active === nav.name ? "#0275B1" : ""}
								size={30}
							/>
							<p className="uppercase text-xs">{nav.name}</p>
							{active === nav.name && (
								<div className="absolute -bottom-3 w-full h-[2.5px] bg-[#0275B1] duration-300" />
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

const navLinks: { path: string; name: string; icon: string }[] = [
	{
		icon: "RssFeedCustomIcon",
		name: "Feed",
		path: "#",
	},
	{
		icon: "UsersCustomIcon",
		name: "Network",
		path: "#",
	},
	{
		icon: "BriefCaseIcon",
		name: "Jobs",
		path: "#",
	},
	{
		icon: "ChatIcon",
		name: "Messages",
		path: "#",
	},
	{
		icon: "NotificationIcon",
		name: "Notices",
		path: "#",
	},
];

export default Navbar;
