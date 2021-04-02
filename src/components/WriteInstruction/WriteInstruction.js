import React, { useEffect, useState } from 'react'
import { useFetchGifts } from '../../hooks/useFetchGifts';
import WriteInstructionStyles from './WriteInstructionStyles';

const WriteInstruction = ({input}) => {
    const {data: images, loading} = useFetchGifts({ input });
    
    return (
        <>
            <WriteInstructionStyles>
                <p className="inputValue">{input}</p>
                { loading && <p>...loading</p>}
                <div className="container">
                    {
                        images.map((img) => (
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
