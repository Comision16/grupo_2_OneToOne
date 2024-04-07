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

  const getAllUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/apis/users');
      const result = await response.json();
      if (result.ok) {
        return result.users;
      }
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  const getUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/apis/users/${id}`);
      const result = await response.json();
      if (result.ok) {
        return result.user;
      }
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  export {
    getAllUsers,
    getUser
  }