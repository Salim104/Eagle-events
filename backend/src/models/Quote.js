import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
    // Customer Information
    customerInfo: {
      name: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        trim: true
      },
      phone: {
        type: String,
        required: true,
        trim: true
      },
      address: String
    },
    
    // Event Details
    eventDetails: {
      type: {
        type: String,
        required: true,
        enum: ['Wedding', 'Corporate', 'Birthday', 'Traditional', 'Funeral', 'Other']
      },
      date: {
        type: Date,
        required: true
      },
      time: String,
      venue: String,
      guestCount: {
        type: Number,
        required: true
      },
      duration: String, // e.g., "8 hours", "Full Day"
      specialRequests: String
    },

    // Selected Items
    selectedPackages: [{
      packageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package'
      },
      packageName: String,
      quantity: {
        type: Number,
        default: 1
      },
      unitPrice: Number,
      totalPrice: Number
    }],

    selectedEquipment: [{
      equipmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Equipment'
      },
      equipmentName: String,
      quantity: {
        type: Number,
        default: 1
      },
      unitPrice: Number,
      totalPrice: Number
    }],

    selectedServices: [{
      serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
      },
      serviceName: String,
      quantity: {
        type: Number,
        default: 1
      },
      unitPrice: Number,
      totalPrice: Number
    }],

    // Pricing
    pricing: {
      subtotal: {
        type: Number,
        required: true
      },
      discount: {
        type: Number,
        default: 0
      },
      tax: {
        type: Number,
        default: 0
      },
      total: {
        type: Number,
        required: true
      }
    },

    // Quote Status
    status: {
      type: String,
      enum: ['pending', 'sent', 'accepted', 'rejected', 'expired', 'converted_to_booking'],
      default: 'pending'
    },

    // Quote Validity
    validUntil: {
      type: Date,
      required: true,
      default: function() {
        return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now
      }
    },

    // Admin Notes
    adminNotes: String,
    
    // Quote Number (auto-generated)
    quoteNumber: {
      type: String,
      unique: true
    }

}, { timestamps: true });

// Auto-generate quote number before saving
quoteSchema.pre('save', async function(next) {
  if (!this.quoteNumber) {
    const count = await mongoose.model('Quote').countDocuments();
    this.quoteNumber = `QT-${new Date().getFullYear()}-${String(count + 1).padStart(4, '0')}`;
  }
  next();
});

const Quote = mongoose.model('Quote', quoteSchema);
export default Quote;