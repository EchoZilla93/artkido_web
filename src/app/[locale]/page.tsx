import Camera from "@/src/app/assets/icons/Camera";
import { PageContainer } from "@/src/app/common/containers";
import PrimaryButton from "@/src/app/components/atoms/PrimaryButton";
import { getTranslations } from "next-intl/server";
export default async function Home() {
	const t = await getTranslations("home");
	return (
		<PageContainer>
			<PrimaryButton
				className={"hover:text-white"}
				color="success"
				icon={<Camera />}
				oncClick={() => 1}
			>
				{t("upload_file")}
			</PrimaryButton>
		</PageContainer>
	);
}
