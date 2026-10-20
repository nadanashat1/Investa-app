import { Box, Paper, Stack, Typography, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Button, Grid, Card, CardContent, Chip, Tabs, Tab, TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { Transactions } from "./datatran";
import SearchIcon from '@mui/icons-material/Search';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import TableChartIcon from '@mui/icons-material/TableChart';
import FilterListIcon from '@mui/icons-material/FilterList';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Invoices = () => {
  const theme = useTheme();
  const [viewMode, setViewMode] = useState('table');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const filteredTransactions = Transactions.filter((activity) => {
    if (!selectedDate) return true;
    return dayjs(activity.date).isSame(selectedDate, 'day');
  });



  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const filtered = Transactions.filter(
      (transaction) =>
        transaction.txId.toLowerCase().includes(searchValue) ||
        transaction.user.toLowerCase().includes(searchValue) ||
        transaction.date.includes(searchValue)
    );
    setFilteredTransactions(filtered);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusColor = (amount) => {
    return amount > 100 ? 'success' : 'warning';
  };

  return (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" fontWeight="bold" style={{ color: 'rgba(0, 31, 63, 1)' }}>
          Recent Transaction
        </Typography>
        <Stack direction="row" spacing={2}>
          <IconButton
              onClick={() => setViewMode('table')}
              sx={{
                color: viewMode === 'table' ? 'rgba(0, 31, 63, 1)' : 'rgba(0, 0, 0, 0.54)',
              }}
          >
            <TableChartIcon />
          </IconButton>

          <IconButton
              onClick={() => setViewMode('cards')}
              sx={{
                color: viewMode === 'cards' ? 'rgba(0, 31, 63, 1)' : 'rgba(0, 0, 0, 0.54)',
              }}
          >
            <ViewModuleIcon />
          </IconButton>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Filter by Date"
                value={selectedDate}
                onChange={(newDate) => setSelectedDate(newDate)}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    sx: {
                      mb: 4,
                      borderRadius: 2,
                      backgroundColor: "#fff",
                    },
                  },
                }}
            />
          </LocalizationProvider>
        </Stack>
      </Stack>

      {viewMode === 'table' ? (
        <TableContainer component={Paper} elevation={2}>
          <Table sx={{ minWidth: 650 }} aria-label="invoices table">
            <TableHead>
              <TableRow>
                <TableCell>Transaction ID</TableCell>
                <TableCell>investors</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
                {/*<TableCell align="right">Status</TableCell>*/}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTransactions.map((transaction) => (
                <TableRow key={transaction.txId} hover>
                  <TableCell>{transaction.txId}</TableCell>
                  <TableCell>{transaction.user}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{formatDate(transaction.date)}</TableCell>
                  <TableCell>
                    <Chip
                        label={`$${transaction.cost}`}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(0, 31, 63, 1)',
                          color: '#fff',
                          fontWeight: 'bold',
                          borderRadius: '8px',
                          px: 1.5,
                        }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Grid container spacing={3}>
          {filteredTransactions.map((transaction) => (
            <Grid item xs={12} sm={6} md={4} key={transaction.txId}>
              <Card elevation={2} sx={{ height: '100%' }}>
                <CardContent>
                  <Stack spacing={2}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="subtitle2" color="text.secondary">
                         ID
                      </Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {transaction.txId}
                      </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="subtitle2" color="text.secondary">
                        Investors
                      </Typography>
                      <Typography variant="body2">
                        {transaction.user}
                      </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="subtitle2" color="text.secondary">
                        Type
                      </Typography>
                      <Typography variant="body2">
                        {transaction.type}
                      </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="subtitle2" color="text.secondary">
                        Date
                      </Typography>
                      <Typography variant="body2">
                        {formatDate(transaction.date)}
                      </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="subtitle2" color="text.secondary">
                        Amount
                      </Typography>
                      <Typography variant="h6" color="primary">
                        ${transaction.cost}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Invoices;
