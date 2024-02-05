import React, { useState } from 'react'
import Card from '../../../components/Card';
import AddItemButton from '../../../components/Button/AddItemButton';
import buttonImage from "../../../assets/images/element-plus.png";
import AddCategory from '../../../components/Modal/AddCategory';

function AddedFood() {
  const [AddCategoryModal, setAddCategoryModal] = useState(false);
  const [addSubCategoryModal, setAddSubCategoryModal] = useState(false);
  const [editCatModal, setEditCatModal] = useState(false);
const editCard=()=>{
  setEditCatModal(true)
}
const closeCard=()=>{
  setEditCatModal(false)
}
const closeAddCard=()=>{
  setAddCategoryModal(false)
}
  return (
    <div>
     <div className="flex gap-3">
        {/* <p
          // onClick={() => {
          //   changeCategory();
          // }}
          className={`${
            // categoryMenu&& 
            "font-bold underline"
          }  text-xl  underline-offset-8 decoration-4 cursor-pointer`}
        >
          Categories
        </p> */}
        {/* <p
          onClick={() => {
            changeCategory();
          }}
          className={`${
            !categoryMenu && "font-bold underline"
          }   cursor-pointer text-xl underline-offset-8 decoration-4`}
        >
          SubCategory
        </p> */}
      </div>
      <div className="sm:flex justify-between">
        <div>
          <h4 className="text-4xl font-semibold p-4 ">
            {"Food"}
          </h4>
          <p className="p-2 pl-3 text-gray-600 font-semibold">
            {" "}
            Added Food Items
          </p>
        </div>
        {/* <ComunButton text={"Add new categories"} callback={addcategory} /> */}

        <div className="md:flex gap-3">
          <div
            onClick={() => {
              setAddCategoryModal(true);
            }}
          >
            <AddItemButton text={"Add Food"} img={buttonImage} />
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4 mt-6">
          
              
                <Card
                  // data={data}
                  callback={editCard}
                  // viewCatInfo={viewCatInfo}
                />
            
        
          
        </div>
      </div>

      {AddCategoryModal &&
      <AddCategory
      // catFunction={UpadateFoodCategory}
      // incomingType={"edit"}
      // dataToUpload={EditData}
      callback={closeAddCard}
      setShowModal={setAddSubCategoryModal}
      // GetPharmacyCat={GetFoodCat}
    />
      }
      {editCatModal &&
      <AddCategory
      // catFunction={UpadateFoodCategory}
      // incomingType={"edit"}
      // dataToUpload={EditData}
      callback={closeCard}
      setShowModal={setAddSubCategoryModal}
      // GetPharmacyCat={GetFoodCat}
    />
      }
    </div>
  )
}

export default AddedFood
