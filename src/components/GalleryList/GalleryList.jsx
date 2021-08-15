import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'


function GalleryList({getPicsList, clearPics, galleryItems}) {

    const swap = () => {

    }

    const like = () => {

    }




    return (
        <div id='pics-list' className='pics-list'>
            <button onClick={swap}>SWAP</button>
            <button onClick={like}>LIKE</button>
            <div id='pics-list' className='list'>
                {galleryItems.map((item) => (
                    <GalleryItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>



        </div>
    )
}


export default GalleryList;