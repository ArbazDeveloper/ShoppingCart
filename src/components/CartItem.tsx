import { useShoppingCart } from "../context/ShoppingCartContext"
import StoreItems  from "../data/item.json";
import { Button, Stack } from "react-bootstrap";
import { formateCurrancy } from "../utilities/formateCurrancy";

type CartItemProps = {
    id:number 
    quantity:number 
}
export function CartItem({id, quantity}: CartItemProps) {

const { removeFromCart } = useShoppingCart();
const item = StoreItems.find(i => i.id === id)
if(item == null) return null


return (
    <Stack direction="horizontal" gap={2} className="d-flex align-item-center">
       <img src={item.imgUrl} style={{width:"125px", height:"75px" , objectFit:"cover"}}/>

    <div className="me-auto">
   
   <div>
    {item.name}{" "} {quantity>1 && <span className="text-muted" style={{fontSize:"0.65rem"}}>x{quantity}</span>}
   </div>
 
    </div>

    <div className="text-muted" style={{fontSize:".75rem"}}>{formateCurrancy(item.price)}</div>
    
  <div>{formateCurrancy(item.price * quantity)}</div>
   <Button variant="outline-danger" size="sm" onClick={()=>removeFromCart(item.id)
   }>&times;</Button>
    </Stack>
)

}