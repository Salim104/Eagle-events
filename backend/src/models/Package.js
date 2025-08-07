import mongoose from "mongoose";


const packageSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      enum: ['All Packages', 'Wedding Packages', 'Corporate Packages', 'Birthday Packages', 'Traditional Packages']
    },
    price: {
      type: Number,
      required: true
    },
    priceUnit: {
      type: String,
      default: 'package' // or 'per person', 'per day'
    },
    images: [{
      url: String,
      alt: String
    }],
    features: [String], // e.g., ["Full Setup", "24hr Support", "Premium Equipment"]
    includedServices: [{
      serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
      },
      serviceName: String,
      quantity: Number
    }],
    includedEquipment: [{
      equipmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Equipment'
      },
      equipmentName: String,
      quantity: Number
    }],
    specifications: {
      maxGuests: Number,
      duration: String, // e.g., "Full Day", "8 hours"
      setupTime: String,
      coverage: String // e.g., "Indoor/Outdoor"
    },
    availability: {
      type: Boolean,
      default: true
    },
    isPopular: {
      type: Boolean,
      default: false
    },
    isFeatured: {
      type: Boolean,
      default: false
    }
  }, { timestamps: true });


  const Package = mongoose.model('Package', packageSchema);
  export default Package;