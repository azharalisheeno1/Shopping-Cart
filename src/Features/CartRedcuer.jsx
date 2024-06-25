

const CartReducer=(state,action)=>{
switch (action.type) {
  case "add":
    return [...state,action.product]
  case "remove":
    return state.filter(product=>product.id!==action.id)
 
  
    
   

  default:
    state
    break;
}
}
export default CartReducer;