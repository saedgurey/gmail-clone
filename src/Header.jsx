
import "./Header.css"
import { Avatar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./config/firebase";

const Header = () => {
    const user = useSelector(selectUser)
 const dispatch =useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })

    }
    return (
        <div className='header'>
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRceIIBz4GgeNszaN5SupI6p1SJE_Bzgk3Q&usqp=CAU"
                    alt="gmail logo"
                />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="search" type="text" />
                <ArrowDropDownIcon className="header-inputCaret" />
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} src="user?.photoUrl"   rel="noreferrer"/>            </div>
        </div>
    )
}

export default Header