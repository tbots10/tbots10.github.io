import React from 'react';

class BottomContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            changePlayerInfo: false,
            changeClassCard: "bounceInDown",
            isClosed: false
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.setState({
                changePlayerInfo: !this.state.changePlayerInfo,
                changeClassCard: ""
            })
        }, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    closeCard = () => {
        this.setState({
            isClosed: true
        })
    }

    render() {
        if (!this.props.player || this.state.isClosed) {
            return null
        } else {
            let date = new Date();
            let birthYear = this.props.player.BirthDate.slice(0, 4);

            if (!this.state.changePlayerInfo) {
                return (
                    <div className={`PlayerCard ${this.state.changeClassCard}`}>
                        <button onClick={this.closeCard}>X</button>
                        <div className="PlayerFoto" style={{ backgroundImage: `url(${this.props.player.PhotoUrl})` }} />
                        <div className="PlayerInfo">
                            <h2>{this.props.player.FirstName} {this.props.player.LastName}</h2>
                            <h2>Pozycja: {this.props.player.Position}</h2>
                            <p>Jersey #{this.props.player.Jersey}</p>
                            <p>Wiek: {date.getFullYear() - birthYear}</p>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="PlayerCard">
                        <button onClick={this.closeCard}>X</button>
                        <div className="PlayerFoto" style={{ backgroundImage: `url(${this.props.player.PhotoUrl})` }} />
                        <div className="PlayerInfo">
                            <h2>Wzrost: {Math.round(this.props.player.Height * 2.54)} cm</h2>
                            <h2>Waga: {Math.round(this.props.player.Weight * 0.45)} kg</h2>
                            <p>Miejsce urodzenia: {this.props.player.BirthState}</p>
                            <p>Sezon: {this.props.player.Experience + 1}</p>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default BottomContainer;