import { User } from "@prisma/client";

export interface APIResponse {
	status: Status | string;
	message?: string;
	data: User | User[] | string | null | object;
}

export enum Status {
	Found = "Found",
	Created = "Created",
	AlreadyExists = "AlreadyExists",
	NotFound = "NotFound",
	CreationFailed = "CreationFailed",
	FetchingFailed = "FetchingFailed",
	Deleted = "Deleted",
	DeletionFailed = "DeletionFailed",
	Recovered = "Recovered",
	RecoveringFailed = "RecoveringFailed",
	AssoicationSuccess = "AssoicationSuccess",
	AssociationMissingData = "AssociationMissingData",
	AssociationFailed = "AssociationFailed",
	MissingDetails = "MissingDetails",
	Updated = "Updated",
	UpdatingFailed = "UpdatingFailed",
	MissingCredentials = "MissingCredentials",
	Fetched = "Fetched",
	ValidationFailed = "ValidationFailed",
	Unauthorized = "Unauthorized",
	Disabled = "Disabled",
	Success = "Success",
	Failed = "Failed",
}
