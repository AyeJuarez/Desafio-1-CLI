import React from "react";
import ItemListContainer from "../ItemListContainer";
import Slider from "../../components/Slider/Slider";
 import { Images } from "../../utils/images.js"
import "./Home.scss";

const Home = ({ onAdd }) => {
    return (
        <main className="home">
            <div >
                <img className="Logo" src={Images.Logo} alt="" />
            </div>
            <Slider />
            <ItemListContainer onAdd={onAdd} />
        </main>
    );
};

export default Home;


