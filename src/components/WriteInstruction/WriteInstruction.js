import React, { useState } from 'react'
import { BASE_URI } from '../../base_URI';
import WriteInstructionStyles from './WriteInstructionStyles';

const WriteInstruction = ({input}) => {
    const [giftImage, setGiftImage] = useState([]);

    const giftImages = async () => {
        const baseUri = await fetch(BASE_URI);
        const { data } = await baseUri.json();

        const getImage = data.map((gift) => {
            return {
                id: gift.id,
                title: gift.title,
                url: gift.url,
                image: gift.images?.downsized_medium.url,
            }
        });
        setGiftImage(getImage);
    }

    giftImages();
    
    return (
        <>
            <WriteInstructionStyles>
                <p className="inputValue">{input}</p>
                <div className="container">
                    {
                        giftImage.map((img) => (
                            <div key={img.id} className="giftImage">
                                <img src={img.image} alt={img.title}/>
                                <p>{img.title}</p>
                            </div>
                        ))
                    }
                </div>
            </WriteInstructionStyles>
        </>
    )
}

export default WriteInstruction;
