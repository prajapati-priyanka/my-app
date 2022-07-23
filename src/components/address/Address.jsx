import "./Address.css";
import { GrAdd} from "react-icons/gr";


const Address = ({setShowAddressModal})=>{

    const addNewAddress = ()=>{
        console.log("clicked")
        setShowAddressModal(true)
    }
    return(
   <div className="address-container">
       <button className="btn new-address-btn md-text" onClick={addNewAddress}>
        <GrAdd />
        Add New Address
       </button>
   </div>
    )
}

export {Address}
