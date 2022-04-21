import upload from './media/uploadDrawing.png';
import confirm from './media/confirmPlacement.png'
const QRTwo = () => {
    return (
        <div className="qr-two-container">
            <div>
                <button ><img src={`${upload}`} alt="cancelButton"/></button>
            </div>
            <button><img src={`${cancel}`} alt="cancelButton"/></button>
            </div>
        </div>

    )
}

export default QRTwo;