import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  IconButton,
  Tooltip,
  Button,
  Avatar,
  InputBase,
  Paper,
} from '@mui/material';
import  ArrowDropDownIcon  from '@mui/icons-material/ArrowDropDown';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import Sidebar from './Sidebar';

const statusOptions = ['Active', 'Inactive'];

const FinancialYearSettings = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = () => setIsEditMode(true);
  const handleCancel = () => setIsEditMode(false);
  const handleSave = () => {
    setIsEditMode(false);
  };

  return (
    <Box sx={{ display: 'flex', bgcolor: '#f4f5fa', minHeight: '100vh' }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
         
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
            Financial Year Settings
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



        <Box sx={{ p: { xs: 2, md: 3 } }}>
          <Paper elevation={0} sx={{ p: { xs: 2, md: 4 }, borderRadius: '12px' }}>
            <Box display="flex" alignItems="center" gap={1} mb={3}>
              {isEditMode && <ArrowBackIosNewIcon fontSize="small" />}
              <Typography variant="h6" fontWeight="bold">
                {isEditMode ? 'Edit Financial Year Settings' : 'Financial Year Settings'}
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {[
                { label: 'Financial Year Name', defaultValue: 'FY 2025-26', type: 'text' },
                { label: 'Start Date', defaultValue: '2025-04-01', type: 'date' },
                { label: 'End Date', defaultValue: '2026-03-31', type: 'date' },
              ].map((field, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <TextField
                    fullWidth
                    required
                    label={field.label}
                    defaultValue={field.defaultValue}
                    type={field.type}
                    InputLabelProps={field.type === 'date' ? { shrink: true } : {}}
                    InputProps={{ readOnly: !isEditMode }}
                    sx={{  width: {
                        xs: '100%',
                        sm: 250,
                        md: 300,
                        lg: 430
                      },
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        backgroundColor: '#f9fafb',
                        height: 40,
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '10px',
                      },
                    }}
                  />
                </Grid>
              ))}

              <Grid item xs={12} md={4}>
                <TextField
                  select
                  fullWidth
                  required
                  label="Status"
                  defaultValue="Active"
                  disabled={!isEditMode}
                  sx={{  width: {
                        xs: '100%',
                        sm: 250,
                        md: 300,
                        lg: 430
                      },
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                      backgroundColor: '#f9fafb',
                      height: 40,
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRadius: '10px',
                    },
                  }}
                >
                  {statusOptions.map((opt) => (
                    <MenuItem key={opt} value={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            <Box mt={5}>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                display="flex"
                alignItems="center"
                gap={1}
                mb={2}
              >
                Document Numbering Series
                <Tooltip title="The series number will be reset per financial year">
                  <IconButton size="small">
                    <InfoOutlinedIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Typography>

              <Grid container spacing={2}>
                {[
                  { label: 'Invoice Series', defaultValue: 'INV-000001' },
                  { label: 'PO Series', defaultValue: 'PO-000001' },
                  { label: 'WO Series', defaultValue: 'WO-000001' },
                  { label: 'Proforma Invoice Series', defaultValue: 'PINV-000001' },
                ].map((field, index) => (
                  <Grid key={index} item xs={12} sm={6} md={3}>
                    <TextField
                      fullWidth
                      required
                      label={field.label}
                      defaultValue={field.defaultValue}
                      InputProps={{ readOnly: !isEditMode }}
                      sx={{  width: {
                        xs: '100%',
                        sm: 250,
                        md: 300,
                        lg: 430
                      },
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '10px',
                          backgroundColor: '#f9fafb',
                          height: 40,
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderRadius: '10px',
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box mt={5}>
              <Typography variant="subtitle1" fontWeight="bold" mb={2}>
                Terms & Conditions
              </Typography>
              <Grid container spacing={2}>
                {[
                  'Invoice Terms & Conditions',
                  'PO & Conditions',
                  'WO Terms & Conditions',
                  'Proforma Invoice Terms & Conditions',
                ].map((label, idx) => (
                  <Grid item xs={12} key={idx}>
                    <TextField
                      fullWidth
                      multiline
                      minRows={1}
                      label={label}
                      placeholder="Type your terms & conditions"
                      InputProps={{ readOnly: !isEditMode }}
                      sx={{  width: {
                        xs: '100%',
                        sm: 250,
                        md: 300,
                        lg: 930
                      },
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '10px',
                          backgroundColor: '#f9fafb',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderRadius: '10px',
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box
              mt={4}
              display="flex"
              justifyContent="flex-end"
              gap={2}
              sx={{ borderTop: '1px solid #eee', pt: 3, flexWrap: 'wrap' }}
            >
              {isEditMode ? (
                <>
                  <Button variant="outlined" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button variant="contained" sx={{ bgcolor: '#003865' }} onClick={handleSave}>
                    Save
                  </Button>
                </>
              ) : (
                <Button variant="outlined" onClick={handleEdit}>
                  Edit
                </Button>
              )}
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default FinancialYearSettings;
