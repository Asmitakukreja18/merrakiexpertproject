import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  InputBase,
  IconButton,
  Avatar,useMediaQuery, useTheme,InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Sidebar from './Sidebar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ReportsAndAnalytics = () => {
  
    const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const sections = [
    {
      title: 'Sales Report',
      reports: ['Sales By Customers', 'Sales By Products', 'Sales By Time Period'],
    },
    {
      title: 'Tax Report',
      reports: ['GST Summery', 'Tax Liability Reports'],
    },
    {
      title: 'Payment Report',
      reports: ['Outstanding Invoices', 'Payment Receipts'],
    },
    {
      title: 'Purchase Report',
      reports: ['PO Summaries', 'Vendor Spend Analysis'],
    },
  ];

  return (
    <Box sx={{ display: 'flex', bgcolor: '#f4f5fa', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      
         <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      px: 3,
      py: 2,
    }}
  >
      <Typography color="text.secondary" fontSize="14px">
        Reports & Analytics
      </Typography>


    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 1.5,
          py: 0.5,
          borderRadius: '999px',
          border: '1px solid #e0e0e0',
          bgcolor: '#f9fafb',
        width: {
      xs: 20,     
      sm: 40,     
      md: 120,    
      lg: 240,      
    },
        }}
      >
        <SearchIcon sx={{ fontSize: 20, color: '#999' }} />
        <InputBase
          placeholder="Search anything here..."
          sx={{
            ml: 1,
            fontSize: 14,
            flex: 1,
            display: { xs: 'none', sm: 'none', md: 'block' }, 
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Paper>

      <IconButton
        sx={{
          borderRadius: '12px',
          border: '1px solid #e0e0e0',
          bgcolor: '#f9fafb',
          p: 1,
        }}
      >
        <NotificationsNoneIcon sx={{ fontSize: 20, color: '#666' }} />
      </IconButton>

      <Box display="flex" alignItems="center" gap={1}>
        <Avatar src="https://i.pravatar.cc/150?img=1" />
        <Typography
          fontSize={14}
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
        >
          Admin name
        </Typography>
        <ArrowDropDownIcon />
      </Box>
    </Box>
  </Box>
        
        <Box sx={{ px: 2, py: 2 }}>
          <Paper sx={{ p: 1, borderRadius: 2 }}>
               <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: isSm ? 'flex-start' : 'center',
                px: 4,
                py: 2,
                flexDirection: isSm ? 'column' : 'row',
                gap: 1,
                borderBottom: '1px solid #e0e0e0'
              }}
            >
              <Typography variant="h6" fontWeight={600}>
             Reports & Analytics
              </Typography>
             <InputBase
  placeholder="Search reports here..."
  startAdornment={
    <InputAdornment position="start">
      <SearchIcon sx={{ fontSize: 20, color: '#999' }} />
    </InputAdornment>
  }
  sx={{
    bgcolor: '#f8f8f8',
    borderRadius: '10px',
    px: 2,
    py: 1,
    border: '1px solid #e0e0e0',
 
  }}
/>
            </Box>

      
<Box sx={{ width: '100%' }}>
  <Grid container spacing={3} direction="column">
    {sections.map((section) => (
      <Grid item xs={12} key={section.title}>
        <Paper
          elevation={0}
          sx={{
            backgroundColor: '#f3f4f6',
            borderRadius: '12px',
            padding: 2,
            m:1
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            mb={2}
            sx={{ color: '#111827' }}
          >
            {section.title}
          </Typography>
          <Grid container spacing={2}>
            {section.reports.map((report) => (
              <Grid item key={report}>
                <Button
                  variant="contained"
                  endIcon={<ArrowOutwardIcon />}
                  sx={{
                    backgroundColor: '#ffffff',
                    color: 'rgba(39, 179, 255, 1)',
                    textTransform: 'none',
                    fontWeight: 500,
                    borderRadius: '8px',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#dcdde1ff',
                      boxShadow: 'none',
                    },
                  }}
                >
                  {report}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    ))}
  </Grid>
</Box>

          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default ReportsAndAnalytics;