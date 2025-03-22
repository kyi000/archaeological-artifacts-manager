import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  MenuItem,
  Paper
} from '@mui/material';

const ArtifactForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    discoveryLocation: {
      type: 'Point',
      coordinates: [0, 0],
      site: '',
      context: ''
    },
    period: {
      era: '',
      startDate: '',
      endDate: '',
      certainty: 'Possible'
    },
    material: '',
    description: '',
    catalogNumber: '',
    status: 'In Storage'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      discoveryLocation: {
        ...prev.discoveryLocation,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>
          Artifact Information
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="name"
              label="Artifact Name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="catalogNumber"
              label="Catalog Number"
              value={formData.catalogNumber}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="site"
              label="Discovery Site"
              value={formData.discoveryLocation.site}
              onChange={handleLocationChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="material"
              label="Material"
              value={formData.material}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              name="description"
              label="Description"
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              required
              fullWidth
              name="status"
              label="Status"
              value={formData.status}
              onChange={handleChange}
            >
              <MenuItem value="In Storage">In Storage</MenuItem>
              <MenuItem value="On Display">On Display</MenuItem>
              <MenuItem value="On Loan">On Loan</MenuItem>
              <MenuItem value="In Conservation">In Conservation</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Save Artifact
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default ArtifactForm;