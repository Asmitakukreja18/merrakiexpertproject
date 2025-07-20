import { Box, Typography, Button,Avatar ,InputBase,Paper} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Sidebar from './Sidebar';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
const Vendors = () => {
    const navigate=useNavigate()
    return (
        <Box display="flex">
            <Sidebar />
              <Box sx={{ flexGrow: 1 }}>

                 
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: { xs: 'wrap', sm: 'wrap', md: 'nowrap' },
            px: { xs: 2, sm: 3, md: 4 },
            py: 2,
            bgcolor: 'white',
            borderBottom: '1px solid #e0e0e0',
            gap: { xs: 2, sm: 2, md: 0 },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Vendors
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'nowrap',
              gap: { xs: 1, sm: 1.5, md: 2 },
              flexShrink: 0,
            }}
          >
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
                  xs: 40, 
                  sm: 40,
                  md: 160, 
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
              <Avatar src="https://i.pravatar.cc/40?img=1" />
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


                <Box
                    sx={{
                        height: 'calc(100vh - 64px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        textAlign: 'center',
                    }}
                >
                    <img src={"https://shubham.in.net/img/wp.png"} alt="Purchase Order Empty State" style={{ maxWidth: 300, marginBottom: 20 }} />
                    <Typography fontWeight="bold" fontSize={16} gutterBottom>
                        Add New Vendor
                    </Typography>
                    <Typography fontSize={13} color="text.secondary" sx={{ maxWidth: 300, mb: 2 }}>
                        Add and manage your Vendor, all in one place.
                    </Typography>
                    <Button variant="contained" sx={{
                        mt: 1,
                        bgcolor: '#004085',
                        textTransform: 'none',
                        px: 4,
                        py: 1,
                        borderRadius: 2,
                        '&:hover': { bgcolor: '#003366' }
                    }} startIcon={<AddIcon />}  onClick={() => navigate('/add-vendor')}>
                        
                        New Vendor
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Vendors;
