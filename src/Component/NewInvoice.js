import {
  Box,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Divider,
  IconButton,
  Paper,
  Checkbox,
  Modal,
  Tabs,
  Tab,
  InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {

  Menu,
  ListItemIcon,
} from '@mui/material';
import {
  InputAdornment,
} from '@mui/material';
import {
  Search,
} from '@mui/icons-material';
import { Breadcrumbs } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Navigate, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import AddItems from './Additem';
import DialogueItem from './dialogueitem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NewInvoicePage = () => {
  const navigate = useNavigate()
  const [customers, setCustomers] = useState(['Customer 1', 'Customer 2']);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [customerModalOpen, setCustomerModalOpen] = useState(false);
  const [customerTab, setCustomerTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [itemTab, setItemTab] = useState();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
const [openDialog, setOpenDialog] = useState(false);
const [editDialogOpen, setEditDialogOpen] = useState(false); 
const [anchorEl, setAnchorEl] = useState(null);
const menuOpen = Boolean(anchorEl); 
const handleMenuClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMenuClose = () => {
  setAnchorEl(null);
};

  const [item, setItem] = useState()
  const products = [
    { id: 1, name: 'Product X' },
    { id: 2, name: 'Product Y' },
  ];

  const services = [
    { id: 1, name: 'Service A' },
    { id: 2, name: 'Service B' },
  ];
  
const [product, setProduct] = useState([
  { name: 'Product A', rate: 100 },
  { name: 'Product B', rate: 150 },
  { name: 'Product C', rate: 200 },
]); 

const handleClickOpen = (product) => {
  setSelectedProduct(product);
  setOpenDialog(true); 
};


const handleProductClick = (product) => {
  console.log("Clicked product:", product);
  setOpenDialog(false);
};


  const handleAddCustomer = () => {
    setCustomerModalOpen(true);
  }
  const [itemModalOpen, setItemModalOpen] = useState(false);
  const [itemSearchTerm, setItemSearchTerm] = useState('');
  const [rows, setRows] = useState([
    { item: '', qty: 0, rate: 0, discount: 0, amount: 0 },

  ]);
  const updateRow = (index, key, value) => {
    const updatedRows = [...rows];
    updatedRows[index][key] = value;
    setRows(updatedRows);
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(itemSearchTerm.toLowerCase())
  );

  const filteredServices = services.filter((item) =>
    item.name.toLowerCase().includes(itemSearchTerm.toLowerCase())
  );



const handleEditClick = () => {
  setOpenDialog(true);
  handleMenuClose(); 
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

  if (item && item.name) {
    updateRow(selectedRowIndex, 'item', item.name);
    setItemModalOpen(false);
  } else {
    console.warn('item is undefined or does not have name');
  }




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

const handleSave = (updatedProduct) => {
  console.log("Saving product:", updatedProduct);
  setOpenEditModal(false);
};
const [editedItem, setEditedItem] = useState({
  product: '',
  quantity: '',
  rate: '',
});

  const handleClose = () => {
    setItemModalOpen(false);
  };
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flex: 1, p: 4 }}>
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
            <Typography color="text.secondary" fontSize="14px">Invoice</Typography>
            <Typography variant="h6" fontWeight={600} sx={{ fontSize: 15 }}>
              New Invoice
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

        <Paper sx={{ p: 1, borderRadius: 2 }}>
          <Typography
            variant="h6"
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
              }}
          onClick={() => navigate(-1)}
          > <ArrowBackIcon sx={{ fontSize: 22 }} />
            New Invoice
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                label="Invoice#"
                defaultValue="INV-000001"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '15px',
                    bgcolor: '#f9fafb',
                    height: 45, width: {
                      xs: '100%',
                      sm: 250,
                      md: 300,
                      lg: 500,
                    },
                  },
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" flexDirection="column">
                <FormControl
                  required
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                      bgcolor: '#f9fafb',
                      height: 40, width: {
                        xs: '100%',
                        sm: 251,
                        md: 302,
                        lg: 300
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

            <Grid item xs={12} sm={6} md={4}>
              <FormControl
                required
                fullWidth
                sx={{
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
                }}
              >
                <InputLabel>Financial Year</InputLabel>
                <Select defaultValue="">
                  <MenuItem value="2025-26">2025-26</MenuItem>
                  <MenuItem value="2024-25">2024-25</MenuItem>
                  <MenuItem value="2023-24">2023-24</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                required
                label="Invoice Date"
                type="date"
                defaultValue="2025-06-21"
                InputLabelProps={{ shrink: true }}
                fullWidth
                sx={{
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
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FormControl
                required
                fullWidth
                sx={{
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
                }}
              >
                <InputLabel>Currency Preference</InputLabel>
                <Select defaultValue="" displayEmpty>
                  <MenuItem value="INR">INR</MenuItem>
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FormControl
                required
                fullWidth
                sx={{
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
                }}
              >
                <InputLabel>Payment Terms</InputLabel>
                <Select defaultValue="Due end of the month">
                  <MenuItem value="Due end of the month">Due end of the month</MenuItem>
                  <MenuItem value="Net 15">Net 15</MenuItem>
                  <MenuItem value="Net 30">Net 30</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                required
                label="Due Date"
                type="date"
                defaultValue="2025-06-30"
                InputLabelProps={{ shrink: true }}
                fullWidth
                sx={{
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
                }}
              />
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
                    <TableCell sx={headStyle}>Discount</TableCell>
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
                                width: 400
                              }
                            }}
                            onClick={() => {
                              setSelectedRowIndex(index);
                              setItemModalOpen(true);
                              setItemSearchTerm('');
                            }}

                            size="small"
                          />
                         <IconButton size="small" onClick={handleMenuClick}>
        <MoreVertIcon fontSize="small" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
  open={menuOpen}
  onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          elevation: 4,
          sx: {
            mt: 1,
            minWidth: 160,
            borderRadius: 2,
            overflow: 'visible',
            '& .MuiMenuItem-root': {
              px: 2,
              py: 1.2,
            },
          },
        }}
      >
        <MenuItem
          onClick={() => {
       
            handleEditClick(product); 
          }}
        >
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
        <MenuItem onClick={handleEditClick}>Edit</MenuItem>

        

                            </MenuItem>

                            <MenuItem onClick={handleClose}>
                              <ListItemIcon>
                                <VisibilityIcon fontSize="small" />
                              </ListItemIcon>
                              <ListItemText>View Details</ListItemText>
                            </MenuItem>

                            <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
                              <ListItemIcon>
                                <DeleteIcon fontSize="small" color="error" />
                              </ListItemIcon>
                              <ListItemText>Remove</ListItemText>
                            </MenuItem>
                          </Menu>
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
                        <FormControl fullWidth size="small" sx={{
                          bgcolor: '#f9fafb',
                          borderRadius: '20px',
                          fontSize: '14px',
                          height: 40,
                          justifyContent: 'center',
                        }}>
                          <Select
                            value={row.discount}
                            onChange={(e) => updateRow(index, 'discount', e.target.value)}
                            sx={{
                              pl: 1.5,
                            }}
                          >
                            <MenuItem value={0}>0%</MenuItem>
                            <MenuItem value={5}>5%</MenuItem>
                            <MenuItem value={10}>10%</MenuItem>
                          </Select>
                        </FormControl>
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
                      }, '& .MuiOutlinedInput-root': {
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
              <Button variant="outlined" color="inherit"
                sx={{
                  textTransform: 'none',
                  borderRadius: 2,

                }}>Cancel</Button>
              <Button variant="outlined" onClick={() => navigate('/invoice-list')}
                sx={{
                  textTransform: 'none',
                  borderRadius: 2,
                  color: '#003366', border: '1px solid #004085',

                }}>Save as Draft</Button>
              <Button variant="contained" onClick={() => navigate('/invoice-list')}
                sx={{
                  textTransform: 'none',
                  borderRadius: 2,
                  bgcolor: '#004085',
                  '&:hover': { bgcolor: '#003366' }
                }}>Save & Send</Button>
            </Box>
          </Box>

          <Modal open={customerModalOpen} onClose={() => setCustomerModalOpen(false)}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: {
                  xs: 320,
                  sm: 400,
                  md: 450
                },
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 24,
                p: 3
              }}
            >
              <TextField
                fullWidth
                placeholder="Search customer here..."
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  sx: { borderRadius: 2, bgcolor: '#f9fafb' }
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <Tabs
                value={customerTab}
                onChange={(e, val) => setCustomerTab(val)}
                centered
                sx={{
                  mt: 2,
                  '& .MuiTab-root': {
                    textTransform: 'none'
                  },
                  '& .Mui-selected': {
                    color: '#004085',
                    fontWeight: 'bold'
                  },
                  '& .MuiTabs-indicator': {
                    bgcolor: '#004085'
                  }
                }}
              >
                <Tab label="Domestic" />
                <Tab label="International" />
              </Tabs>

              <Box mt={3}>
                <FormControl
                  fullWidth
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                      bgcolor: '#f9fafb',
                      height: 40,
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
              </Box>

              <Box mt={1.5} textAlign="right">
                <Button
                  size="small"
                  sx={{
                    textTransform: 'none',
                    color: '#004085'
                  }}
                  onClick={handleAddCustomer}
                >
                  + Add New Customer
                </Button>
              </Box>
            </Box>
          </Modal>

          <Modal open={previewOpen} onClose={() => setPreviewOpen(false)}>
            <Box
              sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                bgcolor: 'rgba(0,0,0,0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1300,
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  width: 480,
                  bgcolor: '#fff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: 24,
                  px: 3,
                  py: 4,
                  position: 'relative',
                }}
              >
                <Box sx={{ position: 'absolute', top: 20, right: 20 }}>
                  <img src="https://cdn-icons-png.flaticon.com/512/8372/8372013.png" alt="logo" width={40} />
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography fontWeight="bold" fontSize={20}>INVOICE</Typography>
                  <Typography fontSize={12} color="text.secondary">#ME22334-01</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Box>
                    <Typography fontSize={12}>Issued</Typography>
                    <Typography fontSize={13} fontWeight={500}>01 Aug, 2023</Typography>
                  </Box>
                  <Box>
                    <Typography fontSize={12}>Due</Typography>
                    <Typography fontSize={13} fontWeight={500}>10 Aug, 2023</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                  <Box>
                    <Typography fontSize={12} fontWeight={500}>Bill To</Typography>
                    <Typography fontSize={13}>Company Name</Typography>
                    <Typography fontSize={13}>Delhi, India - 000000</Typography>
                    <Typography fontSize={13}>+91 92483-64327</Typography>
                  </Box>
                  <Box>
                    <Typography fontSize={12} fontWeight={500}>From</Typography>
                    <Typography fontSize={13}>Ramesh, Inc</Typography>
                    <Typography fontSize={13}>Dudu, India - 303008</Typography>
                    <Typography fontSize={13}>IN +91 83028-29003</Typography>
                  </Box>
                </Box>

                <Box sx={{
                  display: 'flex', fontWeight: 600, fontSize: 13,
                  borderBottom: '1px solid #ddd', pb: 1
                }}>
                  <Box width="40%">Service</Box>
                  <Box width="15%">Qty</Box>
                  <Box width="20%">Rate</Box>
                  <Box width="25%" textAlign="right">Line Total</Box>
                </Box>

                {rows.map((row, i) => (
                  <Box key={i} sx={{
                    display: 'flex', fontSize: 13, py: 1,
                    borderBottom: '1px solid #f0f0f0'
                  }}>
                    <Box width="40%">{row.item || '-'}</Box>
                    <Box width="15%">{row.qty}</Box>
                    <Box width="20%">₹{row.rate}</Box>
                    <Box width="25%" textAlign="right">₹{calculateAmount(row).toFixed(2)}</Box>
                  </Box>
                ))}

                <Box mt={2} mb={2} sx={{ textAlign: 'right', fontSize: 13 }}>
                  <Typography>Subtotal: ₹{total.toFixed(2)}</Typography>
                  <Typography>Tax (9%): ₹{(total * 0.09).toFixed(2)}</Typography>
                  <Typography fontWeight="bold" mt={1}>Total: ₹{(total * 1.09).toFixed(2)}</Typography>
                  <Typography color="primary" mt={1} fontWeight="bold">Amount due: ₹{(total * 1.09).toFixed(2)}</Typography>
                </Box>


                <Box mt={3} sx={{ borderTop: '1px solid #eee', pt: 2, fontSize: 12 }}>
                  <Typography>Thanks for your business!</Typography>
                  <Typography variant="caption" display="block" color="text.secondary">This is a system generated invoice.</Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 2 }}>
                <IconButton
                  onClick={() => setPreviewOpen(false)}
                  sx={{
                    bgcolor: '#fff',
                    borderRadius: '50%',
                    boxShadow: 3,
                    '&:hover': {
                      bgcolor: '#f5f5f5',
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
          </Modal>
          <Modal open={itemModalOpen} onClose={() => setItemModalOpen(false)}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 24,
                p: 3
              }}
            >
              <TextField
                placeholder="Search item here..."
                fullWidth
                size="small"
                value={itemSearchTerm}
                onChange={(e) => setItemSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search fontSize="small" />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: '10px',
                    bgcolor: '#f9fafb',
                  },
                }}
              />

              <Tabs
                value={itemTab}
                onChange={(e, val) => setItemTab(val)}
                centered
                sx={{ mt: 2 }}
              >
                <Tab label="Product" />
                <Tab label="Services" />
              </Tabs>




              <Box mt={2}>
                {(itemTab === 0 ? filteredProducts : filteredServices).length === 0 ? (
                  <Typography align="center" color="text.secondary" mt={2}>
                    No result found
                  </Typography>
                ) : (
                  <List>
                    {(itemTab === 0 ? filteredProducts : filteredServices).map((item) => (
                      <ListItemButton
                        key={item.id}
                        onClick={() => {
                          updateRow(selectedRowIndex, 'item', item.name);
                          setItemModalOpen(false);
                        }}
                      >
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    ))}
                  </List>
                )}
              </Box>


              <Box mt={2} textAlign="center">
                <Button
                  size="small"
                  variant="text"
                  onClick={() => {

                    console.log('Add New clicked');
                  }}
                >
                  + Add New
                </Button>
              </Box>
            </Box>
          </Modal>
          
     
<Dialog
  open={openDialog}
  onClose={() => setOpenDialog(false)}
  fullWidth
  PaperProps={{
    sx: {
      borderRadius: 2,
      width: '600px',
      maxWidth: '600px',
    },
  }}
> <Paper sx={{ p: 1, borderRadius: 2 }}> 
  <DialogueItem />
   

         <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
              <Button
                variant="outlined"

                sx={{ textTransform: 'none', borderRadius: 2, px: 4 }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  textTransform: 'none',
                  borderRadius: 2,
                  bgcolor: '#004085',
                  '&:hover': { bgcolor: '#003366' }
                }}
                onClick={() => navigate('/new-invoice')}
              >
                Add
              </Button>  
            </Box></Paper>
</Dialog>



        </Paper>
      </Box>
    </Box>
  );
};

export default NewInvoicePage;
