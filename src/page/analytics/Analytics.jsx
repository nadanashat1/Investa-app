import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, useTheme, CircularProgress, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import GradientLineChart from "../../GradientLineChart"; 

const USER_ID = localStorage.getItem("userId");
const API_BASE_URL = "https://54c2-154-238-249-140.ngrok-free.app";

const Analytics = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  
  const [monthlyFinanceData, setMonthlyFinanceData] = useState({
    labels: [],
    revenueData: [],
    lossData: [],
  });
  const [isMonthlyFinanceLoading, setIsMonthlyFinanceLoading] = useState(true);
  const [monthlyFinanceError, setMonthlyFinanceError] = useState(null);

  
  const [revenueData, setRevenueData] = useState({ 
    labels: [],
    totalRevenueData: [], 
  });
  const [isRevenueLoading, setIsRevenueLoading] = useState(true); 
  const [revenueError, setRevenueError] = useState(null); 

  
  useEffect(() => {
    const fetchMonthlyFinance = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/founder/dashboard/monthly-finance/`, {
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }
        const data = await response.json();

        const labels = data.map(item => item.month);
        const revenueDataFromApi = data.map(item => item.revenue); 
        const lossData = data.map(item => item.loss);

        setMonthlyFinanceData({
          labels,
          revenueData: revenueDataFromApi,
          lossData,
        });
      } catch (err) {
        console.error("Failed to fetch monthly finance data:", err);
        setMonthlyFinanceError(`Failed to load monthly finance data. Error: ${err.message}`);
      } finally {
        setIsMonthlyFinanceLoading(false);
      }
    };

   
    const fetchRevenue = async () => { 
      try {
        const response = await fetch(`${API_BASE_URL}/founder/dashboard/revenue-growth/${USER_ID}/`, { 
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }
        const data = await response.json();

        const labels = data.dates || [];
        const totalRevenueData = data.revenues || []; 
        setRevenueData({ 
          labels,
          totalRevenueData,
        });
      } catch (err) {
        console.error("Failed to fetch revenue data:", err);
        setRevenueError(`Failed to load revenue data. Error: ${err.message}`); 
      } finally {
        setIsRevenueLoading(false); 
      }
    };

    fetchMonthlyFinance();
    fetchRevenue(); 
  }, [USER_ID]);

  return (
    <Grid container spacing={2} sx={{ backgroundColor: isDarkMode ? theme.palette.background.default : 'white' }}>
      <Grid item xs={12} md={6}>
        <Box
          mt={5}
          ml={1}
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            position: "relative",
            width: { xs: '100%', md: 'calc(100% - 8px)' },
            height: "100vh",
            '& > div': {
              width: '100%'
            }
          }}
        >
          {isRevenueLoading ? ( 
            <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
              <CircularProgress />
            </Box>
          ) : revenueError ? ( 
            <Alert severity="error" sx={{ width: '100%' }}>{revenueError}</Alert>
          ) : (
            <GradientLineChart
              link="/app/report/Revenue/Growth" 
              title="Revenue Growth" 
              description="Tracking Revenue Growth over time." 
              chart={{
                labels: revenueData.labels, 
                datasets: [
                  {
                    label: "Revenue Growth", 
                    color: isDarkMode ? theme.palette.primary.main : "rgba(105, 169, 244, 1)",
                    data: revenueData.totalRevenueData, 
                  },
                ],
                options: { tooltips: { enabled: true } },
              }}
            />
          )}
        </Box>
      </Grid>

      {/* Monthly Loss/Profit Chart */}
      <Grid item xs={12} md={6}>
        <Box
          mt={5}
          ml={1}
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            position: "relative",
            width: { xs: '100%', md: 'calc(100% - 8px)' },
            height: "100vh",
            '& > div': {
              width: '100%'
            }
          }}
        >
          {isMonthlyFinanceLoading ? (
            <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
              <CircularProgress />
            </Box>
          ) : monthlyFinanceError ? (
            <Alert severity="error" sx={{ width: '100%' }}>{monthlyFinanceError}</Alert>
          ) : (
            <GradientLineChart
              link="/app/report/monthly/loss/profit"
              title="Monthly Loss/Profit"
              description="Tracking monthly financial performance over time"
              chart={{
                labels: monthlyFinanceData.labels,
                datasets: [
                  {
                    label: "Revenue",
                    color: isDarkMode ? theme.palette.primary.main : "rgba(105, 169, 244, 1)",
                    data: monthlyFinanceData.revenueData,
                  },
                  {
                    label: "Loss",
                    color: isDarkMode ? theme.palette.error.main : "rgba(255, 99, 132, 1)",
                    data: monthlyFinanceData.lossData,
                  },
                ],
                options: { tooltips: { enabled: true } },
              }}
            />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Analytics;