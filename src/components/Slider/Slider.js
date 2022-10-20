import Carousel from 'react-bootstrap/Carousel';
import { Images } from "../../utils/images";


function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Images.Slider03}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Images.Slider02}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;