import { fileTypes } from "@/src/app/common/constants";
import { useImageUpload } from "@/src/app/hooks/context/useImageUpload";
import { FileUploader } from "react-drag-drop-files";

const DraggableImageUpload = () => {
	const { label, handleImageUpload } = useImageUpload();
	return (
		<div className="m-3.5 w-full flex justify-center">
			<FileUploader
				classes="h-64"
				label={label}
				handleChange={handleImageUpload}
				name="file"
				types={fileTypes}
			/>
		</div>
	);
};

export default DraggableImageUpload;
