import Package from "../models/Package.js";

export const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find(); // ✅ FIXED: It was `findx()` which is incorrect
    res.status(200).json(packages);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export const createPackage = async (req, res) => {
    try {
        const { name, category, price, priceUnit, images, features, includedServices, includedEquipment, specifications, isPopular, isFeatured } = req.body;
        
        const newPackage = new Package({ 
          name, 
          category, 
          price, 
          priceUnit, 
          images, 
          features, 
          includedServices, 
          includedEquipment, 
          specifications, 
          isPopular, 
          isFeatured 
        });
        
        await newPackage.save();
        res.status(201).json({ message: "Package created successfully", data: newPackage });
      } catch (error) {
        console.error("Error in createPackage controller", error);
        res.status(500).json({ message: "Internal server error" });
      }
};




export const updatePackage = async (req, res) => {
    try {
      const { name, category, price, priceUnit, images, features, includedServices, includedEquipment, specifications, isPopular, isFeatured } = req.body;
      
      const updatedPackage = await Package.findByIdAndUpdate(
        req.params.id,
        { name, category, price, priceUnit, images, features, includedServices, includedEquipment, specifications, isPopular, isFeatured },
        {
          new: true,
        }
      );
  
      if (!updatedPackage) return res.status(404).json({ message: "Package not found" });
  
      res.status(200).json({ message: "Package updated successfully", data: updatedPackage });
    } catch (error) {
      console.error("Error in updatePackage controller", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

export const deletePackage = async (req, res) => {
    try {
        const deletedPackage = await Package.findByIdAndDelete(req.params.id);
    
        if (!deletedPackage) return res.status(404).json({ message: "Package not found" });
    
        res.status(200).json({ message: "Package deleted successfully" });
      } catch (error) {
        console.error("Error in deletePackage controller", error);
        res.status(500).json({ message: "Internal server error" });
      }
};



