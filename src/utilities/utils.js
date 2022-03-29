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

const filterCategory =(productList,state)=>{
    const categoryList = state.sortByCategory;
    return categoryList.length===0 ? productList:
    productList.filter((item)=>categoryList.some((category)=>category===item.categoryName))
}


const filterRating = (productList, rating) => {
    if(rating === "FOUR_STARS_AND_ABOVE"){
        return productList.filter(item => item.rating >= 4)
    }
    if(rating === "THREE_STARS_AND_ABOVE"){
        return productList.filter(item=> item.rating >= 3 && item.rating <= 4)
    }
    if(rating === "TWO_STARS_AND_ABOVE"){
        return productList.filter(item=> item.rating >= 2 && item.rating <=3)
    }
    if(rating === "ONE_STARS_AND_ABOVE"){
        return productList.filter(item=> item.rating >=1 && item.rating <=2)
    }
    return productList;
}

export{sortPrice, filteredProduct,filterPrice, filterCategory, filterRating}

