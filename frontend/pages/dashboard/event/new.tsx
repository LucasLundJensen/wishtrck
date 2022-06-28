import EmptyCard from "../../../components/Cards/EmptyCard";
import ConfettiIcon from "../../../components/Icons/ConfettiIcon";
import FriendsIcon from "../../../components/Icons/FriendsIcon";
import GiftIcon from "../../../components/Icons/GiftIcon";
import HeartIcon from "../../../components/Icons/HeartIcon";
import HolidayIcon from "../../../components/Icons/HolidayIcon";
import HouseIcon from "../../../components/Icons/HouseIcon";
import AuthenticatedLayout from "../../../layouts/AuthenticatedLayout";

function NewEvent() {
	return (
		<div className="bg-dark-800 px-2 py-4 text-white">
			<h2 className="text-2xl font-medium text-center mb-4">What type of event?</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-10/12 lg:w-6/12 mx-auto">
				<EmptyCard className="transition-all duration-150 border-2 border-transparent hover:border-dark-200">
					<button className="flex-1 flex flex-col items-center px-2 py-6">
						<HolidayIcon className="w-10 h-10 mb-2 text-green-700" />
						<h2 className="text-lg font-medium">Holiday</h2>
					</button>
				</EmptyCard>
				<EmptyCard className="transition-all duration-150 border-2 border-transparent hover:border-dark-200">
					<button className="flex-1 flex flex-col items-center px-2 py-6">
						<GiftIcon className="w-10 h-10 mb-2 text-cyan-600" />
						<h2 className="text-lg font-medium">Birthday</h2>
					</button>
				</EmptyCard>
				<EmptyCard className="transition-all duration-150 border-2 border-transparent hover:border-dark-200">
					<button className="flex-1 flex flex-col items-center px-2 py-6">
						<ConfettiIcon className="w-10 h-10 mb-2 text-yellow-200" />
						<h2 className="text-lg font-medium">Graduation</h2>
					</button>
				</EmptyCard>
				<EmptyCard className="transition-all duration-150 border-2 border-transparent hover:border-dark-200">
					<button className="flex-1 flex flex-col items-center px-2 py-6">
						<HeartIcon className="w-10 h-10 mb-2 text-red-600" />
						<h2 className="text-lg font-medium">Wedding / Anniversary</h2>
					</button>
				</EmptyCard>
				<EmptyCard className="transition-all duration-150 border-2 border-transparent hover:border-dark-200">
					<button className="flex-1 flex flex-col items-center px-2 py-6">
						<HouseIcon className="w-10 h-10 mb-2 text-sky-200" />
						<h2 className="text-lg font-medium">Housewarming</h2>
					</button>
				</EmptyCard>
				<EmptyCard className="transition-all duration-150 border-2 border-transparent hover:border-dark-200">
					<button className="flex-1 flex flex-col items-center px-2 py-6">
						<FriendsIcon className="w-10 h-10 mb-2 text-orange-400" />
						<h2 className="text-lg font-medium">Mothers/Fathers Day</h2>
					</button>
				</EmptyCard>
			</div>
		</div>
	);
}

NewEvent.getLayout = function (page: any) {
	return <AuthenticatedLayout>{page}</AuthenticatedLayout>;
};

export default NewEvent;
