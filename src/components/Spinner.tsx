import { CircleOptions, circle } from "../../styled-system/patterns";

export default function Spinner(props: CircleOptions) {
	return (
		<div
			className={circle({
				size: 12,
				borderY: "4px solid #fff1",
				borderRight: "4px solid #fff1",
				borderLeft: "4px solid #fff",
				animation: "loading 1.1s infinite linear",
				...props,
			})}
		/>
	);
}
