const sortPrice = (productList, sortBy) => {
    console.log("from context",productList,sortBy)
        let updatedList = [...productList];
       
        if (sortBy === "HIGH_TO_LOW") {
            console.log("updatedList", updatedList.sort((a, b) => b.price- a.price))
          return updatedList.sort((a, b) => b.price - a.price);
        }
        if (sortBy === "LOW_TO_HIGH") {
          return updatedList.sort((a, b) => a.price - b.price);
        }
       
        return updatedList;
 };

const filteredProduct = (productList, state)=>{
    return productList.filter(item => state.showAll ? true : !item.isSoldOut)
}

const filterPrice = (productList, priceValue)=>{
let updatedList = [...productList]
if(priceValue){
    return updatedList.filter(item => Number(item.price) <= Number(priceValue))
}
return updatedList
    
}

const filterCategory =(productList, category)=>{
    if(category === "SORT_BY_TOP_CATEGORY"){
        return productList.filter(item=> item.categoryName === "Top")
    }
    if(category === "SORT_BY_JEANS_CATEGORY"){
        return productList.filter(item=> item.categoryName === "Jeans")
    }
    if(category === "SORT_BY_DRESSES_CATEGORY"){
        return productList.filter(item=> item.categoryName === "Dresses")
    }
    if(category === "SORT_BY_KURTA_SET_CATEGORY"){
        return productList.filter(item=> item.categoryName === "Kurta Set")
    }
    if(category === "SORT_BY_SAREES_CATEGORY"){
        return productList.filter(item=> item.categoryName === "Sarees")
    }
    else{
        return productList
    }
}

const filterRating = (productList, rating) => {
    if(rating === "4 stars & above"){
        return productList.filter(item => item.rating >= rating)
    }
    if(rating === "3 stars & above"){
        return productList.filter(item=> item.rating >= rating)
    }
    if(rating === "2 stars & above"){
        return productList.filter(item=> item.rating >= rating)
    }
    if(rating === "1 stars & above"){
        return productList.filter(item=> item.rating >=rating)
    }
    return productList;
}

export{sortPrice, filteredProduct,filterPrice, filterCategory, filterRating}

