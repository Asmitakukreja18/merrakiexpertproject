import React, { useState } from 'react';
import {
  Box, Typography, Button, Grid, TextField, InputAdornment, IconButton,
  Paper, Table, TableBody, TableCell, TableHead, TableRow, Menu, MenuItem,
  Tabs, Tab, Checkbox, Modal, InputBase, Pagination, Dialog, DialogTitle, DialogContent, DialogActions, Avatar
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  Print as PrintIcon,
  Delete as DeleteIcon,
  Block as BlockIcon,
  NotificationsNone as NotificationsNoneIcon,
  Close as CloseIcon,
  ArrowDropDown as ArrowDropDownIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Sidebar from './Sidebar';
import { useTheme, useMediaQuery } from '@mui/material';

const customers = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  company: 'Diva Enterprises',
  name: 'Ramesh Kumar',
  type: 'Business',
  email: 'rameshkumar@gmail.com',
  phone: '+91 8485912667',
}));

export default function CustomerList() {
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [tab, setTab] = useState(0);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [openPrintDialog, setOpenPrintDialog] = useState(false);
  const navigate = useNavigate();
const theme = useTheme();
const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); 

  const handleMenuOpen = (event, rowId) => {
    setMenuAnchor(event.currentTarget);
    setSelectedRow(rowId);
  };

  const handleMenuClose = () => setMenuAnchor(null);
  const handlePrintOpen = () => { setOpenPrintDialog(true); handleMenuClose(); };
  const handlePrintClose = () => setOpenPrintDialog(false);

  const handleSelectAll = (e) => {
    setSelectedCustomers(e.target.checked ? customers.map((c) => c.id) : []);
  };

  const handleSelectOne = (id) => {
    setSelectedCustomers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, bgcolor: '#f9fafc', p: { xs: 1, sm: 2, md: 3 } }}>
        
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
       Customer
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
    

        <Paper sx={{ p: 2, borderRadius: 2 }}>
     
          <Box sx={{
            px: 2, py: 2, borderBottom: '1px solid #e0e0e0',
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: 1
          }}>
            {selectedCustomers.length > 0 ? (
              <>
                <Typography fontWeight={600} fontSize={14}>
                  {selectedCustomers.length} Selected
                </Typography>
                <Box display="flex" gap={1}>
                  <Button variant="outlined" size="small">Mark as Inactive</Button>
                  <Button variant="text" color="error" size="small" onClick={() => setOpenDelete(true)}>
                    <DeleteIcon fontSize="small" sx={{ mr: 0.5 }} /> Delete All
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Typography variant="h6" fontWeight={600}>Customer</Typography>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: 'none',
                    borderRadius: 2,
                    bgcolor: '#004085',
                    '&:hover': { bgcolor: '#003366' },
                  }}
                >
                  + New Customer
                </Button>
              </>
            )}
          </Box>

          <Box sx={{ px: 2, pt: 2 }}>
           <Box
  sx={{
    display: 'flex',
    flexDirection: isTablet ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: isTablet ? 'stretch' : 'center',
    gap: 2,
    mb: 2,
  }}
>
  <Tabs
    value={tab}
    onChange={(e, val) => setTab(val)}
    variant="scrollable"
    scrollButtons="auto"
    sx={{
      flexGrow: 1,
      '& .MuiTab-root': {
        textTransform: 'none',
        bgcolor: '#f1f1f1',
        borderRadius: 2,
        mr: 1,
        fontSize: 13,
      },
      '& .Mui-selected': {
        bgcolor: '#004085',
        color: 'white !important',
      },
      '& .MuiTabs-indicator': { display: 'none' },
    }}
  >
    <Tab label="Active Customers" />
    <Tab label="Inactive Customers" />
  </Tabs>

  <TextField
    fullWidth={isTablet}
    size="small"
    placeholder="Search Customers"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
      sx: { bgcolor: 'white', borderRadius: 2 },
    }}
  />
</Box>


            <Paper elevation={0} sx={{ mt: 2, borderRadius: 2 }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: '#f5f6fa' }}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedCustomers.length === customers.length}
                        indeterminate={selectedCustomers.length > 0 && selectedCustomers.length < customers.length}
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Company Name</TableCell>
                    <TableCell>Customer Name</TableCell>
                    <TableCell >Customer Type</TableCell>
                    <TableCell>Email Address</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell >Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customers.map((row) => (
                    <TableRow
                      key={row.id}
                      hover
                      sx={{
                        backgroundColor: '#fff',
                        '&:hover': {
                          backgroundColor: 'whitesmoke',
                          transform: 'translateY(-4px) scale(1.01)',
                          boxShadow: '0 8px 20px rgba(187, 187, 187, 0.91)',
                          zIndex: 10,
                          position: 'relative',
                        }
                      }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedCustomers.includes(row.id)}
                          onChange={() => handleSelectOne(row.id)}
                        />
                      </TableCell>
                      <TableCell>{row.company}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell >{row.email}</TableCell>
                      <TableCell>{row.phone}</TableCell>
                      <TableCell>
                        <IconButton onClick={(e) => handleMenuOpen(e, row.id)}><MoreVertIcon /></IconButton>
                        {selectedRow === row.id && (
                          <Menu
                            anchorEl={menuAnchor}
                            open={Boolean(menuAnchor)}
                            onClose={handleMenuClose}
                          >
                            <MenuItem onClick={() => {
                              navigate('/add-customer', { state: { customer: row } });
                              handleMenuClose();
                            }}><EditIcon fontSize="small" sx={{ mr: 1 }} /> Edit</MenuItem>
                            <MenuItem onClick={handlePrintOpen}><PrintIcon fontSize="small" sx={{ mr: 1 }} /> Print</MenuItem>
                            <MenuItem><BlockIcon fontSize="small" sx={{ mr: 1 }} /> Mark as Inactive</MenuItem>
                            <MenuItem sx={{ color: 'error.main' }} onClick={() => {
                              setOpenDelete(true);
                              setSelectedRow(row.id);
                              handleMenuClose();
                            }}><DeleteIcon fontSize="small" sx={{ mr: 1 }} /> Delete</MenuItem>
                          </Menu>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
<Box
  mt={2}
  display="flex"
  flexDirection={isTablet ? 'column' : 'row'}
  alignItems={isTablet ? 'flex-start' : 'center'}
  justifyContent="space-between"
  gap={2}
>

              <Typography variant="body2" color="text.secondary">Showing 1 to 12 of 100 entries</Typography>
              <Pagination count={5} page={1}
                sx={{
                  '& .MuiPaginationItem-root': {
                    color: 'grey', borderColor: '#004085',
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
        <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'white',
            p: 3, borderRadius: 2, boxShadow: 24
          }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h6" fontWeight={600}>Delete Customer</Typography>
              <IconButton onClick={() => setOpenDelete(false)}><CloseIcon /></IconButton>
            </Box>
            <Typography color="text.secondary">
              Are you sure you want to delete {customers.find(c => c.id === selectedRow)?.name}?
              This action cannot be undone.
            </Typography>
            <Box display="flex" justifyContent="flex-end" gap={2} mt={3}>
              <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
              <Button variant="contained" color="error" onClick={() => setOpenDelete(false)}>Yes</Button>
            </Box>
          </Box>
        </Modal>

        <Dialog open={openPrintDialog} onClose={handlePrintClose} maxWidth={false}
          PaperProps={{ sx: { width: 460, borderRadius: 3 } }}>
          <DialogTitle sx={{
            fontWeight: 'bold', fontSize: '16px',
            borderBottom: '1px solid #e0e0e0',
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', px: 2, py: 1.5
          }}>
            Print Statement
            <IconButton onClick={handlePrintClose}><CloseIcon /></IconButton>
          </DialogTitle>
          <DialogContent sx={{ px: 3, pt: 2 }}>
            <Typography fontSize={14} color="text.secondary" mb={2}>
              You can print your customer’s statements for the selected date range.
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker label="Start Date" value={startDate} onChange={setStartDate}
                  renderInput={(params) => <TextField fullWidth {...params} size="small" />} />
                <DatePicker label="End Date" value={endDate} onChange={setEndDate}
                  renderInput={(params) => <TextField fullWidth {...params} size="small" />} />
              </LocalizationProvider>
            </Box>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'flex-end', px: 3, pb: 2 }}>
            <Button onClick={handlePrintClose} variant="outlined">Cancel</Button>
            <Button onClick={() => {
              console.log(startDate, endDate);
              handlePrintClose();
            }} variant="contained" sx={{
              bgcolor: '#004085',
              '&:hover': { bgcolor: '#003366' }
            }}>
              Print Statement
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}
