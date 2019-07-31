import React from 'react'
import Gallery from 'react-photo-gallery'

export default function GalleryPage(){
    const photos = [];
    
    for(let i=1; i<35; i++){
        const randomId = Math.floor(Math.random() * 99);  
        let photo = {
            src: `https://picsum.photos/id/${randomId}/600/600`,
            width: 4,
            height: 3
        }
        
        photos.push(photo);
    }
    
    return (
        <div>
            <h2>Gallery</h2>
            <Gallery photos={photos} />
        </div>
    )
}