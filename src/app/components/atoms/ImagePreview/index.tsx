import { useImageUpload } from "@/src/app/hooks/context/useImageUpload";
import Image from "next/image";

const ImagePreview = () => {
	const { file } = useImageUpload();
	return (
		<div className={"m-3.5"}>
			<Image
				src={URL.createObjectURL(file)}
				alt="Uploaded File"
				width={350}
				height={200}
				className={'object-cover'}
			/>
		</div>
	);
};

export default ImagePreview;
