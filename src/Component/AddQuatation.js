import React, { useState } from 'react';
import {
  Box, Button, Typography, Grid, TextField, Select, MenuItem,
  InputLabel, FormControl, IconButton, Paper, Divider, Avatar
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Sidebar from './Sidebar';
import {
  TableContainer, Table, TableHead, TableBody, TableRow, TableCell,
  Checkbox
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function NewQuotation() {
  const [quoteDate, setQuoteDate] = useState('2025-08-21');
  const [expiryDate, setExpiryDate] = useState('2025-09-21');
  const [items, setItems] = useState([
    { id: 1, details: '', quantity: 0, rate: 0, discount: 0 }
  ]);
  const [rows, setRows] = useState([
    { item: '', qty: 0, rate: 0, discount: 0, amount: 0 },
  ]);

  const handleAddRow = () => {
    setItems([...items, { id: Date.now(), details: '', quantity: 0, rate: 0, discount: 0 }]);
  };

  const handleRemoveRow = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const calculateAmount = (item) => {
    const amount = (item.quantity * item.rate) - item.discount;
    return isNaN(amount) ? 0 : amount;
  };
  const navigate = useNavigate();
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [itemModalOpen, setItemModalOpen] = useState(false);
  const [itemSearchTerm, setItemSearchTerm] = useState('');
  const [previewOpen, setPreviewOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const updateRow = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = field === 'qty' || field === 'rate' ? Number(value) : value;
    setItems(updated);
  };


  const deleteRow = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const subtotal = rows.reduce((sum, row) => sum + calculateAmount(row), 0);
  const gst = subtotal * 0.09;
  const total = subtotal + gst * 2;

  const cellStyle = {
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #e0e0e0',
  };

  const headStyle = {
    backgroundColor: '#f3f4f6',
    color: '#1f2937c1',
    fontWeight: 'bold',
    border: '1px solid #e0e0e0',
  };

  const inputStyle = {
    height: 40,
    borderRadius: '10px',
    bgcolor: '#f9fafb',
    fontSize: '14px',
    width: 100
  };
  const handleClose = () => {
    setItemModalOpen(false);
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
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Typography color="text.secondary" fontSize="14px">
              Quatation
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
        <Box sx={{ px: 4, py: 3, }}>
          <Paper sx={{ p: 1, borderRadius: 2 }}>


            <Typography variant="h6"
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
              }} onClick={() => navigate(-1)}
          > <ArrowBackIcon sx={{ fontSize: 22 }} />Quatation</Typography>
            <Grid container spacing={2} mb={2}>

              <Grid item xs={12} sm={6} md={3}>
                <TextField label="Quote#" fullWidth value="QT-000001" InputProps={{ readOnly: true }} sx={{
                  borderRadius: 2,
                  width: {
                    xs: 120,
                    sm: 200,
                    md: 260,
                    lg: 400,
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    bgcolor: '#f9fafb',
                    height: 40,
                  },
                }} />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth sx={{
                  width: {
                    xs: 120,
                    sm: 200,
                    md: 260,
                    lg: 400,
                  }
                  ,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    bgcolor: '#f9fafb',
                    height: 40,
                  },
                }}>
                  <InputLabel>Customer Name*</InputLabel>
                  <Select defaultValue="">
                    <MenuItem value=""><em>Select or add a customer</em></MenuItem>
                    <MenuItem value="Customer A">Customer A</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  label="Quote Date*"
                  type="date"
                  fullWidth
                  value={quoteDate}
                  onChange={(e) => setQuoteDate(e.target.value)}
                  InputLabelProps={{ shrink: true }} sx={{
                    width: {
                      xs: 120,
                      sm: 200,
                      md: 260,
                      lg: 400,
                    }
                    ,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                      bgcolor: '#f9fafb',
                      height: 40,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  label="Expiry Date*"
                  type="date"
                  fullWidth
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  InputLabelProps={{ shrink: true }} sx={{
                    width: {
                      xs: 120,
                      sm: 200,
                      md: 260,
                      lg: 400,
                    }
                    ,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                      bgcolor: '#f9fafb',
                      height: 40,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Subject" fullWidth placeholder="Write what this invoice is about" sx={{
                  width: {
                    xs: 120,
                    sm: 200,
                    md: 260,
                    lg: 400,
                  }
                  ,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    bgcolor: '#f9fafb',
                    height: 40,
                  },
                }} />
              </Grid>
            </Grid>

            <Box mt={5}>
              <Divider />
              <Box display="flex" justifyContent="space-between" mt={1} gap={3}>
                <Typography variant="subtitle1" fontWeight="bold" mb={2} sx={{ fontWeight: 600, fontSize: 18, }}>
                  Item Table
                </Typography>
                <Box display="flex" justifyContent="flex-end"
                >
                  <Button variant="text" sx={{ fontWeight: 500, color: '#002D72' }} onClick={handleAddRow}>
                    + ADD NEW ROW
                  </Button>
                  <Button variant="text" sx={{ fontWeight: 500, color: '#002D72' }}>
                    + ADD ITEMS IN BULK
                  </Button>
                </Box>

              </Box>

              <TableContainer
                component={Paper}
                sx={{
                  mt: 3,
                  boxShadow: 'none',
                  border: '1px solid #E0E0E0',
                  borderRadius: '12px',
                  overflowX: 'auto',
                }}
              >
                <Table size="small">
                  <TableHead sx={{ backgroundColor: '#f9fafb' }}>
                    <TableRow>
                      <TableCell sx={headStyle}>Item Details</TableCell>
                      <TableCell sx={headStyle}>Quantity</TableCell>
                      <TableCell sx={headStyle}>Rate</TableCell>
                      <TableCell sx={headStyle}>Amount</TableCell>
                      <TableCell sx={headStyle}></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index}>

                        <TableCell sx={cellStyle}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                            <TextField
                              fullWidth
                              placeholder="Type or Click to select an item"
                              value={row.item}
                              InputProps={{
                                readOnly: true,
                                sx: {
                                  height: '40px',
                                  bgcolor: '#f9fafb',
                                  borderRadius: '10px',
                                  fontSize: '14px',
                                  pl: 1.5,
                                }
                              }}
                              onClick={() => {
                                setSelectedRowIndex(index);
                                setItemModalOpen(true);
                                setItemSearchTerm('');
                              }}
                              size="small"
                            />
                            <IconButton size="small" sx={{ p: 0.5 }}>
                              <MoreVertIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        </TableCell>


                        <TableCell sx={cellStyle}>
                          <TextField
                            fullWidth
                            type="number"
                            value={row.qty}
                            onChange={(e) => updateRow(index, 'qty', e.target.value)}
                            size="small"
                            InputProps={{ sx: inputStyle }}
                          />
                        </TableCell>

                        <TableCell sx={cellStyle}>
                          <TextField
                            fullWidth
                            type="number"
                            value={row.rate}
                            onChange={(e) => updateRow(index, 'rate', e.target.value)}
                            size="small"
                            InputProps={{ sx: inputStyle }}
                          />
                        </TableCell>



                        <TableCell sx={cellStyle}>
                          <TextField
                            fullWidth
                            type="number"
                            value={calculateAmount(row).toFixed(2)}
                            InputProps={{
                              readOnly: true,
                              sx: inputStyle,
                            }}
                            size="small"
                          />
                        </TableCell>

                        <TableCell>
                          <IconButton onClick={() => deleteRow(index)} color="error">
                            <IconButton size="small" onClick={handleClose}>
                              <CloseIcon sx={{ fontSize: 18, color: 'red' }} />
                            </IconButton>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Grid container spacing={2} mt={4} alignItems="stretch">

                <Grid item xs={12} md={8}>
                  <Paper sx={{ p: 2, height: '40%' }}>
                    <TextField
                      multiline
                      rows={1}
                      label="Customer Notes"
                      defaultValue="Thanks for your business."
                      helperText="Will be displayed on the invoice"
                      sx={{
                        bgcolor: '#f9fafb',
                        borderRadius: '120px',
                        width: {
                          xs: '100%',
                          sm: 250,
                          md: 300,
                          lg: 450,
                        },
                      }}
                    />
                  </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Paper
                    variant="outlined"
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      bgcolor: '#fafafa',
                      width: {
                        xs: '100%',
                        sm: 250,
                        md: 300,
                        lg: 400,
                      },
                      mx: { xs: 0, sm: 'auto', md: 0 },
                    }}
                  >
                    {[
                      { label: 'Sub Total', value: `₹${subtotal.toFixed(2)}` },
                      { label: 'CGST (9%)', value: `₹${gst.toFixed(2)}` },
                      { label: 'SGST (9%)', value: `₹${gst.toFixed(2)}` },
                    ].map((item, i) => (
                      <Box
                        key={i}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mb={1}
                      >
                        <Typography fontSize={14}>{item.label}</Typography>
                        <Typography fontSize={14}>{item.value}</Typography>
                      </Box>
                    ))}

                    <Divider sx={{ my: 1 }} />

                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography fontWeight="bold" fontSize="1rem">
                        Total (₹)
                      </Typography>
                      <Typography fontWeight="bold" fontSize="1rem">
                        ₹{total.toFixed(2)}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>

            </Box>
           <Grid container spacing={2} mt={3}>
  <Grid item xs={12}>
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      justifyContent="space-between"
      alignItems="flex-start"
      gap={2}
    >
     <Box sx={{ flex: 1 }}>
                  <Typography fontWeight={500} mb={1}>
                    Terms & Conditions
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter terms here"
                    multiline
                    rows={1}
                    variant="outlined"
                 sx={{
                      bgcolor: '#f9fafb',
                      borderRadius: '12px',
                    width: {
                          xs: '100%',
                          sm: 251,
                          md: 350,
                          lg: 500
                        },  '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                bgcolor: '#f9fafb',
                height: 40,
              },
                    }}
                  />
                  <Box display="flex" alignItems="center" mt={1}>
                    <Checkbox />
                    <Typography variant="body2">
                      Use this in future for all invoices
                    </Typography>
                  </Box>
                </Box>

      <Box ml={20}
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'flex-start', sm: 'flex-end' },
          width: {
            xs: '100%',
            sm: '100%',
            md: 280,
            lg: 400,
          },
        }}
      >
        <Typography fontWeight={500} mb={1} >
          Attachment
        </Typography>
        <Button
          variant="outlined"
          startIcon={<CloudUploadIcon />}
          sx={{
            textTransform: 'none',
            width: '100%',
            borderRadius: '10px',
            bgcolor: '#fff',
            border: '1px solid #dfdfdfff',
            fontSize: '14px',
          }}
        >
          Upload File
        </Button>
        <Typography
          variant="caption"
          display="block"
          mt={1}
          color="text.secondary"
        >
          You can upload a maximum of 10 files, 10MB each
        </Typography>
      </Box>
    </Box>
  </Grid>
</Grid>



            <Box mt={4} display="flex" justifyContent="space-between" flexWrap="wrap" gap={2}>
              <Box display="flex" justifyContent="flex-end" mb={2}>
                <Button
                  startIcon={<VisibilityOutlinedIcon />}
                  sx={{ color: '#002D72', textTransform: 'none', fontWeight: 'bold' }}
                  onClick={() => setPreviewOpen(true)}
                >
                  Preview Invoice
                </Button>

              </Box>
              <Box display="flex" gap={2}>
                <Button variant="outlined" color="error" sx={{

                  px: 1,
                  py: 1,
                  borderRadius: '15px',
                  textTransform: 'none',
                  fontWeight: 600,
                }}>Cancel</Button>
                <Button variant="outlined" onClick={() => navigate('/quatation-list')} sx={{


                  px: 1,
                  py: 1,
                  borderRadius: '15px',
                  textTransform: 'none',
                  fontWeight: 600,
                }}>Save as Draft</Button>
                <Button variant="contained" onClick={() => navigate('/Quotation-list')} sx={{
                  backgroundColor: '#004085',
                  '&:hover': { backgroundColor: '#003366' },
                  px: 1,
                  py: 1,
                  borderRadius: '15px',
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                }}>Save & Send</Button>
              </Box>
            </Box></Paper></Box>
      </Box>
    </Box>
  );
}
