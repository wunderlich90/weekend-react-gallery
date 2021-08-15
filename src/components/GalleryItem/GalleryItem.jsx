import React from 'react';


function GalleryItem({item, getPicsList, markLiked, swap}) {

    const markPicLiked = () => {
        let likeCount = 0;
        console.log('mark pic liked', likeCount ++);
       
        

    }

    const picSwap = () => {
   

    }


    console.log('item in pics list item component', item);

    return (
        <div id='picsList-item'> 
            <img 
                 src={item.path}
            />
            <p>{item.description}</p>
            <p>Likes count: {item.likes}</p>
        <div>
            <button onClick={() => markPicLiked()}>LIKE</button>
            <button onClick={picSwap}>?</button>
        </div>
           
        
        </div>
    )

}


export default GalleryItem;