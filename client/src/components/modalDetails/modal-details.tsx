import { ObjectLiteral } from '../../types';
import './modal-details.css'

interface Props {
    details: ObjectLiteral;
    closeModal: () => void,
}

function ModalDetail(props: Props) {
    return (
        <div className="modal">
                <div className="modal-container">

                <span onClick={props.closeModal} className='modal-close'><i className="fas fa-times-circle"></i></span>

                    <div className="modal-container__img">
                        {props.details.album.images[1] ?
                            <img src={props.details.album.images[1].url} alt='Album details' /> :
                            <div className='default-image-album'></div>
                        }
                    </div>

                    <h3 className="modal-container__title">{props.details.name}</h3>

                    <p> <strong> <i className="far fa-dot-circle"></i> Release date: </strong> {props.details.album.release_date}</p>
                    <p><strong><i className="far fa-dot-circle"></i> Total tracks: </strong> {props.details.album.total_tracks}</p>
                    <p><strong><i className="far fa-dot-circle"></i> Disc number: </strong> {props.details.disc_number}</p>
                    <p><strong><i className="far fa-dot-circle"></i> popularity: </strong> {props.details.popularity}</p>
            </div>
        </div>
    )
}

export default ModalDetail;