export const columns = [
  { field: "investorName", headerName: "Investor", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "totalInvestment", headerName: "Total Investment ($)", flex: 1 },
  { field: "returns", headerName: "Returns ($)", flex: 1 },
  { field: "Investment Type", headerName: "Investment Type", flex: 1 },
  { field: "Reinsurance", headerName: "Reinsurance", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
  
];

export const rows = [
  { id: 1, investorName: "Ali", email: "ali@example.com", totalInvestment: 10000, returns: 2000, status: "Active" },
  { id: 2, investorName: "Sara", email: "sara@example.com", totalInvestment: 15000, returns: 2500, status: "Pending" },
  { id: 3, investorName: "Omar", email: "omar@example.com", totalInvestment: 20000, returns: 3000, status: "Active" },
];
