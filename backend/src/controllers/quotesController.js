import Quote from "../models/Quote.js";
import Package from "../models/Package.js";
import Equipment from "../models/equipments.js";
import Service from "../models/Service.js";

export const getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find()
      .populate('selectedPackages.packageId')
      .populate('selectedEquipment.equipmentId')
      .populate('selectedServices.serviceId')
      .sort({ createdAt: -1 });
    
    res.status(200).json(quotes);
  } catch (error) {
    console.error("Error in getAllQuotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createQuote = async (req, res) => {
  try {
    const { 
      customerInfo, 
      eventDetails, 
      selectedPackages, 
      selectedEquipment, 
      selectedServices 
    } = req.body;

    // Helper function to validate and parse numbers
    const safeNumber = (value, fieldName = 'value') => {
      const num = parseFloat(value);
      if (isNaN(num) || !isFinite(num)) {
        console.warn(`Invalid number for ${fieldName}: ${value}, defaulting to 0`);
        return 0;
      }
      return num;
    };

    // Calculate pricing for each selected item
    let subtotal = 0;
    
    // Process packages
    const processedPackages = [];
    for (const pkg of selectedPackages || []) {
      try {
        const packageData = await Package.findById(pkg.packageId);
        if (!packageData) {
          console.warn(`Package not found: ${pkg.packageId}`);
          continue;
        }
        
        const unitPrice = safeNumber(packageData.price, 'package price');
        const quantity = safeNumber(pkg.quantity, 'package quantity');
        const totalPrice = unitPrice * quantity;
        
        processedPackages.push({
          packageId: pkg.packageId,
          packageName: packageData.name,
          quantity: quantity,
          unitPrice: unitPrice,
          totalPrice: totalPrice
        });
        subtotal += totalPrice;
      } catch (err) {
        console.error(`Error processing package ${pkg.packageId}:`, err);
        continue;
      }
    }

    // Process equipment
    const processedEquipment = [];
    for (const eq of selectedEquipment || []) {
      try {
        const equipmentData = await Equipment.findById(eq.equipmentId);
        if (!equipmentData) {
          console.warn(`Equipment not found: ${eq.equipmentId}`);
          continue;
        }
        
        const unitPrice = safeNumber(equipmentData.price, 'equipment price');
        const quantity = safeNumber(eq.quantity, 'equipment quantity');
        const totalPrice = unitPrice * quantity;
        
        processedEquipment.push({
          equipmentId: eq.equipmentId,
          equipmentName: equipmentData.name,
          quantity: quantity,
          unitPrice: unitPrice,
          totalPrice: totalPrice
        });
        subtotal += totalPrice;
      } catch (err) {
        console.error(`Error processing equipment ${eq.equipmentId}:`, err);
        continue;
      }
    }

    // Process services
    const processedServices = [];
    for (const srv of selectedServices || []) {
      try {
        const serviceData = await Service.findById(srv.serviceId);
        if (!serviceData) {
          console.warn(`Service not found: ${srv.serviceId}`);
          continue;
        }
        
        const unitPrice = safeNumber(serviceData.price, 'service price');
        const quantity = safeNumber(srv.quantity, 'service quantity');
        const totalPrice = unitPrice * quantity;
        
        processedServices.push({
          serviceId: srv.serviceId,
          serviceName: serviceData.name,
          quantity: quantity,
          unitPrice: unitPrice,
          totalPrice: totalPrice
        });
        subtotal += totalPrice;
      } catch (err) {
        console.error(`Error processing service ${srv.serviceId}:`, err);
        continue;
      }
    }

    // Calculate total with safe number operations
    const safeSubtotal = safeNumber(subtotal, 'subtotal');
    const tax = safeSubtotal * 0.15; // 15% tax (adjust as needed)
    const total = safeSubtotal + tax;

    // Log the calculated values for debugging
    console.log('Calculated pricing:', {
      subtotal: safeSubtotal,
      tax: tax,
      total: total
    });

    const newQuote = new Quote({
      customerInfo,
      eventDetails,
      selectedPackages: processedPackages,
      selectedEquipment: processedEquipment,
      selectedServices: processedServices,
      pricing: {
        subtotal: safeSubtotal,
        tax: tax,
        total: total
      }
    });

    await newQuote.save();
    res.status(201).json({ message: "Quote created successfully", data: newQuote });
  } catch (error) {
    console.error("Error in createQuote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateQuoteStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    const updatedQuote = await Quote.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedQuote) return res.status(404).json({ message: "Quote not found" });

    res.status(200).json({ message: "Quote status updated successfully", data: updatedQuote });
  } catch (error) {
    console.error("Error in updateQuoteStatus controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const convertQuoteToBooking = async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
    if (!quote) return res.status(404).json({ message: "Quote not found" });

    // Create booking from quote (you'll need to implement Booking model)
    // const newBooking = new Booking({
    //   customerInfo: quote.customerInfo,
    //   eventDetails: quote.eventDetails,
    //   selectedPackages: quote.selectedPackages,
    //   selectedEquipment: quote.selectedEquipment,
    //   selectedServices: quote.selectedServices,
    //   pricing: quote.pricing,
    //   quoteId: quote._id,
    //   status: 'confirmed'
    // });
    // await newBooking.save();

    // Update quote status
    quote.status = 'converted_to_booking';
    await quote.save();

    res.status(200).json({ 
      message: "Quote converted to booking successfully", 
      // data: newBooking 
    });
  } catch (error) {
    console.error("Error in convertQuoteToBooking controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteQuote = async (req, res) => {
  try {
    const deletedQuote = await Quote.findByIdAndDelete(req.params.id);
    
    if (!deletedQuote) return res.status(404).json({ message: "Quote not found" });
    
    res.status(200).json({ message: "Quote deleted successfully" });
  } catch (error) {
    console.error("Error in deleteQuote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};