"use client";
import ImagePreview from "@/src/app/components/atoms/ImagePreview";
import {
	DraggableImageUpload,
	ManualFileUpload,
} from "@/src/app/components/molecules/FileUpload";
import { useImageUpload } from "@/src/app/hooks/context/useImageUpload";

const ImageUpload = () => {
	const { file } = useImageUpload();
	return (
		<section className="h-96 flex flex-col justify-center items-center">
			<DraggableImageUpload />
			{file && <ImagePreview />}
			<ManualFileUpload />
		</section>
	);
};

export default ImageUpload;
