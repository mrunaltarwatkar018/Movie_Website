import React from 'react'

const Movie = (props) => {
  return (
    <div className='movie'>
      <img src={props.img} alt="" />
        <div className='bg'>
            <p> {props.title} </p>
            <p>Year: {props.year} </p>
        </div>
    </div>
  )
}

export default Movie;
