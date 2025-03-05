import React from "react";
import useInventory from "./InventoryLogic";
import InventoryItemPage from "./InventoryItemPage";

function SPARE (props){
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
    }=useInventory('SPARE_ITEMS')
    

    return(
        <InventoryItemPage 
        title='SPARE'
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



export default SPARE