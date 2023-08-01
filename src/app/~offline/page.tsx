import { css } from "../../../styled-system/css";
import { vstack } from "../../../styled-system/patterns";

export default function Offline() {
	return (
		<div className={vstack({ w: "full", h: "full", alignItems: "center", justify: "center", gap: 4 })}>
			<h1 className={css({ fontSize: "2xl" })}>オフライン</h1>
			<p>インターネットに接続してください</p>
		</div>
	);
}
