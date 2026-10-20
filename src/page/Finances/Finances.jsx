import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  useTheme, Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
const initialDailyTransactions = [
  { id: 1, date: "2025-03-14", type: "Income", description: "Freelance Project", amount: 1200, paymentMethod: "PayPal", responsible: "John Doe" },
  { id: 2, date: "2025-03-14", type: "Expense", description: "Office Rent", amount: 800, paymentMethod: "Bank Transfer", responsible: "Jane Smith" },
  { id: 3, date: "2025-03-15", type: "Income", description: "Consultation Fee", amount: 300, paymentMethod: "Cash", responsible: "Michael Lee" },
  { id: 4, date: "2025-03-15", type: "Expense", description: "Internet Bill", amount: 60, paymentMethod: "Credit Card", responsible: "Sarah Johnson" },
  { id: 6, date: "2025-03-16", type: "Expense", description: "Software Subscription", amount: 20, paymentMethod: "Debit Card", responsible: "James Brown" },
  { id: 7, date: "2025-03-17", type: "Income", description: "Affiliate Commission", amount: 250, paymentMethod: "PayPal", responsible: "Robert Wilson" },
  { id: 8, date: "2025-03-17", type: "Expense", description: "Electricity Bill", amount: 100, paymentMethod: "Bank Transfer", responsible: "Sophia Martinez" },
  { id: 9, date: "2025-03-18", type: "Income", description: "E-book Sale", amount: 75, paymentMethod: "Credit Card", responsible: "David Thomas" },
  { id: 10, date: "2025-03-18", type: "Expense", description: "Coffee for Team", amount: 15, paymentMethod: "Cash", responsible: "Olivia Harris" },
];


const monthlySummary = [
  { month: "January", totalIncome: 5000, totalExpenses: 2000, netProfit: 3000, profitPercentage: "60%" },
  { month: "February", totalIncome: 7000, totalExpenses: 2500, netProfit: 4500, profitPercentage: "64%" },
];

const FinanceTable = () => {
  const [dailyTransactions, setDailyTransactions] = useState(initialDailyTransactions);
  const [open, setOpen] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const theme = useTheme();

  const handleOpen = (transaction = null) => {
    if (transaction) {
      setCurrentTransaction({ ...transaction, date: dayjs(transaction.date) }); // تحويل date لـ dayjs()
    } else {
      setCurrentTransaction({ date: dayjs(), type: "", description: "", amount: "", paymentMethod: "", responsible: "" });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (field, value) => {
    setCurrentTransaction({ ...currentTransaction, [field]: value });
  };

  const handleSave = () => {
    if (currentTransaction.id) {
      setDailyTransactions(dailyTransactions.map(t => (t.id === currentTransaction.id ? currentTransaction : t)));
    } else {
      setDailyTransactions([...dailyTransactions, { ...currentTransaction, id: dailyTransactions.length + 1, date: currentTransaction.date.format("YYYY-MM-DD") }]);
    }
    handleClose();
  };

  const calculateTotalIncome = () => {
    return dailyTransactions
        .filter(t => t.type === "Income")
        .reduce((sum, t) => sum + parseFloat(t.amount), 0);  
  };


  const calculateTotalExpenses = () => {
    return dailyTransactions
      .filter(t => t.type === "Expense")
      .reduce((sum, t) => sum + parseFloat(t.amount), 0);
  };

  const netProfit = calculateTotalIncome() - calculateTotalExpenses();
  const profitPercentage = ((netProfit / calculateTotalIncome()) * 100).toFixed(1);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 3 }}>
        {/* Summary Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <Card elevation={2}>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <TrendingUpIcon color="success" fontSize="large" />
                  <Typography variant="h6" color="text.secondary">Total Income</Typography>
                </Stack>
                <Typography variant="h4" color="success.main" sx={{ mt: 2 }}>
                  ${calculateTotalIncome().toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={2}>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <TrendingDownIcon color="error" fontSize="large" />
                  <Typography variant="h6" color="text.secondary">Total Expenses</Typography>
                </Stack>
                <Typography variant="h4" color="error.main" sx={{ mt: 2 }}>
                  ${calculateTotalExpenses().toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={2}>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  {netProfit >= 0 ?
                      <TrendingUpIcon color="success" fontSize="large" /> :
                      <TrendingDownIcon color="error" fontSize="large" />
                  }
                  <Typography variant="h6" color="text.secondary" sx={{ flexGrow: 1 }}>Net Profit</Typography>
                  <Chip
                      label={`${profitPercentage}%`}
                      color={netProfit >= 0 ? "success" : "error"}
                      size="small"
                      sx={{ ml: 2 }}
                  />
                </Stack>
                <Typography
                    variant="h4"
                    color={netProfit >= 0 ? "success.main" : "error.main"}
                    sx={{ mt: 2 }}
                >
                  ${Math.abs(netProfit).toLocaleString()}
                </Typography>
              </CardContent>

            </Card>
          </Grid>
        </Grid>

        {/* Daily Transactions Section */}
        <Card elevation={2} sx={{ mb: 4 }}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
              <Typography variant="h5" fontWeight="bold" style={{color: 'rgba(0, 31, 63, 1)'}}>
                Daily Transactions
              </Typography>
              <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => handleOpen()}
                  sx={{
                    backgroundColor: 'rgba(0, 31, 63, 1)',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 31, 63, 0.8)', // Slightly lighter for hover effect
                    },
                    color: '#fff', // Ensure the text color is white for better contrast
                  }}
              >
                Add Transaction
              </Button>

            </Stack>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="right">Amount</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Payment Method</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Responsible</TableCell>
                   
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dailyTransactions.map((transaction) => (
                    <TableRow 
                      key={transaction.id}
                      hover
                      sx={{ 
                        '&:last-child td, &:last-child th': { border: 0 },
                        '&:hover': { backgroundColor: theme.palette.action.hover }
                      }}
                    >
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>
                        <Chip 
                          label={transaction.type}
                          color={transaction.type === "Income" ? "success" : "error"}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell align="right">
                        <Typography 
                          color={transaction.type === "Income" ? "success.main" : "error.main"}
                          fontWeight="bold"
                        >
                          ${transaction.amount.toLocaleString()}
                        </Typography>
                      </TableCell>
                      <TableCell>{transaction.paymentMethod}</TableCell>
                      <TableCell>{transaction.responsible}</TableCell>
                      <TableCell align="center">
                        <IconButton 
                          onClick={() => handleOpen(transaction)}
                          sx={{ color: 'rgba(0, 31, 63, 1)' }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton 
                          onClick={() => setDailyTransactions(dailyTransactions.filter(t => t.id !== transaction.id))}
                          sx={{ color: theme.palette.error.main }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        {/* Monthly Summary Section */}
        <Card elevation={2}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" style={{color: 'rgba(0, 31, 63, 1)'}} mb={3}>
              Monthly Summary
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Month</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="right">Total Income</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="right">Total Expenses</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="right">Net Profit</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="right">Profit %</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {monthlySummary.map((summary, index) => (
                    <TableRow 
                      key={index}
                      hover
                      sx={{ 
                        '&:last-child td, &:last-child th': { border: 0 },
                        '&:hover': { backgroundColor: theme.palette.action.hover }
                      }}
                    >
                      <TableCell>{summary.month}</TableCell>
                      <TableCell align="right">
                        <Typography color="success.main" fontWeight="bold">
                          ${summary.totalIncome.toLocaleString()}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography color="error.main" fontWeight="bold">
                          ${summary.totalExpenses.toLocaleString()}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography 
                          color={summary.netProfit >= 0 ? "success.main" : "error.main"}
                          fontWeight="bold"
                        >
                          ${Math.abs(summary.netProfit).toLocaleString()}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Chip 
                          label={summary.profitPercentage}
                          color={summary.netProfit >= 0 ? "success" : "error"}
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        {/* Edit/Add Transaction Dialog */}
        <Dialog 
          open={open} 
          onClose={handleClose}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            <Typography variant="h6" fontWeight="bold" style={{color: 'rgba(0, 31, 63, 1)'}}>
              {currentTransaction?.id ? "Edit Product" : "Add New Product"}
            </Typography>
          </DialogTitle>
          <Divider />

          <DialogContent sx={{ pt: 3 }}>
            <Stack spacing={2}>
              <DatePicker 
                value={currentTransaction?.date ? dayjs(currentTransaction.date) : null} 
                onChange={(newValue) => handleChange("date", newValue)} 
                sx={{ width: "100%" }} 
              />
              <TextField
                name="type"
                value={currentTransaction?.type || ""}
                onChange={(e) => handleChange("type", e.target.value)}
                fullWidth
                select
                SelectProps={{
                  native: true,
                }}
              >
                <option value="">Select Type</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </TextField>
              <TextField 
                label="Description" 
                name="description" 
                value={currentTransaction?.description || ""} 
                onChange={(e) => handleChange("description", e.target.value)} 
                fullWidth 
              />
              <TextField 
                label="Amount" 
                name="amount" 
                type="number" 
                value={currentTransaction?.amount || ""} 
                onChange={(e) => handleChange("amount", e.target.value)} 
                fullWidth 
                InputProps={{
                  startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>,
                }}
              />
              <TextField 
                name="paymentMethod"
                value={currentTransaction?.paymentMethod || ""} 
                onChange={(e) => handleChange("paymentMethod", e.target.value)} 
                fullWidth 
                select
                SelectProps={{
                  native: true,
                }}
              >
                <option value="">Select Payment Method</option>
                <option value="Cash">Cash</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="PayPal">PayPal</option>
              </TextField>
              <TextField 
                label="Responsible" 
                name="responsible" 
                value={currentTransaction?.responsible || ""} 
                onChange={(e) => handleChange("responsible", e.target.value)} 
                fullWidth 
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button 
              onClick={handleClose}
              sx={{
                color: theme.palette.text.secondary,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover
                }
              }}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSave}
              variant="contained"
              sx={{
                backgroundColor: 'rgba(0, 31, 63, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 31, 63, 0.8)', 
                },
                color: '#fff', 
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </LocalizationProvider>
  );
};

export default FinanceTable;
