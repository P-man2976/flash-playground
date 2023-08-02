import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { TbLayoutGrid, TbLayoutList, TbListDetails } from "react-icons/tb";
import { CardSize } from "../GameList";
import { hstack } from "../../../styled-system/patterns";
import { ReactNode } from "react";
import { css } from "../../../styled-system/css";

export default function SizeToggle({ size, onChange }: { size: CardSize; onChange: (value: CardSize) => void }) {
	return (
		<ToggleGroup.Root
			className={hstack({
				bg: 'white',
				p: 2,
				rounded: "lg",
				shadow: "sm",
				gap: 1
			})}
			type="single"
			value={size}
			onValueChange={onChange}
		>
			<ToggleItem value="sm">
				<TbListDetails  />
			</ToggleItem>
			<ToggleItem value="md">
				<TbLayoutList />
			</ToggleItem>
			<ToggleItem value="lg">
				<TbLayoutGrid />
			</ToggleItem>
		</ToggleGroup.Root>
	);
}

function ToggleItem({ value, children }: { value: string; children: ReactNode }) {

	return (
		<ToggleGroup.Item
			value={value}
			className={css({
				p: 2,
				color: "black",
				rounded: "md",
				transition: "all .2s ease",
				_hover: {
					bg: "neutral.200",
					cursor: "pointer",
				},
				"&[data-state=on]": {
					bg: "neutral.100",
				},
			})}
		>
			{children}
		</ToggleGroup.Item>
	);
}
