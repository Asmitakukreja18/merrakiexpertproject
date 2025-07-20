import React from 'react';
import {
    Box, Button, Typography, Grid, TextField, MenuItem, IconButton, Select,
    InputLabel, FormControl, Divider, Breadcrumbs, Link, Radio, RadioGroup, FormControlLabel, InputBase,Avatar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Sidebar from './Sidebar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const PurchaseOrderForm = () => {
const navigate= useNavigate()
    const [customers, setCustomers] = useState(['Customer 1', 'Customer 2']);
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [customerModalOpen, setCustomerModalOpen] = useState(false);
    const [customerTab, setCustomerTab] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);
    const [previewOpen, setPreviewOpen] = useState(false);

const [selectedVendor, setSelectedVendor] = useState('');
    const handleAddCustomer = () => {
        setCustomerModalOpen(true);
    }
    const [items, setItems] = useState(['Item 1', 'Item 2']);
    const [itemModalOpen, setItemModalOpen] = useState(false);
    const [itemSearchTerm, setItemSearchTerm] = useState('');
    const [rows, setRows] = useState([
        { item: '', qty: 0, rate: 0, discount: 0, amount: 0 },
    ]);

 const [addressType, setAddressType] = useState('organization');


    const handleItemSelect = (rowIndex, itemName) => {
        const updatedRows = [...rows];
        updatedRows[rowIndex].item = itemName;
        setRows(updatedRows);
        setItemModalOpen(false);
    };


    const updateRow = (index, field, value) => {
        const updated = [...rows];
        updated[index][field] = parseFloat(value) || 0;
        updated[index].amount = calculateAmount(updated[index]);
        setRows(updated);
    };


    const calculateAmount = (row) => {
        const total = (row.qty || 0) * (row.rate || 0);
        return total - (row.discount || 0);
    };

    const addNewRow = () => {
        setRows([...rows, { item: '', qty: 0, rate: 0, discount: 0, amount: 0 }]);
    };

    const deleteRow = (index) => {
        const updated = [...rows];
        updated.splice(index, 1);
        setRows(updated);
    };

    const subtotal = rows.reduce((sum, row) => sum + calculateAmount(row), 0);
    const gst = subtotal * 0.09;
    const total = subtotal + gst * 2;

  const inputStyle = {
    height: 40,
    borderRadius: '10px',
    bgcolor: '#f9fafb',
    fontSize: '14px',
    width: 100
  };

 
const headStyle = {
  backgroundColor: '#f3f4f6',
  color: '#1f2937c1',
  fontWeight: 'bold',
  border: '1px solid #e0e0e0',
};

  
const cellStyle = {
  padding: '10px',
  fontSize: '14px',
  border: '1px solid #e0e0e0', 
};
 const handleClose = () => {
    setItemModalOpen(false);
  };
    return (
        <Box sx={{ display: 'flex', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <Sidebar />

            <Box flex={1} display="flex" flexDirection="column" minHeight="100vh">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 3,
                        mt: 1,
                        px: 3
                    }}
                >

                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        <Typography color="text.secondary" fontSize="14px" >
                            Purchase order
                        </Typography>
                        <Typography color="text.primary" fontWeight={600} fontSize="14px">
                            New Purchase order
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


                <Box p={3}>
                    <Paper sx={{ p: 1, borderRadius: 2 }}>
                        <Typography fontWeight="bold" fontSize={18} mb={2}  sx={{
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
          > <ArrowBackIcon sx={{ fontSize: 22 }} />New Purchase Order</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}><TextField fullWidth label="Purchase Order*" sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
          bgcolor: '#f9fafb',
          height: 40, width: {
                          xs: '100%',
                          sm: 350,
                          md: 400,
                          lg: 500
                        },
        },
      }} defaultValue="PO-0001" /></Grid>
                  
                  
                  <Grid container spacing={2} sx={{ mt: 1 }}>
      <Grid item xs={12} sm={6} md={3}>
        <Typography fontWeight="bold" fontSize={13}>
          Delivery Address*
        </Typography>

        <RadioGroup
          row
          value={addressType}
          onChange={(e) => setAddressType(e.target.value)}
        >
          <FormControlLabel value="organization" control={<Radio />} label="Organization" />
          <FormControlLabel value="customer" control={<Radio />} label="Customer" />
        </RadioGroup>

        {addressType === 'organization' ? (
          <>
            <TextField
              fullWidth
              multiline
              rows={2}
              defaultValue={`Laxmi Enterprises,\nNagpur, Maharashtra, 200145`} sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
          bgcolor: '#f9fafb',
          height: 80, width: {
                          xs: '100%',
                          sm: 150,
                          md: 200,
                          lg: 300
                        },
        },
      }}
            />
            <Button size="small" sx={{ textTransform: 'none', mt: 1 }}>✏️ Edit Details</Button>
          </>
        ) : (
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Box display="flex" flexDirection="column">
                <FormControl
                  required
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                      bgcolor: '#f9fafb',
                      height: 40,
                      width: {
                        xs: '100%',
                        sm: 251,
                        md: 302,
                        lg: 300,
                      },
                    },
                  }}
                >
                  <InputLabel>Customer Name</InputLabel>
                  <Select
                    value={selectedCustomer}
                    onChange={(e) => setSelectedCustomer(e.target.value)}
                    displayEmpty
                  >
                    {customers.length === 0 ? (
                      <MenuItem disabled>No result found</MenuItem>
                    ) : (
                      customers.map((customer, index) => (
                        <MenuItem key={index} value={customer}>
                          {customer}
                        </MenuItem>
                      ))
                    )}
                  </Select>
                </FormControl>

                <Button
                  size="small"
                  sx={{
                    textTransform: 'none',
                    color: '#3f51b5',
                    mt: 0.5,
                    pl: 0,
                  }}
                  onClick={handleAddCustomer}
                >
                  + Add New Customer
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Grid>
                    
                           <Grid item xs={12} sm={4}>
  <FormControl sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
          bgcolor: '#f9fafb',
          height: 40, width: {
                          xs: '100%',
                          sm: 150,
                          md: 200,
                          lg: 300
                        },
        },
      }}>
    <InputLabel>Vendor Name*</InputLabel>
    <Select
     
      onChange={(e) => setSelectedVendor(e.target.value)}
      displayEmpty
      renderValue={
        selectedVendor !== '' ? undefined : () => ""
      }
      MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
    >
      <MenuItem value="vendor1">vendor 1</MenuItem>
      <MenuItem value="vendor2">vendor 2</MenuItem>
      <MenuItem disabled>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 1, mt: 1, borderTop: '1px solid #ccc' }}
        >
          <Button
            startIcon={<AddIcon />}
            sx={{
              textTransform: 'none',
              fontSize: '0.875rem',
              color: '#1976d2',
            }}
            onClick={() => console.log('Add New Vendor')}
          >
            Add New Vendor
          </Button>
        </Box>
      </MenuItem>
    </Select>
  </FormControl>
</Grid>

                            <Grid item xs={12} sm={4}><TextField fullWidth label="Delivery Date" type="date" InputLabelProps={{ shrink: true }} sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
          bgcolor: '#f9fafb',
          height: 40, width: {
                          xs: '100%',
                          sm: 150,
                          md: 200,
                          lg: 300
                        },
        },
      }}/></Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
          bgcolor: '#f9fafb',
          height: 40, width: {
                          xs: '100%',
                          sm: 150,
                          md: 200,
                          lg: 300
                        },
        },
      }}>
                                    <InputLabel>Payment Terms</InputLabel>
                                    <Select defaultValue="Due end of the month" >
                                        <MenuItem value="Due end of the month">Due end of the month</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}><TextField fullWidth label="Due Date" type="date" defaultValue="2025-06-30" InputLabelProps={{ shrink: true }}  sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
          bgcolor: '#f9fafb',
          height: 40, width: {
                          xs: '100%',
                          sm: 150,
                          md: 200,
                          lg: 300
                        },
        },
      }}/></Grid></Grid></Grid>
                        

                       <Box mt={5}>
            <Divider />
           
                         <Box display="flex" justifyContent="space-between" mt={1} gap={3}>
                           <Typography variant="subtitle1" fontWeight="bold" mb={2} sx={{ fontWeight: 600, fontSize: 18, }}>
                             Item Table
                           </Typography>
                           <Box display="flex" justifyContent="flex-end"
                           >
                             <Button variant="text" sx={{ fontWeight: 500, color: '#002D72' }} onClick={addNewRow}>
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
                                width:400
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
                          InputProps={{
                            sx: {
                              height: 40,
                              borderRadius: '10px',
                              bgcolor: '#f9fafb',
                              fontSize: '14px',
                              pl: 1.5,
                            },
                          }}
                        />
                      </TableCell>

                      <TableCell sx={cellStyle}>
                        <TextField
                          fullWidth
                          type="number"
                          value={row.rate}
                          onChange={(e) => updateRow(index, 'rate', e.target.value)}
                          size="small"
                          InputProps={{
                            sx: {
                              height: 40,
                              borderRadius: '10px',
                              bgcolor: '#f9fafb',
                              fontSize: '14px',
                              pl: 1.5,
                            },
                          }}
                        />
                      </TableCell>

                  
                      <TableCell sx={cellStyle}>
                        <TextField
                          fullWidth
                          type="number"
                          value={calculateAmount(row).toFixed(2)}
                          InputProps={{
                            readOnly: true,
                            sx: {
                              height: 40,
                              borderRadius: '10px',
                              bgcolor: '#f9fafb',
                              fontSize: '14px',
                              pl: 1.5,
                            },
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
                <Paper sx={{ p: 2, height: '50%' }}>
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

              <Grid item xs={12} md={5} ml={10}>
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
                                         lg: 400
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
                      sm: 150,
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
                                <Button variant="outlined" color="inherit">Cancel</Button>
                                <Button variant="outlined"sx={{ textTransform: 'none',
                                borderRadius: 2,
                                px: 4,
                               
                                '&:hover': {  }}} onClick={() => navigate('/purchase-order-list')}>Save as Draft</Button>
                                <Button variant="contained" sx={{ textTransform: 'none',
                                borderRadius: 2,
                                px: 4,
                                bgcolor: '#004085',
                                '&:hover': { bgcolor: '#003366' }}}onClick={() => navigate('/purchase-order-list')}>Save & Send</Button>
                            </Box>
                        </Box></Paper>
                </Box>
            </Box>
        </Box>
    );
};

export default PurchaseOrderForm;
