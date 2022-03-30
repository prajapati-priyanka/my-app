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

const filteredProduct = (productList, filterState)=>{
    return productList.filter(item => filterState.showAllProduct ? true : !item.isSoldOut)
}

const filterPrice = (productList, priceValue)=>{
let updatedList = [...productList]
if(priceValue){
    return updatedList.filter(item => Number(item.price) <= Number(priceValue))
}
return updatedList
    
}

const filterCategory =(productList,filterState)=>{
    const categoryList = filterState.sortByCategory;
    return categoryList.length===0 ? productList:
    productList.filter((item)=>categoryList.some((category)=>category===item.categoryName))
}


const filterRating = (productList, rating) => {
    if(rating === "FOUR_STARS_AND_ABOVE"){
        return productList.filter(item => item.rating >= 4)
    }
    if(rating === "THREE_STARS_AND_ABOVE"){
        return productList.filter(item=> item.rating >= 3)
    }
    if(rating === "TWO_STARS_AND_ABOVE"){
        return productList.filter(item=> item.rating >= 2)
    }
    if(rating === "ONE_STARS_AND_ABOVE"){
        return productList.filter(item=> item.rating >=1)
    }
    return productList;
}

export{sortPrice, filteredProduct,filterPrice, filterCategory, filterRating}

