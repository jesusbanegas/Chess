import { Link } from "react-router-dom";
import './Menu.css';

const Menu = () => {
    return(
        <div className="GeneralMenuDiv">
            <h1 className="ReadyToPlayChess">Ready to play chess?</h1>
            <div className="SecMenuDiv">
                <li className="LiMenu">
                    <h2>Player 1</h2>
                    <select className="SelectMenu">
                        <option className="MenuOption">White pieces</option>
                        <option className="MenuOption">Black pieces</option>
                        <option className="MenuOption">Random pieces</option>
                    </select>
                </li>
                <li className="LiMenu">
                    <h2>Player 2</h2>
                    <h3 className="PlayerTwoSelection">black</h3>
                </li>
                <li className="LiMenu">
                    <h2 className="MenuTime">Time</h2>
                    <select className="SelectMenu">
                        <option className="MenuOption">Unlimited time</option>
                        <option className="MenuOption">10 min</option>
                        <option className="MenuOption">5 min</option>
                        <option className="MenuOption">2 min</option>
                        <option className="MenuOption">1 min</option>
                    </select>
                </li>
            </div>
            <Link className="StartMatchButton" to='/play'>START MATCH</Link>
        </div>
    );
}

export default Menu;