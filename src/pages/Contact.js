import { Images } from "../utils/images"

const contact = () => {
    return (
        <>
            <div> <h3>Contactanos a nuestro whatsapp antes cualquier duda!</h3></div>

            <a href="https://wa.me/+5491136596668/?text=Hola, queria realizar una consulta">
                <img src={Images.whatsapp} width="70px" height="70px"  alt="logo de whatsapp" />
            </a>
        </>
    )
}

export default contact