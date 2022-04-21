import upload from './media/uploadDrawing.png';
import confirm from './media/confirmPlacement.png'
const QRTwo = () => {
    return (
        <div className="qr-two-container">
            <div>
                <button className="place-buttons"><img src={`${upload}`} alt="upload image"/></button>               
                <button className="place-buttons"><img src={`${confirm}`} alt="confirm placement"/></button>
            </div>
        </div>
    )
}

export default QRTwo;