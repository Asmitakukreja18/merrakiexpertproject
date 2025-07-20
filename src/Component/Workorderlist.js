import React from 'react';
import {
  Box, Typography, Button, InputBase, IconButton, Avatar, Chip,
  Table, TableHead, TableRow, TableCell, TableBody, Menu, MenuItem, Paper, Pagination
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Sidebar from './Sidebar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Checkbox
} from '@mui/material';
import { useState } from 'react';

const rows = Array.from({ length: 15 }, (_, i) => ({
  orderNo: 'WO-00001',
  customer: 'Customer 1',
  date: '30/06/2025',
  status: ['Draft', 'Completed', 'In Progress', 'Cancelled'][i % 4],
  amount: '₹118.00',
}));

const statusColorMap = {
  Draft: { bg: '#E6F4EA', color: '#333' },
  'In Progress': { bg: '#E5F0FB', color: '#1565C0' },
  Completed: { bg: '#E6F4EA', color: '#2E7D32' },
  Cancelled: { bg: '#FEEAEA', color: '#C62828' },
};

const WorkOrderlist = () => {
  const [tab, setTab] = useState(0);

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleMenuClick = (event, index) => {
    setMenuAnchor(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setMenuAnchor(null);
    setSelectedIndex(null);
  };

  return (
    <Box sx={{ display: 'flex', bgcolor: '#F9FAFB', minHeight: '100vh' }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
      
      
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
        Work Order
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
                Work Order
              </Typography>
              <Button
                variant="contained"
                sx={{
                  textTransform: 'none',
                  borderRadius: 2,
                  bgcolor: '#004085',
                  '&:hover': { bgcolor: '#003366' }
                }}
              >
                + New Work Order
              </Button>
            </Box>

      
            <Box
              sx={{
                px: 2,
                pt: 2,
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
                <Tab label="In progress" />
                <Tab label="Completed" />
                <Tab label="Cancelled" />
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


            <Box sx={{ overflowX: 'auto' ,pt:2}}>
             <Paper elevation={0}>
  <Table size="small" sx={{ minWidth: 700 }}>
    <TableHead>
      <TableRow sx={{ bgcolor: '#f5f6fa' }}>
        <TableCell padding="checkbox">
          <Checkbox />
        </TableCell>
        <TableCell>Work Order #</TableCell>
        <TableCell>Customer Name</TableCell>
        <TableCell>Created Date</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Bill Amount</TableCell>
        <TableCell align="center">Action</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row, i) => (
        <TableRow key={i} hover>
          <TableCell padding="checkbox">
            <Checkbox />
          </TableCell>
          <TableCell>{row.orderNo}</TableCell>
          <TableCell>{row.customer}</TableCell>
          <TableCell>{row.date}</TableCell>
          <TableCell>
            <Chip
              label={row.status}
              size="small"
              sx={{
                bgcolor: statusColorMap[row.status].bg,
                color: statusColorMap[row.status].color,
              }}
            />
          </TableCell>
          <TableCell>{row.amount}</TableCell>
          <TableCell align="center">
            <IconButton onClick={(e) => handleMenuClick(e, i)}>
              <MoreVertIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</Paper>

            </Box>

           
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: isSm ? 'column' : 'row',
                gap: 2,
                mt: 3,
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
                    color: 'grey',
                    borderRadius: 10,
                  },
                  '& .MuiPaginationItem-root.Mui-selected': {
                    backgroundColor: '#004085',
                    color: '#fff',
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

      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Cancel</MenuItem>
        <MenuItem onClick={handleClose} sx={{ color: 'red' }}>Delete</MenuItem>
      </Menu>
    </Box>
  );
};

export default WorkOrderlist;
