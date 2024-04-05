const getAllProduct = async ()=> {
    try {
  const response = await fetch('http://localhost:3000/apis/products')
  const result = await response.json();
  if (result.ok) {
    return result.products
  }
  console.log(result);
    } catch (error){
      console.error
    }
   
  }
const getProducts = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/apis/products/${id}` )
        const result = await response.json();
        if (result.ok) {
          return result.products
        }
        console.log(result);
          } catch (error){
            console.error
          }
};


  export {
    getAllProduct ,
    getProducts
  }