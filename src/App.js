import React from 'react'
import AppInner from './AppInner'

class App extends React.Component {
    state = {
        message: "",
        alea: 0
    }

    funcallback = (childData) => {
        this.setState({ message: childData })
    }

	//Funcion dedicada a la actualizacion de la variable "alea"
    updateAlea = (newAlea) => {
        this.setState({ alea: newAlea })
    }

    render() {
        return (
            <div>
                <AppInner parentCallback={this.funcallback} updateAlea={this.updateAlea} />
                <p>{this.state.message}</p>
                <p>Alea: {this.state.alea}</p>
            </div>
        )
    }
}

export default App