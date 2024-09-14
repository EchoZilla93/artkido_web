import Header from "@/src/app/components/organisms/Header";

const PageContainer = ({ children }: PropsWithChildren) => {
	return (
		<div className={"h-full w-full bg-white"}>
			<Header />
			{children}
		</div>
	);
};

export default PageContainer;
