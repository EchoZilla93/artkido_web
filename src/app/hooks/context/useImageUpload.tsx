"use client";
import { ClientTranslate } from "@/src/app/components/atoms/Translation";
import {
	type ReactNode,
	createContext,
	useContext,
	useRef,
	useState,
} from "react";

interface ImageUploadContextType {
	file: File | null;
	isClearButtonDisabled: boolean;
	handleClear: () => void;
	label: string;
	handleImageUpload: (file: File) => void;
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleButtonClick: () => void;
}

const ImageUploadContext = createContext<ImageUploadContextType | undefined>(
	undefined,
);

export const ImageUploadProvider = ({ children }: { children: ReactNode }) => {
	const [file, setFile] = useState<File | null>(null);
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const handleImageUpload = (file: File) => setFile(file);

	const handleButtonClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0];
		if (selectedFile) {
			handleImageUpload(selectedFile);
		}
	};

	const label = ClientTranslate({ group: "home", name: "upload_file_area" });
	const handleClear = () => setFile(null);
	const isClearButtonDisabled = file === null;

	return (
		<ImageUploadContext.Provider
			value={{
				file,
				fileInputRef,
				isClearButtonDisabled,
				handleClear,
				label,
				handleImageUpload,
				handleInputChange,
				handleButtonClick,
			}}
		>
			{children}
		</ImageUploadContext.Provider>
	);
};

export const useImageUpload = () => {
	const context = useContext(ImageUploadContext);
	if (context === undefined) {
		throw new Error(
			"useImageUpload must be used within an ImageUploadProvider",
		);
	}
	return context;
};
