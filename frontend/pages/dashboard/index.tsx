import Head from "next/head";
import Link from "next/link";
import EmptyCard from "../../components/Cards/EmptyCard";
import EventCard from "../../components/Cards/EventCard";
import PlusIcon from "../../components/Icons/PlusIcon";
import AuthenticatedLayout from "../../layouts/AuthenticatedLayout";
import * as TestData from "../../TestData";

function Dashboard() {
	return (
		<div>
			<Head>
				<title>Wishlist Tracker - Dashboard</title>
			</Head>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-dark-800 px-2 py-4">
				<EventCard event={TestData.TestChristmasEvent} />
				<EventCard event={TestData.TestBirthdayEvent} />
				<EmptyCard>
					<Link href="/dashboard/event/new">
						<a className="flex-1 text-blue-light font-medium text-xl hover:text-sky-400">
							<div className="flex flex-col items-center justify-center h-full">
								<PlusIcon className="w-8 h-8" />
								<p>New event</p>
							</div>
						</a>
					</Link>
				</EmptyCard>
			</div>
		</div>
	);
}

Dashboard.getLayout = function getLayout(page: any) {
	return <AuthenticatedLayout>{page}</AuthenticatedLayout>;
};

export default Dashboard;
