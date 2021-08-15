import React from 'react';


function GalleryItem({item, getPicsList, markLiked, swap}) {

    const markPicLiked = () => {
        markLiked(item.id);
        getPicsList();

    }

    const picSwap = () => {
        swap(item.id)
        getPicsList();

    }


    console.log('item in pics list item component', item);

    return (
        <div id='picsList-item'> 
            {item.path}
            {item.description}
            {item.likes}
            <button onClick={markPicLiked}>LIKE</button>
            <button onClick={picSwap}>?</button>
        
        </div>
    )

}


export default GalleryItem;