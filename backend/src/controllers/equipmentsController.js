import Equipment from "../models/equipments.js";

export const getAllEquipments = async (req, res) => {
  try {
    const equipments = await Equipment.find();
    res.status(200).json(equipments);
  } catch (error) {
    console.error("Error in getAllEquipments controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export const createEquipment = async (req, res) => {
    try {
        const { name, category, pricePerDay, images, features, specifications, availability, quantity, condition, isPopular } = req.body;
        
        const newEquipment = new Equipment({ 
          name, 
          category, 
          pricePerDay, 
          images, 
          features, 
          specifications, 
          availability, 
          quantity, 
          condition, 
          isPopular 
        });
        
        await newEquipment.save();
        res.status(201).json({ message: "Equipment created successfully", data: newEquipment });
      } catch (error) {
        console.error("Error in createEquipment controller", error);
        res.status(500).json({ message: "Internal server error" });
      }
};

export const updateEquipment = async (req, res) => {
    try {
      const { name, category, pricePerDay, images, features, specifications, availability, quantity, condition, isPopular } = req.body;
      
      const updatedEquipment = await Equipment.findByIdAndUpdate(
        req.params.id,
        { name, category, pricePerDay, images, features, specifications, availability, quantity, condition, isPopular },
        {
          new: true,
        }
      );
  
      if (!updatedEquipment) return res.status(404).json({ message: "Equipment not found" });
  
      res.status(200).json({ message: "Equipment updated successfully", data: updatedEquipment });
    } catch (error) {
      console.error("Error in updateEquipment controller", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

export const deleteEquipment = async (req, res) => {
    try {
        const deletedEquipment = await Equipment.findByIdAndDelete(req.params.id);
    
        if (!deletedEquipment) return res.status(404).json({ message: "Equipment not found" });
    
        res.status(200).json({ message: "equipment deleted successfully" });
      } catch (error) {
        console.error("Error in deleteEquipment controller", error);
        res.status(500).json({ message: "Internal server error" });
      }
};