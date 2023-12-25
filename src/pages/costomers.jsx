import BasicCard from '../components/deshbord.jsx';
import Containd from "../components/homeContaind.jsx";
import CartCoustomer from '../costumers/cart.jsx';
const Costumers = () => {
    return(
        <>
        <BasicCard home={CartCoustomer} />
       
        </>
    )
};
export default Costumers;