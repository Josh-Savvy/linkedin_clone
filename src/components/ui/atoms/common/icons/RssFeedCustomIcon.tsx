import CustomIconProps from "../../../../../interfaces/icon.interface";

export default function (props: CustomIconProps) {
	const { size, color, ...rest } = props;
	return (
		<svg
			width={size || "24"}
			height={size || "24"}
			viewBox="0 0 24 24"
			fill="none"
			{...rest}>
			<path
				d="M4 11C6.38695 11 8.67613 11.9482 10.364 13.636C12.0518 15.3239 13 17.6131 13 20"
				stroke={color || "#181818"}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M4 4C8.24346 4 12.3131 5.68571 15.3137 8.68629C18.3143 11.6869 20 15.7565 20 20"
				stroke={color || "#181818"}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20Z"
				stroke={color || "#181818"}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}
