import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  Transfer,
  newApplicant
} from "../generated/JobListingNFT/JobListingNFT"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createnewApplicantEvent(
  applicant: Address,
  applicantID: BigInt,
  listingID: BigInt,
  profileURL: string,
  email: string,
  resumeURL: string
): newApplicant {
  let newApplicantEvent = changetype<newApplicant>(newMockEvent())

  newApplicantEvent.parameters = new Array()

  newApplicantEvent.parameters.push(
    new ethereum.EventParam("applicant", ethereum.Value.fromAddress(applicant))
  )
  newApplicantEvent.parameters.push(
    new ethereum.EventParam(
      "applicantID",
      ethereum.Value.fromUnsignedBigInt(applicantID)
    )
  )
  newApplicantEvent.parameters.push(
    new ethereum.EventParam(
      "listingID",
      ethereum.Value.fromUnsignedBigInt(listingID)
    )
  )
  newApplicantEvent.parameters.push(
    new ethereum.EventParam("profileURL", ethereum.Value.fromString(profileURL))
  )
  newApplicantEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  newApplicantEvent.parameters.push(
    new ethereum.EventParam("resumeURL", ethereum.Value.fromString(resumeURL))
  )

  return newApplicantEvent
}
