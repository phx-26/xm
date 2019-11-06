import React from 'react'

import Cardzj from './Cardzj/Cardzj'

import './Card.css'

class Card extends React.Component {
  render () {
    // console.log(this.props)
    return (
      <div className="cardzj">
        {
          this.props.todos.map((item)=>{
            // console.log(item)
            return(
              <Cardzj todos={item}></Cardzj>
            )
          })
        }
      </div>
    )
  }
}

export default Card