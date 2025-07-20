import React from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  IconButton,
  Avatar,
  InputBase,
  Grid,
  Paper,Breadcrumbs
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import  ArrowBackIcon  from '@mui/icons-material/ArrowBack';
const customers = ['Customer 1', 'Customer 2'];
const currencies = ['INR', 'USD', 'EUR'];
const paymentModes = ['Online', 'Cash', 'Cheque'];

const AddPaymentsEntry = () => {
  const navigate = useNavigate()
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
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      <Typography color="text.secondary" fontSize="14px">
        Payment settings
      </Typography>
      <Typography color="text.primary" fontWeight={600} fontSize="14px">
        Add
      </Typography>
    </Breadcrumbs>

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

       
        <Box sx={{ p: 3 }}>
          <Paper elevation={0} sx={{ p: 4, borderRadius: '12px' }}>
             <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: '#111',
                mb: 2,
                borderBottom: '1px solid #eee',
                pb: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
              }}
              onClick={() => navigate(-1)}
            >
              <ArrowBackIcon sx={{ fontSize: 22 }} />
             Payment settings
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  select
                  fullWidth
                  required
                  label="Customer Name"
                  defaultValue="Customer 1"     sx={{
                      width: { xs: '100%', sm: '100%', md: 330 },
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        backgroundColor: '#f9fafb',
                        height: 40,
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '10px',
                      },
                      '& input': {
                        fontSize: '14px',
                        padding: '10px 14px',
                      },
                    }}
                >
                  {customers.map((c) => (
                    <MenuItem key={c} value={c}>{c}</MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  required
                  label="Payment Date"
                  type="date"
                  defaultValue="2025-04-01"
                  InputLabelProps={{ shrink: true }}     sx={{
                      width: { xs: '100%', sm: '100%', md: 330 },
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        backgroundColor: '#f9fafb',
                        height: 40,
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '10px',
                      },
                      '& input': {
                        fontSize: '14px',
                        padding: '10px 14px',
                      },
                    }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField select fullWidth required label="Payment Mode"     sx={{
                      width: { xs: '100%', sm: '100%', md: 330 },
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        backgroundColor: '#f9fafb',
                        height: 40,
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '10px',
                      },
                      '& input': {
                        fontSize: '14px',
                        padding: '10px 14px',
                      },
                    }}>
                  {paymentModes.map((mode) => (
                    <MenuItem key={mode} value={mode}>{mode}</MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField select fullWidth required label="Currency Preference"     sx={{
                      width: { xs: '100%', sm: '100%', md: 330 },
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        backgroundColor: '#f9fafb',
                        height: 40,
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '10px',
                      },
                      '& input': {
                        fontSize: '14px',
                        padding: '10px 14px',
                      },
                    }}>
                  {currencies.map((curr) => (
                    <MenuItem key={curr} value={curr}>{curr}</MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth required label="Amount" placeholder="Enter amount"     sx={{
                      width: { xs: '100%', sm: '100%', md: 330 },
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        backgroundColor: '#f9fafb',
                        height: 40,
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '10px',
                      },
                      '& input': {
                        fontSize: '14px',
                        padding: '10px 14px',
                      },
                    }} />
              </Grid>
            </Grid>

       
            <Box
              mt={6}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderTop="1px solid #eee"
              pt={2}
            >
              <Typography sx={{ color: '#888' }}>Preview Receipt</Typography>
              <Box display="flex" gap={2}>
                <Button variant="outlined" color="inherit" sx={{ textTransform: 'none',borderRadius:2 }}>
                  Cancel
                </Button>
                <Button variant="outlined" sx={{ textTransform: 'none',borderRadius:2 }} onClick={() => navigate('/payment-settings')}>
                  Save as Draft
                </Button>
                <Button variant="contained" sx={{ textTransform: 'none', bgcolor: '#003865',borderRadius:2 }}  onClick={() => navigate('/payment-settings')}>
                  Save & Send
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default AddPaymentsEntry;