import clsx from "clsx";

interface Props {
	className?: string;
}

function Divider(props: Props) {
	return <div className={clsx("h-[1px] bg-[#464646]", props.className)}></div>;
}

export default Divider;
