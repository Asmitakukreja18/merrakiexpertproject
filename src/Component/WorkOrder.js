import {
  Box, Typography, Button, Avatar,
  Grid, IconButton, Paper, InputBase, useTheme, useMediaQuery
} from '@mui/material';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function WorkOrder() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ display: 'flex', flexDirection: isSm ? 'column' : 'row' }}>
      <Sidebar active="Work Order" />

      <Box sx={{ flex: 1, bgcolor: '#f9fafc', minHeight: '100vh' }}>
        
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
           Work Order
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



        
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 150px)',
          textAlign: 'center',
          flexDirection: 'column',
          px: 2,
          gap: 2
        }}>
          <Box
            component="img"
            src="https://shubham.in.net/img/wp.png"
            alt="Empty State"
            sx={{ width: isSm ? 150 : 200, mb: 1 }}
          />
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Add New Work Order
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Add and manage your Work Order, all in one place.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 1,
              bgcolor: '#004085',
              textTransform: 'none',
              px: 4,
              py: 1,
              borderRadius: 2,
              '&:hover': { bgcolor: '#003366' },
              width: isSm ? '100%' : 'auto'
            }}
            onClick={() => navigate('/add-Work-Order')}
          >
            + New Work Order
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
