import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

const initialInvestors = [
  { id: 1, name: "John Doe", email: "john@example.com", totalInvestment: 50000, returns: 7000, investmentType: "Stocks", reinsurance: "Yes", status: "Active", investmentDate: "2023-05-10", investorShare: "20%" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", totalInvestment: 75000, returns: 12000, investmentType: "Real Estate", reinsurance: "No", status: "Pending", investmentDate: "2023-07-15", investorShare: "30%" },
  { id: 3, name: "Michael Brown", email: "michael@example.com", totalInvestment: 60000, returns: 9000, investmentType: "Bonds", reinsurance: "Yes", status: "Inactive", investmentDate: "2022-12-20", investorShare: "25%" },
];

const statusColors = {
  Active: "green",
  Inactive: "gray",
  Pending: "orange",
};  

const InvestorManage = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [investors, setInvestors] = useState(initialInvestors);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const filteredInvestors = investors.filter(
    (investor) =>
      investor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterStatus ? investor.status === filterStatus : true)
  );

  return (
    <Box sx={{ backgroundColor: isDarkMode ? theme.palette.background.default : 'white', p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" fontWeight="bold" color={isDarkMode ? theme.palette.text.primary : "rgba(0, 31, 63, 1)"}>
          Investor Management
        </Typography>
      </Box>

      {/* Table */}
      <TableContainer 
        component={Paper} 
        sx={{ 
          borderRadius: 3, 
          boxShadow: 3,
          backgroundColor: isDarkMode ? theme.palette.background.paper : 'white'
        }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: isDarkMode ? theme.palette.primary.main : "#001F3F" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Investor</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Total Investment ($)</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Returns ($)</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Reinsurance</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Investment Date</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Investor Share (%)</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredInvestors.map((investor) => (
              <TableRow 
                key={investor.id}
                sx={{ 
                  '&:hover': {
                    backgroundColor: isDarkMode ? alpha(theme.palette.primary.main, 0.1) : alpha('#001F3F', 0.05)
                  }
                }}
              >
                <TableCell sx={{ color: isDarkMode ? theme.palette.text.primary : 'inherit' }}>{investor.name}</TableCell>
                <TableCell sx={{ color: isDarkMode ? theme.palette.text.primary : 'inherit' }}>{investor.email}</TableCell>
                <TableCell sx={{ color: isDarkMode ? theme.palette.text.primary : 'inherit' }}>${investor.totalInvestment}</TableCell>
                <TableCell sx={{ color: isDarkMode ? theme.palette.text.primary : 'inherit' }}>${investor.returns}</TableCell>
                <TableCell sx={{ color: isDarkMode ? theme.palette.text.primary : 'inherit' }}>{investor.reinsurance}</TableCell>
                <TableCell sx={{ color: isDarkMode ? theme.palette.text.primary : 'inherit' }}>{investor.investmentDate}</TableCell>
                <TableCell sx={{ color: isDarkMode ? theme.palette.text.primary : 'inherit' }}>{investor.investorShare}</TableCell>
                <TableCell>
                  <span style={{ color: statusColors[investor.status], fontWeight: "bold" }}>
                    {investor.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InvestorManage;
