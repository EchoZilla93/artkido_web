import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/src/app/common/containers";
import type React from "react";

export const metadata: Metadata = {
	title: "Artkido",
	description: "Generate arts from your sketches",
};

export default async function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return (
		<html lang={locale}>
			<body>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
