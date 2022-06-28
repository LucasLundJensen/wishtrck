import AuthenticatedLayout from "../../../layouts/AuthenticatedLayout";

function EventPage() {
	return (
		<div>
			<p>Event</p>
			<p>Page</p>
		</div>
	);
}

EventPage.getLayout = function (page: any) {
	return <AuthenticatedLayout>{page}</AuthenticatedLayout>;
};

export default EventPage;
