import classNames from "classnames";
import React, {
	FormEvent,
	ForwardedRef,
	HtmlHTMLAttributes,
	forwardRef,
} from "react";

interface SearchBarInputProps extends HtmlHTMLAttributes<HTMLInputElement> {
	containterProps?: HtmlHTMLAttributes<HTMLFormElement>;
}

const SearchBarInput = forwardRef(function SearchBarInput(
	props: SearchBarInputProps,
	ref: ForwardedRef<HTMLInputElement>,
) {
	const { className: containerClass, ...containerRest } =
		props?.containterProps || {};
	const { className, ...rest } = props;
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};
	return (
		<form
			onSubmit={handleSubmit}
			className={classNames(
				"flex w-full bg-[red] h-full min-h-[40px]",
				containerClass,
			)}
			{...containerRest}>
			<input
				ref={ref}
				className={classNames(
					"bg-transparent outline-none focus:ring-0 h-full",
					className,
				)}
				{...rest}
			/>
		</form>
	);
});

export default SearchBarInput;
