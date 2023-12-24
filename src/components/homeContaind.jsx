import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import ChartComponent from './chart';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import GroupsRoundedIcon from "@mui/icons-material/GroupAddRounded"
const Containd = () => {
    return(
        <>
         <div className='main-cards'>
            <div className='card cursor-pointer'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <Inventory2RoundedIcon style={{
                      color: "#fff"
                    }}/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card cursor-pointer'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <GridViewRoundedIcon style={{
                      color: "#fff"
                    }}/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card cursor-pointer'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <GroupsRoundedIcon style={{
                      color: "#fff"
                    }}/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card cursor-pointer'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <NotificationsActiveRoundedIcon style={{
                      color: "#fff"
                    }}/>
                </div>
                <h1>42</h1>
            </div>
        </div>
        <div className=' w-[88%] flex justify-center sm:w-[100%]'>
        <ChartComponent />
        </div>
        </>
    )
};
export default Containd