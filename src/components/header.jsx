import { useContext } from "react";
import { langContext } from "../context";

const header = () => {

    const {t, setCurrentLang} = useContext(langContext)

    return (



        <header>
            <div className="container">
                <nav className='d-flex justify-content-between'>
                    <div className="logo"><a href="#">LOGO</a></div>
                    <ul className='list-unstyled d-flex gap-4'>
                        <li><a href="#">{t.home}</a></li>
                        <li><a href="#">{t.about}</a></li>
                        <li><a href="#">{t.contact}</a></li>
                    </ul>
                    <select onChange={(e)=>setCurrentLang(e.target.value)}>
                        <option value="selected disabled">Select language</option>
                        <option value="uz">Uzbek</option>
                        <option value="en">English</option>
                    </select>
                </nav>
            </div>
         </header>
    );
};

export default header;