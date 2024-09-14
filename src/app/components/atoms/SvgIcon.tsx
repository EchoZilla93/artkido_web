const SvgIcon = ({ className, id }) => (
	<svg className={className}>
		<use xlinkHref={`/assets/icons/icons.svg#${id}`} />
	</svg>
);

export default SvgIcon;
