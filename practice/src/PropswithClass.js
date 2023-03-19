import React from 'react'

export default class PropswithClass extends React.Component {
    render()
    {
        return (
            <div>
                <h3>{this.props.data}</h3>
                <h4>{this.props.name}</h4>
            </div>
        )
    }
}
  
