const mongoose = require('mongoose');

const artifactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  discoveryLocation: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    },
    site: String,
    context: String
  },
  period: {
    era: String,
    startDate: Date,
    endDate: Date,
    certainty: {
      type: String,
      enum: ['Definite', 'Probable', 'Possible']
    }
  },
  dimensions: {
    length: Number,
    width: Number,
    height: Number,
    weight: Number,
    unit: {
      type: String,
      enum: ['cm', 'mm', 'm', 'g', 'kg']
    }
  },
  material: {
    type: String,
    required: true
  },
  condition: {
    state: {
      type: String,
      enum: ['Excellent', 'Good', 'Fair', 'Poor']
    },
    notes: String
  },
  images: [{
    url: String,
    caption: String,
    type: {
      type: String,
      enum: ['Photo', '3D Scan', 'Drawing']
    },
    dateAdded: {
      type: Date,
      default: Date.now
    }
  }],
  description: {
    type: String,
    required: true
  },
  notes: String,
  references: [{
    title: String,
    author: String,
    publication: String,
    year: Number,
    url: String
  }],
  catalogNumber: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['In Storage', 'On Display', 'On Loan', 'In Conservation'],
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  lastModified: {
    type: Date,
    default: Date.now
  }
});

// Index for geospatial queries
artifactSchema.index({ 'discoveryLocation.coordinates': '2dsphere' });

// Update lastModified on save
artifactSchema.pre('save', function(next) {
  this.lastModified = new Date();
  next();
});

const Artifact = mongoose.model('Artifact', artifactSchema);

module.exports = Artifact;