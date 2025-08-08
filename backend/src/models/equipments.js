import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['All Equipment', 'Mobile Toilets', 'Mobile Freezers', 'Tents & Marquees', 'Slaughtering Services']
  },
  pricePerDay: {
    type: Number,
    required: true
  },
  images: [{
    url: String,
    alt: String
  }],
  features: [String], // e.g., ["Air Conditioning", "Running Water", "Elegant and touchless faucets"]
  specifications: {
    size: String, // e.g., "10x10m"
    capacity: String, // e.g., "Large Capacity and  comfortable feathless "
    power: String, // e.g., "Reliable Power"
    setup: String // e.g., "Professional Setup and east to use "
  },
  availability: {
    type: Boolean,
    default: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  condition: {
    type: String,
    enum: ['New', 'Good', 'Fair'],
    default: 'Good'
  },
  isPopular: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Equipment = mongoose.model('Equipment', equipmentSchema);
export default Equipment;