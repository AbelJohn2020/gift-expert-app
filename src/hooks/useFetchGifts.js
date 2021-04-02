import { useEffect, useState } from 'react'
import getGifts from '../helpers/getGifts/getGifts';

export const useFetchGifts = ({ input }) => {
  const [state, setstate] = useState({
      data: [],
      loading: true,
  });

  useEffect(() => {
    getGifts(input)
      .then((images) => {
        setTimeout(() => {
          console.log(images);
          setstate({
            data: images,
            loading: false,
          })
        }, 3000);
      })
  }, [input]) // si la categoria cambia volvera a ejecutar el useEffect

  return state;
};