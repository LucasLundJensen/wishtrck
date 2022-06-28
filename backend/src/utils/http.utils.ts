import { Status } from "../types/api.types";

export function getHttpCodeByStatus(status: Status | string): number {
	switch (status) {
		case Status.NotFound:
			return 404;
		case Status.Recovered:
			return 200;
		case Status.RecoveringFailed:
			return 500;
		case Status.Updated:
			return 200;
		case Status.UpdatingFailed:
			return 500;
		case Status.ValidationFailed:
			return 400;
		case Status.AlreadyExists:
			return 409;
		case Status.AssociationFailed:
			return 500;
		case Status.AssociationMissingData:
			return 400;
		case Status.AssoicationSuccess:
			return 200;
		case Status.Created:
			return 201;
		case Status.CreationFailed:
			return 500;
		case Status.Deleted:
			return 200;
		case Status.DeletionFailed:
			return 500;
		case Status.Fetched:
			return 200;
		case Status.FetchingFailed:
			return 500;
		case Status.Found:
			return 200;
		case Status.MissingCredentials:
			return 400;
		case Status.MissingDetails:
			return 400;
		case Status.Success:
			return 200;
		case Status.Failed:
			return 500;
		default:
			return 500;
	}
}
