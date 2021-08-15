TODO

[ ] Before Base Mode 
    [x] npm install
    [x] npm install pg
    [x] npm install nodemon --global
    [x] add images to public/images folder
    [ ] modify server/modules/gallery.data.js 
        [x] id
            [x] each id is a unique number
        [x] title
        [x] descrition
        [x] path for
    [x] npm run server
    [x] npm run client

[ ] Base Mode
    [x] Create component files
        [x] `GalleryList.js`
        [x] `GalleryItem.js`
    [x] Use axios to create `GET` in `App.js`
    [x] Pass gallery data stored in `App.js` to `GalleryList` via `props`
        [x] iterate over the list of gallery data
        [x] create GalleryItems (objects)
    [ ] Pass gallery items to `GalleryItem.js` via `props`
        [x] Update  `GalleryList` to use `GalleryItem` to display an image
        [ ] Swap the image with the description on click
            [ ] Use conditional rendering
            [ ] [conditional rendering](https://reactjs.org/docs/conditional-rendering.html.
        [ ] Display the number of likes for each item 
            [ ] include a 'like' button
        [ ] On 'like' button click
            [ ] use Axios to updte `PUT` with the 'like' count
            [ ] `/gallery/like/:id`
            [ ] Update the gallery every time the like buttiong is clicked
