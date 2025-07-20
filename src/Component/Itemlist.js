import { useState } from 'react';
import {
  Box, Typography, Button, TextField, Tabs, Tab, Table, TableHead, TableRow, TableCell, TableBody,
  IconButton, Menu, MenuItem, Chip, Checkbox, InputAdornment, Paper, Pagination, InputBase, Avatar,
  useMediaQuery, useTheme
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import SearchIcon from '@mui/icons-material/Search';
import Sidebar from './Sidebar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const itemsData = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  name: `Item ${i + 1}`,
  sellingPrice: 50 + i,
  purchasePrice: 30 + i,
  unit: 'cm',
  status: i % 3 === 0 ? 'Inactive' : 'Active'
}));

export default function ItemList() {
  const [tab, setTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = (e, itemId) => {
    setAnchorEl(e.currentTarget);
    setSelectedItem(itemId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedItem(null);
  };

  const getFilteredItems = () => {
    if (tab === 0) return itemsData;
    if (tab === 1) return itemsData.filter(i => i.status === 'Active');
    if (tab === 2) return itemsData.filter(i => i.status === 'Inactive');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar active="Items" />
      <Box sx={{ flex: 1, bgcolor: '#f9fafc', minHeight: '100vh' }}>
     
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
        Product & Services
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
          <Paper sx={{ p: 1, borderRadius: 2 }}>
             <Box
  sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: isSm ? 'flex-start' : 'center',
    flexDirection: isSm ? 'column' : 'row',
    gap: 1,
    px: 4,
    py: 2,
    borderBottom: '1px solid #e0e0e0'
  }}
>

              <Typography variant="h6" fontWeight={600}>
                Products & Services
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
                + New Products & Services
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

           <Box sx={{ px: 4, pt: 2 }}>
              <Paper elevation={0}>
               <Table sx={{ minWidth: 600 }}>

                  <TableHead>
                    <TableRow sx={{ bgcolor: '#f5f6fa' }}>
                      <TableCell><Checkbox /></TableCell>
                      <TableCell>Item</TableCell>
                      <TableCell>Selling Price</TableCell>
                      <TableCell>Purchase Price</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Unit</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {getFilteredItems().map((item) => (
                      <TableRow key={item.id} hover>
                        <TableCell><Checkbox /></TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>₹{item.sellingPrice}.00</TableCell>
                        <TableCell>₹{item.purchasePrice}.00</TableCell>
                        <TableCell>
                          <Chip
                            label={item.status}
                            color={item.status === 'Active' ? 'success' : 'error'}
                            size="small"
                          />
                        </TableCell>
                        <TableCell>{item.unit}</TableCell>
                        <TableCell align="center">
                          <IconButton onClick={(e) => handleMenuOpen(e, item.id)}>
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
              </Paper>

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
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
