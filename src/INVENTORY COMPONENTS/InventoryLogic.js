import { useEffect } from "react";
import { useState } from "react";

function useInventory(storageKey){
    const [quantity, setQuantity]=useState(0);//Указываем начальное значение для кол-ва
    const [items, setItems]=useState(()=>{
            const savedItems=localStorage.getItem(storageKey);
            return savedItems ? JSON.parse(savedItems) : [];
        });

    const [formData, setFormData]=useState({name: '', number: '', description: ''})//Форма
    const [editingId, setEditingId]=useState(null);
    const [searchQuery, setSearchQuery]=useState("");
    
    function handleSearch(e){
        setSearchQuery(e.target.value);
    }
    const filteredItems=items.filter(item=>
        item.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()) || 
        item.number.toLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
        item.number.toLowerCase().includes(searchQuery.toLocaleLowerCase())
        
    )

        
        useEffect(()=>{
            localStorage.setItem(storageKey, JSON.stringify(items))
        }, [items]);

        function toogleEdit(id){
            setEditingId(editingId===id ? null : id);
        }
        function handleInputChange(e, id){
            const {name, value}=e.target;
            if(id===null){
                setFormData(prevFormData=>({
                    ...prevFormData,
                    [name]: value
                }))
            }else{
                setItems(prevItems=>prevItems.map(item=>item.id===id ? {...item, [name]: value} : item))
            }
            
        }
        function handleAddItem(e){
            e.preventDefault();

            if (!formData.name.trim() || !formData.number.trim() || !formData.description.trim()) {
                alert("Пожалуйста, заполните все поля!");
                return;
            }

            setItems(prevItems => [...prevItems, {
                id: Date.now(),
                name: formData.name,
                number: formData.number,
                description: formData.description,
                quantity: quantity
            }]);
            setFormData({name: '', number: '', description:''})
                setQuantity(0);
            
            
        }
        function handleDeleteItem(id){
            const updatedItems=items.filter(item=>item.id !==id);
            setItems(updatedItems);
        }



        function handleClickPlus(e){
            e.preventDefault();
            setQuantity(quantity+1);
        }
        function handleClickMinus(e){
            e.preventDefault();
            setQuantity((prevAmount)=>(prevAmount>0? prevAmount - 1 : 0));
        }

    return{
        items, 
        quantity, 
        handleClickMinus, 
        handleClickPlus, 
        handleAddItem, 
        handleDeleteItem, 
        handleInputChange, 
        toogleEdit, 
        editingId, 
        formData, 
        searchQuery, 
        filteredItems, 
        handleSearch}
}

export default useInventory