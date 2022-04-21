import upload from './media/uploadDrawing.png';
import confirm from './media/confirmPlacement.png'
const QRTwo = () => {
    return (
        <div className="qr-two-container">
            <div className="place-buttons">
                <button><img src={`${upload}`} alt="upload image"/></button>               
                <button><img src={`${confirm}`} alt="confirm placement"/></button>
            </div>
        </div>
    )
}

export default QRTwo;