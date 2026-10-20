import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, useTheme, CircularProgress, Alert } from "@mui/material";
import { Link } from "react-router-dom"; 
import DefaultInfoCard from "../../DefaultInfoCard";
import GradientLineChart from "../../GradientLineChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PaymentsIcon from "@mui/icons-material/Payments";
import LegendToggleOutlinedIcon from "@mui/icons-material/LegendToggleOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import VerticalBarChart from "../../VerticalBarChart";

const USER_ID = localStorage.getItem("userId");
const API_BASE_URL = "https://54c2-154-238-249-140.ngrok-free.app";


const initialCharts = [
  {
    title: "Investment Return",
    description: "Tracking investment returns over time.",
    link: "/app/report/investment/return",
    type: "line",
    data: {
      labels: ["Loading..."],
      datasets: [
        {
          label: "Investment Return",
          color: "rgba(105, 169, 244, 1)",
          data: [0],
        },
        {
          label: "Comparison Data",
          color: "rgba(0, 31, 63, 1)",
          data: [0],
        },
      ],
    },
  },
  {
    title: "Portfolio Performance",
    description: "Analyzing portfolio performance metrics.",
    link: "/app/report/portfolio/performance",
    type: "line",
    data: {
      labels: ["Loading..."],
      datasets: [
        {
          label: "Portfolio Performance",
          color: "rgba(105, 169, 244, 1)",
          data: [0],
        },
        {
          label: "Comparison Data",
          color: "rgba(0, 31, 63, 1)",
          data: [0],
        },
      ],
    },
  },
  {
 title: "Profit Margin Trend",
  description: "Observing profit margin fluctuations.",
  link: "/app/report/profit/margin/trend",
  type: "bar",
  data: {
    labels: ["Loading..."],
    datasets: [
{
label: "Profit Margin",
color: "rgba(0, 31, 63, 1)",
data: [0],

},
      ],
    },
  },
  {
    title: "Monthly Loss/Profit",
    description: "Tracking monthly financial performance.",
    type: "bar",
    data: {
      link: "/app/report/monthly/loss/profit",
      title: "Monthly Loss/Profit",
      description: "Tracking monthly financial performance over time",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Revenue",
          data: [120, 190, 300, 500, 200, 300],
          color: "rgba(0, 31, 63, 1)",
        },
      ],
    },
  },
];

const Dashboard = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const [chartsData, setChartsData] = useState(initialCharts);
  const [cardData, setCardData] = useState({
    portfolioValue: "N/A",
    investorsCount: "N/A",
    revenue: "N/A",
    realizedProfit: "N/A",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      setError(null);
      let newErrorMessages = []; 

      try {


        const overviewUrl = `${API_BASE_URL}/founder/dashboard/overview/${USER_ID}/`;
        console.log("Fetching Overview Data from:", overviewUrl);
        const overviewResponse = await fetch(overviewUrl, {
          headers: {
            'ngrok-skip-browser-warning': 'true' 
          }
        });

        if (overviewResponse.ok) {
          const overviewData = await overviewResponse.json();
          console.log("Overview API Response Data:", overviewData);
          setCardData({
            portfolioValue: overviewData.total_invested_amount || 0,
            investorsCount: overviewData.number_of_investors || 0,
            revenue: overviewData.revenue || 0,
            realizedProfit: overviewData.realized_profit || 0,
          });
        } else {
          const errorText = await overviewResponse.text();
          console.error(`HTTP error fetching overview! Status: ${overviewResponse.status}. Details:`, errorText);
          newErrorMessages.push(`Failed to load overview data (Status: ${overviewResponse.status}).`); 
        }

       
        const portfolioUrl = `${API_BASE_URL}/web/founder/dashboard/portfolio-vs-comparison/${USER_ID}/`;
        console.log("Fetching Portfolio Data from:", portfolioUrl);
        const portfolioResponse = await fetch(portfolioUrl, {
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        });

        if (portfolioResponse.ok) {
          const portfolioData = await portfolioResponse.json();
          console.log("Portfolio API Response Data:", portfolioData);

          setChartsData(prevCharts =>
            prevCharts.map(chart => {
              if (chart.title === "Portfolio Performance") {
                if (portfolioData && Array.isArray(portfolioData.dates) && Array.isArray(portfolioData.portfolio_performance) && Array.isArray(portfolioData.comparison_data)) {
                  return {
                    ...chart,
                    data: {
                      labels: portfolioData.dates,
                      datasets: [
                        { ...chart.data.datasets[0], data: portfolioData.portfolio_performance },
                        { ...chart.data.datasets[1], data: portfolioData.comparison_data },
                      ],
                    },
                  };
                } else {
                  console.error("API response data structure is unexpected for Portfolio Performance chart:", portfolioData);
                  newErrorMessages.push(`Portfolio Performance data is in an unexpected format from ${portfolioUrl}.`); 
                  return chart;
                }
              }
              return chart;
            })
          );
        } else {
          const errorText = await portfolioResponse.text();
          console.error(`HTTP error fetching portfolio performance! Status: ${portfolioResponse.status}. Response text:`, errorText);
          newErrorMessages.push(`Failed to load portfolio performance chart data (Status: ${portfolioResponse.status}).`); 
        }
        const investmentReturnUrl = `${API_BASE_URL}/founder/dashboard/return-vs-comparison/${USER_ID}/`;
        console.log("Fetching Investment Return Data from:", investmentReturnUrl);
        const investmentReturnResponse = await fetch(investmentReturnUrl, {
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        });


         const profitMarginTrendUrl = `${API_BASE_URL}/founder/dashboard/profit-margin-trend/${USER_ID}/`;
        console.log("Fetching Profit Margin Trend Data from:", profitMarginTrendUrl);
        const profitMarginTrendResponse = await fetch(profitMarginTrendUrl, {
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        });

        if (profitMarginTrendResponse.ok) {
          const profitMarginTrendData = await profitMarginTrendResponse.json();
          console.log("Profit Margin Trend API Response Data:", profitMarginTrendData);

          setChartsData(prevCharts =>
            prevCharts.map(chart => {
              
              if (chart.title === "Profit Margin Trend") {
                console.log("chart:", chart);
                if (profitMarginTrendData && Array.isArray(profitMarginTrendData.dates) && Array.isArray(profitMarginTrendData.profit_margins)) {
                  return {
                    ...chart,
                    title: "Profit Margin Trend",
                    description: "Observing profit margin fluctuations.",
                    data: {
                      ...chart.data, 
                      labels: profitMarginTrendData.dates, 
                      datasets: [
                        { ...chart.data.datasets[0], data: profitMarginTrendData.profit_margins }, // Update data for the first dataset
                      ],
                    },
                  };
                } else {
                  console.error("API response data structure is unexpected for Profit Margin Trend chart:", profitMarginTrendData);
                  newErrorMessages.push(`Profit Margin Trend data is in an unexpected format from ${profitMarginTrendUrl}.`);
                  return chart;
                }
              }
              return chart;
            })
          );
        } else {
          const errorText = await profitMarginTrendResponse.text();
          console.error(`HTTP error fetching profit margin trend! Status: ${profitMarginTrendResponse.status}. Response text:`, errorText);
          newErrorMessages.push(`Failed to load Profit Margin Trend chart data (Status: ${profitMarginTrendResponse.status}).`);
        }


        if (investmentReturnResponse.ok) {
          const investmentReturnData = await investmentReturnResponse.json();
          console.log("Investment Return API Response Data:", investmentReturnData);


          setChartsData(prevCharts =>
            prevCharts.map(chart => {
              if (chart.title === "Investment Return") {
                if (investmentReturnData && Array.isArray(investmentReturnData?.dates) && Array.isArray(investmentReturnData?.investment_return) && Array.isArray(investmentReturnData?.comparison_data)) {
                  return {
                    ...chart,
                    data: {
                      labels: investmentReturnData.dates ?? [],
                      datasets: [
                        { ...chart.data.datasets[0], data: investmentReturnData.investment_return },
                        { ...chart.data.datasets[1], data: investmentReturnData.comparison_data },
                      ],
                    },
                  };
                } else {
                  console.error("API response data structure is unexpected for Investment Return chart:", investmentReturnData);
                  newErrorMessages.push(`Investment Return data is in an unexpected format from ${investmentReturnUrl}.`); // تم التصحيح هنا
                  return chart;
                }
              }
              return chart;
            })
          );
        } else {
          const errorText = await investmentReturnResponse.text();
          console.error(`HTTP error fetching investment return! Status: ${investmentReturnResponse.status}. Response text:`, errorText);
          newErrorMessages.push(`Failed to load investment return chart data (Status: ${investmentReturnResponse.status}).`); // تم التصحيح هنا
        }

      } catch (e) {
        console.error("An unexpected error occurred during data fetching:", e);
        newErrorMessages.push(`An unexpected network error occurred: ${e.message}. Please check your internet connection or API availability.`); // تم التصحيح هنا وإضافة توضيح
      } finally {
        if (newErrorMessages.length > 0) {
          setError(newErrorMessages.join(" \n ")); 
        }
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []); 

  return (
    <Box p={4} sx={{ backgroundColor: isDarkMode ? theme.palette.background.default : 'white' }}>
      {/* Cards Section */}
      <Grid container spacing={3} justifyContent="center">
        {loading && error === null ? ( 
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', width: '100%', flexDirection: 'column' }}>
            <CircularProgress />
            <Typography variant="h6" sx={{ ml: 2, mt: 2, color: isDarkMode ? theme.palette.text.primary : 'inherit' }}>Loading dashboard data...</Typography>
          </Box>
        ) : error ? (
          <Box sx={{ width: '100%', mt: 2 }}>
            <Alert severity="error" sx={{ whiteSpace: 'pre-wrap' }}>{error}</Alert> 
          </Box>
        ) : (
          [
            { icon: AttachMoneyIcon, title: "Portfolio Value", value: cardData.portfolioValue },
            { icon: PaymentsIcon, title: "Investors", value: cardData.investorsCount },
            { icon: LegendToggleOutlinedIcon, title: "Revenue", value: cardData.revenue },
            { icon: MonetizationOnOutlinedIcon, title: "Realized Profit", value: cardData.realizedProfit },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <DefaultInfoCard
                icon={item.icon}
                title={item.title}
                description={<span style={{ color: isDarkMode ? theme.palette.success.main : "#28a745", fontWeight: "bold" }}>+55% than last week</span>}
                value={<span style={{ fontSize: "clamp(24px, 2vw, 32px)", fontWeight: "bold", color: isDarkMode ? theme.palette.text.primary : 'inherit' }}>{item.value}</span>}
                iconBgColor={isDarkMode ? theme.palette.background.paper : "#1e1e1e"}
                color={isDarkMode ? theme.palette.primary.main : "#001F3F"}
              />
            </Grid>
          ))
        )}
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} justifyContent="center" mt={5}>
        {loading && error === null ? null : ( // لا نعرض مؤشر تحميل منفصل للرسوم البيانية إذا كانت هناك حالة تحميل أو خطأ عام
          chartsData.map((chart, index) => (
            <Grid item xs={12} md={6} key={chart.title}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ width: "100%", height: "auto", position: "relative" }}>
                {chart.type === "line" ? (
                  <GradientLineChart
                    title={chart.title}
                    description={chart.description}
                    chart={chart.data}
                    link={chart.link}
                  />
                ) : (
                  <VerticalBarChart key={chart.title + "-bar"} chart={chart.data} />
                )}
              </Box>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Dashboard;