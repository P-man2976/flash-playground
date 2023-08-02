import * as Select from "@radix-ui/react-select";
import { TbChevronDown, TbSortAscendingLetters, TbSortDescendingLetters, TbHeart, TbCheck } from "react-icons/tb";
import { GameSort } from "../GameList";
import { css } from "../../../styled-system/css";
import { hstack, vstack } from "../../../styled-system/patterns";
import { ReactNode } from "react";

export default function SortSelect({ sort, onChange }: { sort: GameSort; onChange: (val: GameSort) => void }) {
	return (
		<Select.Root value={sort} onValueChange={onChange}>
			<Select.Trigger
				className={hstack({
					bg: "white",
					color: 'black',
					p: 2,
					px: 4,
					minWidth: 32,
					justify: "space-between",
					rounded: "lg",
					shadow: "sm",
					cursor: "pointer",
				})}
			>
				<Select.Value />
				<Select.Icon>
					<TbChevronDown />
				</Select.Icon>
			</Select.Trigger>

			<Select.Portal>
				<Select.Content
					className={css({
						bg: "white",
						minW: 40,
						shadow: "lg",
						rounded: "xl",
						overflow: "hidden",
					})}
					position="popper"
				>
					<Select.ScrollUpButton />
					<Select.Viewport>
						<SelectItem value="ascend" text="昇順" icon={<TbSortAscendingLetters />} />
						<SelectItem value="descend" text="降順" icon={<TbSortDescendingLetters />} />
						<SelectItem value="liked" text="いいね順" icon={<TbHeart />} />
					</Select.Viewport>
					<Select.ScrollDownButton />
					<Select.Arrow />
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	);
}

function SelectItem({ value, icon, text }: { value: string; icon: ReactNode; text: string }) {
	return (
		<Select.Item
			value={value}
			className={hstack({
				position: "relative",
				w: "full",
				px: 4,
				pl: 12,
				py: 2,
				borderBottom: "1px solid",
				borderColor: "neutral.100",
				transition: "all .2s ease",
				_last: { border: "none" },
				_hover: {
					bg: "neutral.200",
					outline: "none",
					cursor: "pointer",
				},
			})}
		>
			<Select.ItemIndicator className={css({ display: "inline-flex", position: "absolute", left: 0, px: 4 })}>
				<TbCheck />
			</Select.ItemIndicator>
			<Select.ItemText className={css({ fontWeight: "bold" })}>{text}</Select.ItemText>
		</Select.Item>
	);
}
