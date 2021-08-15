import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'


function GalleryList({getPicsList, clearPics, galleryItems}) {





    return (
        <div id='pics-list' className='pics-list'>
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