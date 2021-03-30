import { useState } from 'react'

export const useFetchGifts = () => {
  const [state, setstate] = useState({
      data: [],
      loading: true,
  });

  setTimeout(() => {
    setstate({
        data: [],
        loading: false,
    })
  }, 3000)

  return state;
};