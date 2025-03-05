import React from "react";
import useInventory from "./InventoryLogic";
import InventoryItemPage from "./InventoryItemPage";

function AE (props){
    const {items, 
        quantity, 
        handleClickPlus, 
        handleClickMinus, 
        handleAddItem, 
        handleDeleteItem, 
        handleInputChange,
        toogleEdit, 
        editingId, 
        formData,
        searchQuery,
        handleSearch,
        filteredItems
    }=useInventory('AE_ITEMS')
    

    return(
        <InventoryItemPage 
        title='AE PURIFIER'
        items={items}
        filteredItems={filteredItems}
        quantity={quantity}
        editingId={editingId}
        onPlus={handleClickPlus}
        onMinus={handleClickMinus}
        onAdd={handleAddItem}
        onDelete={handleDeleteItem}
        onInputChange={handleInputChange}
        onEditToogle={toogleEdit}
        formData={formData}
        searchQuery={searchQuery}
        onSearch={handleSearch}
        />
    )
}



export default AE