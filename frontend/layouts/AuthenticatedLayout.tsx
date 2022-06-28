import AuthenticatedNavbar from "../components/Navbar/AuthenticatedNavbar";

interface Props {
	children: any;
}

export default function AuthenticatedLayout(props: Props) {
	return (
		<>
			<AuthenticatedNavbar />
			{props.children}
		</>
	);
}
