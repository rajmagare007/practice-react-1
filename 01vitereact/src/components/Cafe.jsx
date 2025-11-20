import React from "react";

function Menu({menu, image=""}){
    return (
   <>
    <div className="bg-white w-100 h-50 m-5 
    rounded-2xl shadow-md hover:shadow-xl 
    transition overflow-hidden cursor-pointer ">
      <img
        src={image} 
        className="w-full h-40 object-cover"
      />
      <p className="text-center text-lg font-semibold py-3">
        {menu}
      </p>
    </div>
  </>
    );
}

export default Menu;