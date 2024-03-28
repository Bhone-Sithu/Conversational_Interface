import React from "react";
import { LeadStatus } from "../models/LeadStatusEnum";

interface LeadStatusChipProps {
  status: LeadStatus; // Specify the type of the 'status' prop as LeadStatus
}
function LeadStatusChip({ status }: LeadStatusChipProps) {
  const getStatusColor = (leadStatus: string) => {
    let color;
    switch (leadStatus) {
      case LeadStatus.QL:
        color = "bg-green-500";
        break;
      case LeadStatus.I:
        color = "bg-orange-500";
        break;
      case LeadStatus.N:
        color = "bg-red-500";
        break;
      case LeadStatus.R:
        color = "bg-yellow-500";
        break;
      default:
        break;
    }
    return color;
  };
  return (
    <p
      className={` ${getStatusColor(
        status
      )} bg-green-500 text-xs rounded-full text-white p-2 text-center`}
    >
      {status}
    </p>
  );
}

export default LeadStatusChip;
