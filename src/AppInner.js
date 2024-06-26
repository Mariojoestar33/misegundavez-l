import React from 'react'

class AppInner extends React.Component {
    sendData = () => {
        setInterval(() => {
            const currTime = Date()
            this.props.parentCallback(currTime)
			//Se agrega un numero aleatorio entre 1 y 21
            const randomNum = Math.floor(Math.random() * 21) + 1
            this.props.updateAlea(randomNum) //Se actualiza el state "alea"
        }, 1000)
    }

    componentDidMount() {
        this.sendData()
    }

    render() {
        return (<div></div>)
    }
}

export default AppInner