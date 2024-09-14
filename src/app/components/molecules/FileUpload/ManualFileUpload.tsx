import Camera from "@/src/app/assets/icons/Camera";
import { fileTypes } from "@/src/app/common/constants";
import PrimaryButton from "@/src/app/components/atoms/PrimaryButton";
import { ClientTranslate } from "@/src/app/components/atoms/Translation";
import { useImageUpload } from "@/src/app/hooks/context/useImageUpload";

const ManualFileUpload = () => {
	const {
		fileInputRef,
		handleInputChange,
		handleButtonClick,
		isClearButtonDisabled,
		handleClear,
	} = useImageUpload();
	return (
		<form className={'w-1/2 flex justify-center'}>
			<input
				type="file"
				ref={fileInputRef}
				style={{ display: "none" }}
				accept={fileTypes.map((type) => `.${type.toLowerCase()}`).join(",")}
				onChange={handleInputChange}
			/>
			<div className="flex flex-col justify-center w-80 mt-6">
				<PrimaryButton
					className="hover:text-white mb-2"
					type="button"
					onClick={handleButtonClick}
					color="success"
					icon={<Camera/>}
				>
					{ClientTranslate({group: "home", name: "upload_file"})}
				</PrimaryButton>
				<span className={'m-1'}/>
				<PrimaryButton
					className={"text-white"}
					isDisabled={isClearButtonDisabled}
					color={isClearButtonDisabled ? "default" : "danger"}
					onClick={handleClear}
				>
					{ClientTranslate({group: "home", name: "clear_file"})}
				</PrimaryButton>
			</div>
		</form>
	);
};

export default ManualFileUpload;
