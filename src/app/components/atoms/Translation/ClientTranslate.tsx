"use client";
import type { TranslationValues } from "use-intl";
import { useTranslations } from "use-intl";

interface ServerTranslateProps {
	group: string;
	name: string;
}

const ClientTranslate = ({ group, name }: ServerTranslateProps) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	const t = useTranslations(group);
	return t(name, group as TranslationValues);
};
export default ClientTranslate;
