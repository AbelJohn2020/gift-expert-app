import React, { useEffect, useState } from 'react'
import getGifts from '../../helpers/getGifts/getGifts';
import WriteInstructionStyles from './WriteInstructionStyles';

const WriteInstruction = ({input}) => {
    const [giftImage, setGiftImage] = useState([]);

    useEffect(() => {
        getGifts(input)
    }, [])
    
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
