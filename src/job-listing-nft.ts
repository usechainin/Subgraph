import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  Transfer as TransferEvent,
  newApplicant as newApplicantEvent,
} from "../generated/JobListingNFT/JobListingNFT";
import { newApplicant } from "../generated/schema";

export function handlenewApplicant(event: newApplicantEvent): void {
  let entity = new newApplicant(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.applicant = event.params.applicant;
  entity.listingID = event.params.listingID;
  entity.profileURL = event.params.profileURL;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
