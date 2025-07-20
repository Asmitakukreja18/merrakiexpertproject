import React from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  IconButton,
  InputBase,
  Avatar,Paper,Breadcrumbs,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import  ArrowBackIcon  from '@mui/icons-material/ArrowBack';
const AddTax = () => {
  const [taxType, setTaxType] = React.useState('GST');
  const [status, setStatus] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const navigate = useNavigate();

  return (
     <Box sx={{ display: 'flex' }}>
            <Sidebar  />
    <Box sx={{ flexGrow: 1, bgcolor: '#F9FAFB', height: '100vh' }}>
      
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
        Tax
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

      <Box sx={{ px: 4, py: 4 }}>

          <Paper sx={{ p: 1, borderRadius: 2 }}>
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            bgcolor: '#fff',
            borderRadius: 3,
            p: 1,
          }}
        >
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
            Tax
            </Typography>
          <Box display="flex" gap={2} flexWrap="wrap">
            <TextField
              label="Tax Type"
              value={taxType}
              onChange={(e) => setTaxType(e.target.value)}
              select
              fullWidth
              required
            sx={{
                        width: {
      xs: 120,     
      sm: 200,     
      md:  260,    
      lg: 300,      
    }
,
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                bgcolor: '#f9fafb',
                height: 40,
              },
            }}
            >
              <MenuItem value="GST">GST</MenuItem>
              <MenuItem value="VAT">VAT</MenuItem>
              <MenuItem value="Custom">Custom</MenuItem>
            </TextField>

            <TextField
              label="Rate (%)"
              placeholder="Enter rate"
              required
              fullWidth
             sx={{
                        width: {
      xs: 120,     
      sm: 200,     
      md:  260,    
      lg: 300,      
    }
,
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                bgcolor: '#f9fafb',
                height: 40,
              },
            }}
            />

            <TextField
              label="Label/Category"
              placeholder="Enter Label/Category"
              required
              fullWidth
            sx={{
                        width: {
      xs: 120,     
      sm: 200,     
      md:  260,    
      lg: 300,      
    }
,
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                bgcolor: '#f9fafb',
                height: 40,
              },
            }}
            />

            <TextField
              label="Status"
              select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              fullWidth
          sx={{
                        width: {
      xs: 120,     
      sm: 200,     
      md:  260,    
      lg: 300,      
    }
,
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                bgcolor: '#f9fafb',
                height: 40,
              },
            }}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </TextField>
<Box sx={{
  width: {
    xs: 120,
    sm: 200,
    md: 260,
    lg: 300,
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    bgcolor: '#f9fafb',
    height: 40,
  }
}}>
  <DatePicker
    label="Effective Date"
    value={date}
    onChange={(newValue) => setDate(newValue)}
    slotProps={{
      textField: {
        fullWidth: true,
        size: "small",
      },
    }}
  />
</Box>
</Box>

          <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
            <Button
              variant="outlined"
              onClick={() => navigate('/tax')}
              sx={{ borderRadius: 2, textTransform: 'none' }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: 2,
                backgroundColor: '#004085',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#003060',
                },
              }}onClick={() => navigate('/Tax-list')}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Box></Paper></Box>
    </Box></Box>
  );
};

export default AddTax;
