import React, { useState } from 'react';
import {
  Box, Typography, Button, Grid, Table, TableHead, TableRow, TableCell,
  TableBody, Tabs, Tab, IconButton, Menu, MenuItem, Chip, Pagination,
  Checkbox, TextField, Avatar, Paper, InputBase, useTheme, useMediaQuery
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Sidebar from './Sidebar';

const sampleQuotations = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  quoteNumber: 'QT-00001',
  customer: 'Customer 1',
  createdDate: '30/06/2025',
  expiryDate: '30/08/2025',
  status: i % 3 === 0 ? 'Sent' : 'Draft',
  amount: '₹118.00',
}));

export default function QuotationListPage() {
  const [tab, setTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedQuote, setSelectedQuote] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabChange = (_, newVal) => setTab(newVal);

  const handleMenuClick = (event, quote) => {
    setAnchorEl(event.currentTarget);
    setSelectedQuote(quote);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedQuote(null);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f9fafc' }}>
      <Sidebar />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        <Box
          sx={{
            px: 3,
            py: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
          }}
        >
          <Typography color="text.secondary" fontSize="14px">Quotation</Typography>
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
                width: { xs: '100%', sm: 200, md: 300, lg: 340 },
              }}
            >
              <SearchIcon sx={{ fontSize: 20, color: '#999' }} />
              <InputBase
                placeholder="Search anything here..."
                sx={{ ml: 1, fontSize: 14, flex: 1 }}
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
              {!isMobile && (
                <Typography fontSize={14}>Admin name</Typography>
              )}
              <ArrowDropDownIcon />
            </Box>
          </Box>
        </Box>

        <Box sx={{ px: { xs: 1, sm: 2, md: 4 }, py: 2 }}>
          <Paper sx={{ borderRadius: 2 }}>
          
            <Box
              sx={{
                px: 3,
                py: 2,
                borderBottom: '1px solid #e0e0e0',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'center' },
                gap: 2,
              }}
            >
              <Typography variant="h6" fontWeight={600}>Quotation</Typography>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{ backgroundColor: '#003366', textTransform: 'none' }}
              >
                New Quotation
              </Button>
            </Box>

            <Box sx={{ px: 3, pt: 3, pb: 1 }}>
              <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                <Grid item xs={12} md="auto">
                  <Tabs
                    value={tab}
                    onChange={handleTabChange}
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
                    <Tab label="All Quotation" />
                    <Tab label="Sent Quotation" />
                    <Tab label="Draft Quotation" />
                  </Tabs>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Search by quotation no, customer name..."
                  />
                </Grid>
              </Grid>
            </Box>

          
            <Box sx={{ px: 3, py: 2 }}>
              <Table sx={{ bgcolor: '#fff' }}>
                <TableHead>
                  <TableRow sx={{ bgcolor: '#f5f6fa' }}>
                    <TableCell><Checkbox /></TableCell>
                    <TableCell>Quotation#</TableCell>
                    <TableCell>Customer Name</TableCell>
                    <TableCell>Created Date</TableCell>
                    <TableCell>Expiry Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Bill Amount</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sampleQuotations.map((q) => (
                    <TableRow key={q.id} hover>
                      <TableCell><Checkbox /></TableCell>
                      <TableCell sx={{ color: '#007bff', fontWeight: 500 }}>{q.quoteNumber}</TableCell>
                      <TableCell>{q.customer}</TableCell>
                      <TableCell>{q.createdDate}</TableCell>
                      <TableCell>{q.expiryDate}</TableCell>
                      <TableCell>
                        <Chip
                          label={q.status}
                          size="small"
                          color={q.status === 'Sent' ? 'success' : 'default'}
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell>{q.amount}</TableCell>
                      <TableCell align="center">
                        <IconButton onClick={(e) => handleMenuClick(e, q)}>
                          <MoreVertIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>

            <Box
              sx={{
                px: 3,
                py: 2,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Typography variant="body2">Showing 1 to 15 of 100 entries</Typography>
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

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Download the PDF</MenuItem>
            <MenuItem>Print Quotation</MenuItem>
            <MenuItem>Send Email</MenuItem>
            <MenuItem>Share Link</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
}
