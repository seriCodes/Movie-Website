import React from 'react'
import Image from 'react-bootstrap/Image'


export const Homepage = () => {

    
//             fontFamily:

    return (
        <div>
        <h1 style={{
            display: 'flex',
            justifyContent: 'center',
            fontFamily:'Ubuntu',
            textDecoration: 'underline',
          }}>SAAR'S MOVIE RATING WEBSITE</h1>
          <Image src="https://thumbs.dreamstime.com/z/cinema-poster-retro-film-projector-background-film-projector-poster-131899665.jpg" roundedCircle fluid/>

        </div>
    )
}
