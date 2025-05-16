import { useNavigate } from "react-router-dom";

const Header = ({ current }) => {
    const navigate = useNavigate();

    const handleMove = (path) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(path);
    };

    return (
        <header>
            <h1>HOME TABLE DECO FAIR BUSAN</h1>
            <nav>
                <ul>
                    <li className={current === 'guide' ? 'on' : ''}>
                        <button onClick={() => handleMove("/exhibitionGuide")}>전시안내</button>
                    </li>
                    <li className={current === 'plan' ? 'on' : ''}>
                        <button onClick={() => handleMove("/plan")}>기획관</button>
                    </li>
                    <li className={current === 'salon' ? 'on' : ''}>
                        <button onClick={() => handleMove("/designSalon")}>디자인살롱 서울</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
