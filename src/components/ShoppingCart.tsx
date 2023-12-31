import { Offcanvas, Stack} from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import StoreItems  from "../data/item.json";
import { formateCurrancy } from "../utilities/formateCurrancy";

type shoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart ({isOpen}:shoppingCartProps){

    const {closeCart,cartItems}= useShoppingCart()

    return <Offcanvas show={isOpen} onHide={closeCart} placement="end">

   <Offcanvas.Header closeButton>
    <Offcanvas.Title>Cart</Offcanvas.Title>
    </Offcanvas.Header>

   <Offcanvas.Body>

   <Stack gap={3}>
   {cartItems.map(item=> (
   <CartItem key={item.id} {...item}/>
   ))}


   <div className="ms-auto fw-bold fs-5">
    Total {formateCurrancy(cartItems.reduce((total,cartItem)=>{
      const item = StoreItems.find(i => i.id === cartItem.id)
      return total+ (item?.price || 0)*cartItem.quantity
    },0))}
   </div>
   
   </Stack>

   </Offcanvas.Body>

    </Offcanvas>
}