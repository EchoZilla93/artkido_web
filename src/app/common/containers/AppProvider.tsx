import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { PropsWithChildren } from "react";

const AppProvider = async ({ children }: PropsWithChildren) => {
	const messages = await getMessages();
	return (
		<NextIntlClientProvider messages={messages}>
			<NextUIProvider>{children}</NextUIProvider>
		</NextIntlClientProvider>
	);
};

export default AppProvider;
