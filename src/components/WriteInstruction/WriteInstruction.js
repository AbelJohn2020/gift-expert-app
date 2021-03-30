import React, { useEffect, useState } from 'react'
import getGifts from '../../helpers/getGifts/getGifts';
import { useFetchGifts } from '../../hooks/useFetchGifts';
import WriteInstructionStyles from './WriteInstructionStyles';

const WriteInstruction = ({input}) => {
    const [giftImage, setGiftImage] = useState([]);

    const {loading} = useFetchGifts();

    useEffect(() => {
        getGifts(input)
            .then((images) => setGiftImage(images));
    }, [input]) // si la categoria cambia volvera a ejecutar el useEffect
    
    return (
        <>
            <WriteInstructionStyles>
                <p className="inputValue">{input}</p>
                { loading
                    ? <p>loading...</p>
                    : <p>Complete</p>
                }
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
