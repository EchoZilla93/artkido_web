import { Button } from "@nextui-org/react";
import type React from "react";

interface PrimaryButton {
	children: React.ReactNode;
	oncClick: () => void;
	color:
		| "default"
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "danger"
		| undefined;
	className?: string;
	icon?: React.ReactNode;
}

const PrimaryButton = ({
	children,
	onClick,
	className,
	icon,
	color,
}: PrimaryButton) => {
	return (
		<Button
			className={className}
			color={color}
			onClick={onClick}
			endContent={icon}
		>
			{children}
			<icon />
		</Button>
	);
};

export default PrimaryButton;
