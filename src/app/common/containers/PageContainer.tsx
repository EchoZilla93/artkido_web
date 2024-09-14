import Header from "@/src/app/components/organisms/Header";
import {PropsWithChildren} from "react";

const PageContainer = ({ children }: PropsWithChildren) => {
	return (
		<div className={"h-screen w-screen bg-white"}>
			<Header />
			{children}
		</div>
	);
};

export default PageContainer;
