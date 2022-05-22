// import Dropdown from './Dropdown';
import MainHead from '../header/mainHead/MainHead';
import Navbar from '../header/navbar/Navbar';
import TopHead from '../header/topHead/TopHead';
import CategoryList from '../category/CategoryList';

const Header = () => {
    return (
        <>
            <TopHead />
            <MainHead />
            <CategoryList />
            {/* <div className="header_logo">
                <h1>MALIBRAIRIE</h1>
            </div>
            <div className="header_search">
                <BiSearchAlt2 className="searchIcon" />
                <input
                    type="text"
                    placeholder="RECHERCHER ICI"
                    className="search_input"
                />
                <button className="search_btn">RECHERCHER</button>
            </div>
            <div className="header_right">
                <div className="header_option">
                    <span className="header_optionOne">Bonjour ...</span>
                    <span className="header_optionTwo">Connexion</span>
                </div>
                <div className="dropdown">
                    <Dropdown />
                </div>
                <div className="header_support">Support</div>
                <div className="header_basket">
                    <MdAddShoppingCart />
                    <span className="basket_title">Panier</span>
                </div>
            </div> */}
        </>
    );
};

export default Header;
