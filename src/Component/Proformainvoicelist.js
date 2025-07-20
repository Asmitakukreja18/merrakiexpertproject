import React from 'react';
import {
  Box, Typography, Button, InputBase, IconButton, Avatar, Chip,
  Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Menu, MenuItem,Pagination
,  Paper
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Sidebar from './Sidebar';
import { Tabs, Tab, TextField, InputAdornment } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import {
  Checkbox,

} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import BlockIcon from '@mui/icons-material/Block';
import DeleteIcon from '@mui/icons-material/Delete';

const rows = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  invoiceNo: `PINV-0000${i + 1}`,
  customerName: `Customer ${i + 1}`,
  createdDate: '30/06/2025',
  status: i % 2 === 0 ? 'Draft' : 'Sent',
  billAmount: 100 + i * 10,
}));


const ProformaInvoicelist = () => {
  const [anchorEl, setAnchorEl] = useState(null);
const [selectedItem, setSelectedItem] = useState(null);

const handleMenuOpen = (event, itemId) => {
  setAnchorEl(event.currentTarget);
  setSelectedItem(itemId);
};

const handleMenuClose = () => {
  setAnchorEl(null);
  setSelectedItem(null);
};

  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(null);
const [tab, setTab] = useState(0);

  const handleMenuClick = (event, index) => {
    setMenuAnchor(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setMenuAnchor(null);
    setSelectedIndex(null);
  };
const theme = useTheme();
const isSm = useMediaQuery(theme.breakpoints.down('sm'));
const getFilteredItems = () => {
  if (tab === 0) return rows;
  if (tab === 1) return rows.filter(item => item.status === 'Draft');
  if (tab === 2) return rows.filter(item => item.status === 'Sent');
  return rows;
};

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F9FAFB' }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>

        <Box
          sx={{
            height: 60,
            display: 'flex',
            alignItems: 'center',
            px: 4,
            py:2,
            justifyContent: 'space-between',
          
          }}
        >
          <Typography fontWeight="bold">Proforma Invoice</Typography>

          <Box display="flex" alignItems="center" gap={2}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                bgcolor: '#F0F0F0',
                px: 2,
                py: 0.5,
                borderRadius: 5,
                minWidth: 250,
              }}
            >
              <SearchIcon fontSize="small" sx={{ color: '#555' }} />
              <InputBase
                placeholder="Search anything here..."
                sx={{ ml: 1, flex: 1, fontSize: 14 }}
              />
            </Box>

            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>

            <Box display="flex" alignItems="center" gap={1}>
              <Avatar src="https://i.pravatar.cc/40?img=1" />
              <Typography fontSize={14}>Admin name</Typography>
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
                Pro Forma Invoice
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
                + New Pro Forma Invoice
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
     <Table
  size="small"
  sx={{
    bgcolor: '#fff',
    borderRadius: 2,
    boxShadow: '0px 1px 3px rgba(0,0,0,0.05)',
    overflow: 'hidden',
  }}
>
  <TableHead>
    <TableRow sx={{ bgcolor: '#f5f6fa' }}>
      <TableCell padding="checkbox">
        <Checkbox size="small" />
      </TableCell>
      <TableCell sx={{ fontWeight: 600 }}>Proforma Invoice#</TableCell>
      <TableCell sx={{ fontWeight: 600 }}>Customer Name</TableCell>
      <TableCell sx={{ fontWeight: 600 }}>Created Date</TableCell>
      <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
      <TableCell sx={{ fontWeight: 600 }}>Bill Amount</TableCell>
      <TableCell align="center" sx={{ fontWeight: 600 }}>Action</TableCell>
    </TableRow>
  </TableHead>

  <TableBody>
    {getFilteredItems().map((item) => (
      <TableRow key={item.id} hover>
        <TableCell padding="checkbox">
          <Checkbox size="small" />
        </TableCell>
        <TableCell sx={{ fontWeight: 500, color: '#007bff' }}>{item.invoiceNo}</TableCell>
        <TableCell>{item.customerName}</TableCell>
        <TableCell>{item.createdDate}</TableCell>
        <TableCell>
          <Chip
            label={item.status}
            size="small"
            sx={{
              bgcolor: item.status === 'Sent' ? '#e6ffed' : '#f0f0f0',
              color: item.status === 'Sent' ? '#28a745' : '#6c757d',
              borderRadius: '4px',
              fontWeight: 500,
              px: 1.5,
            }}
          />
        </TableCell>
        <TableCell>₹{item.billAmount}.00</TableCell>
        <TableCell align="center">
          <IconButton size="small" onClick={(e) => handleMenuOpen(e, item.id)}>
            <MoreVertIcon />
          </IconButton>
          {selectedItem === item.id && (
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{ sx: { width: 180 } }}
            >
              <MenuItem>
                <EditIcon fontSize="small" sx={{ mr: 1 }} /> Edit
              </MenuItem>
              <MenuItem>
                <BlockIcon fontSize="small" sx={{ mr: 1 }} /> Mark as Inactive
              </MenuItem>
              <MenuItem sx={{ color: 'error.main' }}>
                <DeleteIcon fontSize="small" sx={{ mr: 1 }} /> Delete
              </MenuItem>
            </Menu>
          )}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</Box>



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
                           sx={{
                             '& .MuiPaginationItem-root': {
                               color: 'grey',
                               borderColor: '#004085',
                             },
                             '& .Mui-selected': {
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


        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleClose}>Edit</MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default ProformaInvoicelist;
