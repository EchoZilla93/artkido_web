import { PageContainer } from "@/src/app/common/containers";
import ImageUpload from "@/src/app/components/organisms/ImageUpload";
import { ImageUploadProvider } from "@/src/app/hooks/context/useImageUpload";
export default async function Home() {
	return (
		<PageContainer>
			<ImageUploadProvider>
				<ImageUpload />
			</ImageUploadProvider>
		</PageContainer>
	);
}
