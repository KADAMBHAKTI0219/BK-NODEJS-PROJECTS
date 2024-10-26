const userModel = require("../Models/book");

const AddBookStoreData = async (req, res) => {

  try {
    await userModel.create(req.body)
    
    res.send("data create successfully");
  } catch (error) {
    res.send(error);
  }
};

const GetBookStoreData = async (req, res) => {
  
  try {
    const data = await userModel.find();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

const GetSingleBookStoreData = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await userModel.findById(id);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

const EditBookStoreData = async (req, res) => {
  const { id } = req.params;
  const updateAllData = req.body;
  try {
     await userModel.findByIdAndUpdate(id, { $set:updateAllData });
    res.send("ok");
  } catch (error) {
    res.send(error);
  }
};

const DeleteBookStoreData = async (req, res) => {
  const {id} = req.params
  try {
    await userModel.findByIdAndDelete(id)
    res.send("Deleted successfully")
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  AddBookStoreData,
  GetBookStoreData,
  GetSingleBookStoreData,
  EditBookStoreData,
  DeleteBookStoreData,
};
