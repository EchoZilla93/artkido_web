import { APP_LOGO_CHARS } from "@/src/app/common/contants/app";
import { APP_PATH } from "@/src/app/common/contants/path";
import Link from "next/link";

const AppLogo = () => {
	const renderLogo = () => {
		const randomHexColor = () => {
			const hex = Math.floor(Math.random() * 0xffffff).toString(16);
			return `#${hex.padStart(6, "0")}`;
		};
		return APP_LOGO_CHARS.map((letter) => {
			const color = randomHexColor();
			return (
				<h1
					key={`${letter}-${color}`}
					style={{ color, fontFamily: '"Handjet", sans-serif' }}
					className="text-4xl font-bold cursor-pointer transition-all"
				>
					{letter}
				</h1>
			);
		});
	};

	return (
		<Link href={APP_PATH.HOME_PAGE} className={"flex w-3"}>
			{renderLogo()}
		</Link>
	);
};

export default AppLogo;
