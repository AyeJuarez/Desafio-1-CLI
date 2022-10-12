import React from "react";
import styled from "styled-components";
import { Images } from "../../utils/images";

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: white;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;


const Slider = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <Item className="carousel-item active">
                    <img src={Images.Slider02} className="d-block w-100" alt="slider02" />
                </Item>
                <Item className="carousel-item">
                    <img src={Images.Slider03} className="d-block w-100" alt="slider03" />
                </Item>
            </div>
        </div>
    );
};

export default Slider;

