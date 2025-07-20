import React from 'react';
import {
  Box, Typography, Button, InputBase, IconButton, Avatar, MenuItem, TextField,
  Chip, Menu, Table, TableHead, TableBody, TableRow, Pagination, TableCell, TablePagination,Checkbox,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from './Sidebar';
import {
  Paper,
  Tabs,
  Tab,
  InputAdornment,
} from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import { useState } from 'react';


const rows = Array.from({ length: 15 }, (_, i) => ({
  taxType: 'GST',
  rate: '9%',
  label: 'Electronics',
  status: i % 3 === 0 ? 'Inactive' : i % 4 === 0 ? 'Inactive' : 'Active',
  date: '01/04/2025',
}));

const Taxlist = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const open = Boolean(anchorEl);
const [tab, setTab] = useState(0);

const theme = useTheme();
const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = (event, rowIndex) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(rowIndex);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F9FAFB' }}>
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
        Tax
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
  sm: 150,
  md: 200,
  lg: 300,
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
                Tax
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
                + New Tax
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
                <Tab label="Active" />
                <Tab label="Inactive" />
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
              <Paper elevation={0}>
           <Table size="small">
  <TableHead>
    <TableRow sx={{ bgcolor: '#f5f6fa' }}>
      <TableCell padding="checkbox">
        <Checkbox />
      </TableCell>
      <TableCell>Tax Type</TableCell>
      <TableCell>Rate (%)</TableCell>
      <TableCell>Label/Category</TableCell>
      <TableCell>Status</TableCell>
      <TableCell>Effective Date</TableCell>
      <TableCell align="center">Action</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row, i) => (
      <TableRow key={i} hover>
        <TableCell padding="checkbox">
          <Checkbox />
        </TableCell>
        <TableCell>{row.taxType}</TableCell>
        <TableCell>{row.rate}</TableCell>
        <TableCell>{row.label}</TableCell>
        <TableCell>
          <Chip
            label={row.status}
            color={row.status === 'Active' ? 'success' : 'error'}
            size="small"
          />
        </TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell align="center">
          <IconButton onClick={(e) => handleClick(e, i)}>
            <MoreVertIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</Paper></Box>
          
            <Box
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
            /></Box></Paper>
          </Box>
        </Box>
      </Box>

  
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleClose}>
          <EditIcon sx={{ fontSize: 16, mr: 1 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Mark as Inactive
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ color: 'red' }}>
          <DeleteIcon sx={{ fontSize: 16, mr: 1 }} />
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Taxlist;
