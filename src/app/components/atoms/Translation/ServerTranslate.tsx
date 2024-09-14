import { getTranslations } from "next-intl/server";

interface ServerTranslateProps {
	groupe: string;
	name: string;
}

const ServerTranslate = async ({ groupe, name }: ServerTranslateProps) => {
	const t = await getTranslations(groupe);
	return t(name, groupe);
};
export default ServerTranslate;
