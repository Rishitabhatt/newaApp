import './Header.css';
import { FaCartPlus ,FaIdBadge } from "react-icons/fa6";

function Header(){
    return (
        <div className="header">
            <div className="container">
            <div className="index">
                <div className="heading">Little<span> Fashion</span>

                </div>
                <div className="logo">
                <ul className="our">
                    <ol>home</ol>
                    <ol>
                    <a href="company.html">story</a>
                    </ol>
                    <ol><a href="#product ">product</a>
                    </ol>
                    <ol><a href="popular.html">FAQs</a></ol>
                    <ol><a href="contact.html" style={{color:'grey', textDecoration: 'none'}}>contact</a></ol>
                </ul>

                </div>


                <div className="type">
<FaIdBadge /> <FaCartPlus/>
                
                </div>
            </div>


            </div>
        </div>
    )
}

export default Header;