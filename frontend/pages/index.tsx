import Head from "next/head";
import LandingLayout from "../layouts/LandingLayout";

function Home() {
	return (
		<div className="bg-dark-900">
			<div>
				<Head>
					<title>Wishlist Tracker</title>
					<meta name="description" content="Wishlist Tracker" />
					<link rel="icon" href="/favicon.ico" />
					<meta name="author" content="Lucas Lund Jensen" />
				</Head>
			</div>
		</div>
	);
}

Home.getLayout = function getLayout(page: any) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default Home;
