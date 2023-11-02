import { Col, Row } from "react-bootstrap"
import storeItems from "../data/item.json"
import { StoreItem } from "../components/StoreItems"

 /* md (medium screen 2 column) extra small xs (1 column) large screen size 3 column */
export default function Store(){

    return  <><h1>Store</h1>
    
    <Row md={2} xs={1} lg={3} className="g-3">
 
        {storeItems.map(item =>(
            <Col key={item.id}>
                <StoreItem{...item} />
                </Col>
        ))}
       
    </Row>
    
    </>
    
    }