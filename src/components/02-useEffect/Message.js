import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coors, setCoors] = useState({ x:0, y:0 });

    const { x,y } = coors;

    useEffect(() => {
        const mouseMove = (e) => {
            setCoors({ x: e.x, y: e.y });
        } 

        window.addEventListener('mousemove', mouseMove);
    
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])
    

  return (
    <>
        <h3>Eres genial!</h3>

        x: { x } y: { y }
    </>
  )
}
