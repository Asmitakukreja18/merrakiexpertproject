import React ,{useState} from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Avatar,
  InputBase,
  Paper,
  Grid,
  Chip,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
  Stack,
  useMediaQuery,
  useTheme,Tabs,Tab,TextField,InputAdornment
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Sidebar from './Sidebar';

const dummyData = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  customerName: 'Customer 1',
  paymentMode: 'Online',
  paymentDate: '30/06/2025',
  status: 'Sent',
  billAmount: '₹118.00',
}));

const PaymentsSettings = () => {
    const [tab, setTab] = useState(0);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{ display: 'flex', bgcolor: '#f9fafc', minHeight: '100vh' }}>
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
        Payments Settings
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
  </Box> <Box sx={{ px: 2, py: 2 }}>
          <Paper sx={{ p: 1, borderRadius: 2 }}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              mb={3}
              spacing={2}
                sx={{
                display: 'flex',
                justifyContent: 'space-between',
                px: 4,
                py: 2,
              
                gap: 1,
                borderBottom: '1px solid #e0e0e0'
              }}
            >    
              <Grid item xs={12} sm="auto">
                <Typography variant="h6" fontWeight="bold">
                  Payments Settings
                </Typography>
              </Grid>
              <Grid item xs={12} sm="auto">
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#003865',
                    textTransform: 'none',
                    width: { xs: '100%', sm: 'auto' },borderRadius:2
                  }}
                  onClick={() => navigate('/add-Payment-settings')}
                >
                  + Add Payments Entry
                </Button>
              </Grid>
            </Grid>

                 <Box
              sx={{
                px: 2,
                pt: 0,
                display: 'flex',
                flexDirection: isSm ? 'column' : 'row',
                justifyContent: 'space-between',
                alignItems: isSm ? 'stretch' : 'center',
                gap: 2,
              }}
            >
              <Tabs
                value={tab}
                onChange={(e, newTab) => setTab(newTab)}
                sx={{
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    bgcolor: '#f1f1f1',
                    borderRadius: 2,
                    mr: 1,
                  },
                  '& .Mui-selected': {
                    bgcolor: '#004085',
                    color: 'white !important',
                  },
                  '& .MuiTabs-indicator': {
                    display: 'none',
                  },
                }}
              >
                <Tab label="All" />
                <Tab label="Draft" />
                <Tab label="Sent" />
              </Tabs>

              <TextField
                size="small"
                placeholder="Search by item name..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  sx: { bgcolor: 'white', borderRadius: 2 }
                }}
              />
            </Box>

           
  <Box sx={{ px: 4, pt: 2 }}>
           <TableContainer component={Paper} elevation={0}>
  <Table size="small">
    <TableHead>
      <TableRow sx={{ bgcolor: '#f5f6fa' }}>
        <TableCell padding="checkbox"><Checkbox /></TableCell>
        <TableCell>Customer Name</TableCell>
        <TableCell>Payment Mode</TableCell>
        <TableCell>Payment Date</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Bill Amount</TableCell>
        <TableCell align="center">Action</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {dummyData.map((row) => (
        <TableRow
          key={row.id}
          hover
          sx={{
            '&:hover': {
              backgroundColor: '#f9fafb',
            },
          }}
        >
          <TableCell padding="checkbox"><Checkbox /></TableCell>
          <TableCell>{row.customerName}</TableCell>
          <TableCell>{row.paymentMode}</TableCell>
          <TableCell>{row.paymentDate}</TableCell>
          <TableCell>
            <Chip
              label={row.status}
              size="small"
              sx={{
                bgcolor: row.status === 'Sent' ? '#e6f4ea' : '#fdecea',
                color: row.status === 'Sent' ? '#0b8f3c' : '#d32f2f',
                fontWeight: 500,
              }}
            />
          </TableCell>
          <TableCell>{row.billAmount}</TableCell>
          <TableCell align="center">
            <IconButton><MoreVertIcon /></IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

</Box> <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mt: 2,
                  flexDirection: isSm ? 'column' : 'row',
                  gap: 1,
                }}
              >
                <Typography variant="body2">
                  Showing 1 to 12 of 100 entries
                </Typography>
               <Pagination
  count={5}
  page={1}
  shape="rounded"
  sx={{
    '& .MuiPaginationItem-root': {
      color: 'grey',borderRadius:10,
    },
    '& .MuiPaginationItem-root.Mui-selected': {
      backgroundColor: '#004085',
      color: '#fff',borderRadius:10,
      '&:hover': {
        backgroundColor: '#003366',
      },
    },
  }}
/>

              </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentsSettings;
