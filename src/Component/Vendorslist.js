import React, { useState } from 'react';
import {
  Box, Button, Typography, Grid, Table, TableHead, TableRow, TableCell,
  TableBody, Checkbox, TextField, Chip, Pagination, Tabs, Tab,
  IconButton, Menu, MenuItem, Dialog, DialogTitle, DialogContent,
InputAdornment, Paper,Avatar,InputBase,
  DialogActions,  useMediaQuery, useTheme
} from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import LinkIcon from '@mui/icons-material/Link';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const vendors = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Vendor ${i + 1}`,
  company: 'Company 1',
  displayName: 'Laxmi Enterprises',
  status: i % 5 === 1 ? 'Inactive' : 'Active',
  email: 'laxmi@gmail.com',
  phone: '7024568935',
}));

export default function VendorListPage() {
  
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [vendorList, setVendorList] = useState(vendors);

  const handleMenuClick = (event, vendor) => {
    setAnchorEl(event.currentTarget);
    setSelectedVendor(vendor);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedVendor(null);
  };

  const handleDeleteClick = () => {
    setOpenDialog(true);
    setAnchorEl(null);
  };

  const confirmDelete = () => {
    setVendorList(vendorList.filter(v => v.id !== selectedVendor.id));
    setOpenDialog(false);
    setSelectedVendor(null);
  };

  const getFilteredItems = () => {
    if (tab === 0) return vendorList;
    if (tab === 1) return vendorList.filter(v => v.status === 'Active');
    if (tab === 2) return vendorList.filter(v => v.status === 'Inactive');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box  px={2} flex={1} display="flex" flexDirection="column" minHeight="100vh" >
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
        Vendors
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
<Box sx={{ px: 2, py: 2 }}>
                            <Paper sx={{ p: 1, borderRadius: 2, }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 4, py: 2,
         
          borderBottom: '1px solid #e0e0e0'
        }}>
          <Typography variant="h6" fontWeight={600}>Vendors</Typography>
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              borderRadius: 2,
              bgcolor: '#004085',
              '&:hover': { bgcolor: '#003366' }
            }}
          >
            + New Vendors
          </Button>
        </Box>
      
               <Box
              sx={{
                px: 4,
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
      

       

        <Table sx={{ background: '#fff', borderRadius: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell><Checkbox /></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Display Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getFilteredItems().map((vendor) => (
              <TableRow key={vendor.id}>
                <TableCell><Checkbox /></TableCell>
                <TableCell>{vendor.name}</TableCell>
                <TableCell>{vendor.company}</TableCell>
                <TableCell>{vendor.displayName}</TableCell>
                <TableCell>
                  <Chip
                    label={vendor.status}
                    color={vendor.status === 'Active' ? 'success' : 'error'}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
                <TableCell>{vendor.email}</TableCell>
                <TableCell>{vendor.phone}</TableCell>
                <TableCell>
                  <IconButton onClick={(e) => handleMenuClick(e, vendor)}>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Box mt={3} display="flex" justifyContent="space-between">
          <Typography variant="body2">Showing 1 to 15 of {getFilteredItems().length} entries</Typography>
          <Pagination count={7} page={1} />
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
        <Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleCloseMenu}
>
  <MenuItem onClick={() => navigate('/edit-vendor')}>
    <EditIcon fontSize="small" sx={{ mr: 1 }} />
    Edit
  </MenuItem>
  <MenuItem >
    <EmailIcon fontSize="small" sx={{ mr: 1 }} />
    Send Email
  </MenuItem>
  <MenuItem >
    <RadioButtonUncheckedIcon fontSize="small" sx={{ mr: 1 }} />
    Mark as Inactive
  </MenuItem>
  <MenuItem >
    <LinkIcon fontSize="small" sx={{ mr: 1 }} />
    Share Link
  </MenuItem>
  <MenuItem onClick={handleDeleteClick} sx={{ color: 'error.main' }}>
    <DeleteOutlineIcon fontSize="small" sx={{ mr: 1 }} />
    Delete
  </MenuItem>
</Menu>

        </Menu></Paper>
      </Box>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Delete Vendor</DialogTitle>
          <DialogContent>
            Are you sure you want to delete vendor "{selectedVendor?.displayName}"?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="primary">
              No
            </Button>
            <Button onClick={confirmDelete} color="error" variant="contained">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      
    </Box>
  );
}
