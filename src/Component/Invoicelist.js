import React from 'react';
import {
    Box, Typography, Button, TextField, InputAdornment, IconButton, Paper,
    Table, TableHead, TableRow, TableCell, TableBody,  Pagination,Menu, MenuItem, Chip, Checkbox,Avatar,InputBase, useMediaQuery, useTheme
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PrintIcon from '@mui/icons-material/Print';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import EmailIcon from '@mui/icons-material/Email';
import Sidebar from './Sidebar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


const invoices = Array.from({ length: 13 }).map((_, i) => ({
    id: `INV-000${i + 1}`,
    customer: 'Customer 1',
    createdDate: '30/06/2025',
    dueDate: '30/06/2025',
    status: i % 3 === 0 ? 'Paid' : i % 2 === 0 ? 'Draft' : 'Partial',
    amount: '₹118.00',
}));

const statusColor = {
    Paid: 'success',
    Draft: 'default',
    Partial: 'info',
};

export default function Invoicelist() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [menuIndex, setMenuIndex] = React.useState(null);

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const handleMenuOpen = (event, index) => {
        setAnchorEl(event.currentTarget);
        setMenuIndex(index);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuIndex(null);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />

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
        Invoice
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
                            <Paper sx={{ p: 1, borderRadius: 2, }}>
                
                   <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 4, py: 2,
         
          borderBottom: '1px solid #e0e0e0'
        }}>
          <Typography variant="h6" fontWeight={600}>Invoice</Typography>
      
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#004085',
                            color: '#fff',
                            fontWeight: 600,
                            textTransform: 'none',
                            borderRadius: '10px',
                            px: 2.5,
                            '&:hover': { backgroundColor: '#003366' },
                        }}
                    >
                        + New Invoice
                    </Button>
        </Box>  
             

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                       
                        px: 3,
                        py: 1.5,
                        borderRadius: 1,
                        mb: 2,
                    }}
                >
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        {['All', 'Paid', 'Unpaid', 'Overdue','Partially Paid','Draft'].map((label, i) => (
                            <Button
                                key={i}
                                variant={i === 0 ? 'contained' : 'outlined'}
                                sx={{
                                    backgroundColor: i === 0 ? '#05366aff' : 'transparent',
                                  
                                    color: i === 0 ? '#fff' : '#333',
                                    fontWeight: 500,
                                    textTransform: 'none',
                                    borderRadius: '10px',
                                    px: 2,
                                    height: 36,
                                    '&:hover': {
                                        backgroundColor: i === 0 ? '#003366' : '#f5f5f5',
                                    },
                                }}
                            >
                                {label}
                            </Button>
                        ))}
                    </Box>

                    <TextField
                        size="small"
                        placeholder="Search by invoice no, customer name..."
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            sx: {
                                bgcolor: '#f9f9f9',
                                borderRadius: '20px',
                                px: 1,
                            },
                        }}
                        sx={{ width: 300 }}
                    />
                </Box>

                <Paper elevation={0}>
                <Table sx={{ width: '100%',  whiteSpace: 'nowrap' }}>
  <TableHead>
    <TableRow sx={{ bgcolor: '#f5f6fa' }}>
      <TableCell padding="checkbox">
        <Checkbox />
      </TableCell>
      <TableCell sx={{ fontWeight: 600 }}>Invoice#</TableCell>
      <TableCell sx={{ fontWeight: 600 }}>Customer Name</TableCell>
      <TableCell sx={{ fontWeight: 600 }}>Created Date</TableCell>
      <TableCell sx={{ fontWeight: 600 }}>Due Date</TableCell>
      <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
      <TableCell sx={{ fontWeight: 600 }}>Bill Amount</TableCell>
      <TableCell align="center" sx={{ fontWeight: 600 }}>Action</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {invoices.map((invoice, index) => (
      <TableRow key={invoice.id} hover>
        <TableCell padding="checkbox">
          <Checkbox />
        </TableCell>
        <TableCell sx={{ color: '#0061F2', fontWeight: 500 }}>{invoice.id}</TableCell>
        <TableCell>{invoice.customer}</TableCell>
        <TableCell>{invoice.createdDate}</TableCell>
        <TableCell>{invoice.dueDate}</TableCell>
        <TableCell>
          <Chip
            label={
              invoice.status === 'Partial'
                ? 'Partially Paid'
                : invoice.status === 'Draft'
                ? 'Draft'
                : invoice.status
            }
            size="small"
            sx={{
              backgroundColor:
                invoice.status === 'Paid'
                  ? '#e0f7e9'
                  : invoice.status === 'Draft'
                  ? '#f0f0f0'
                  : invoice.status === 'Partial'
                  ? '#e3f2fd'
                  : '#fce4ec',
              color:
                invoice.status === 'Paid'
                  ? '#2e7d32'
                  : invoice.status === 'Draft'
                  ? '#666'
                  : invoice.status === 'Partial'
                  ? '#1976d2'
                  : '#d32f2f',
              fontWeight: 500,
            }}
          />
        </TableCell>
        <TableCell>{invoice.amount}</TableCell>
        <TableCell align="center">
          <IconButton onClick={(e) => handleMenuOpen(e, index)}>
            <MoreVertIcon />
          </IconButton>
          {menuIndex === index && (
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{ sx: { width: 200 } }}
            >
              <MenuItem>
                <EditIcon fontSize="small" sx={{ mr: 1 }} /> Edit
              </MenuItem>
              <MenuItem>
                <PictureAsPdfIcon fontSize="small" sx={{ mr: 1 }} /> Download PDF
              </MenuItem>
              <MenuItem>
                <PrintIcon fontSize="small" sx={{ mr: 1 }} /> Print
              </MenuItem>
              <MenuItem>
                <EmailIcon fontSize="small" sx={{ mr: 1 }} /> Email
              </MenuItem>
              <MenuItem>
                <ShareIcon fontSize="small" sx={{ mr: 1 }} /> Share
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
                              
                </Box></Paper></Box>
            </Box>
        </Box>
    );
}
