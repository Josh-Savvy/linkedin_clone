import React from "react";
import classNames from "classnames";
import ICustomButtonProps from "../../../../interfaces/button.interface";

const PrimaryButton = (props: ICustomButtonProps) => {
	const { className, buttonText, disabled, icon, type, ...rest } = props;
	return (
		<button
			type={type}
			{...rest}
			disabled={disabled}
			className={classNames(
				"text-white bg-indigo-600 p-2 px-6 rounded w-full text-center",
				icon ? "flex gap-4 items-center" : "",
				disabled ? "cursor-not-allowed" : "",
				className,
			)}>
			{icon ? icon : null} {buttonText}
		</button>
	);
};

export default PrimaryButton;
