import { useState, useEffect, useRef} from 'react';
import { ObjectLiteral } from '../../types';
import ModalDetail from '../modalDetails/modal-details';
import '../resultList/result-list.css';


interface Props {
    dataSongs: Array<any> | null
}

function ResultsList(props: Props) {
    const { dataSongs } = props;
    const containerList = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (dataSongs && containerList.current) {
            containerList.current.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }, [dataSongs]);

    const [ detailSong, setDetailSong ] = useState<ObjectLiteral | null>();

    const closeModal = () => {
        setDetailSong(null);
    }

    const renderSongs = () => {
        if(dataSongs !== null) {
            let songs: Array<any> = [];
            
            songs = dataSongs.map((song, index) => {
                return (
                    <div className='results_details' key={index}>
                        {song.album.images[1] ? 
                            <img src={song.album.images[1].url} alt='Album' /> : 
                            <div className='default-image-album'></div>
                        }
                        <h3 className='results-details_title'>{song.name}</h3>
                        {song.artists[0].name && <cite className='results-details_author'>{song.artists[0].name}</cite>}
                        <button onClick={ () => {setDetailSong(song)} }>
                            Details
                        </button>
                    </div>
                )
            });  
            return songs;
        } else {
            return null;
        }
    }

    return (
        <div>
            { dataSongs && <h2 className='results-list__title'>Results</h2> }
            <div className='results-list' ref={containerList}>
                {renderSongs()}
                { detailSong &&
                    <ModalDetail
                        details={detailSong}
                        closeModal={closeModal}
                    />
                }
            </div>
        </div>
    );
}

export default ResultsList;