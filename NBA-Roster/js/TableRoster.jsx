import React from "react";

class TableRoster extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePlayerAfterClick = event => {
    if (typeof this.props.playerData === "function") {
      this.props.playerData(event.currentTarget.dataset.player);
    }
  };

  tableSort = event => {
    let objName = event.currentTarget.dataset.objname;
    if(typeof this.props.tableSort === "function") {
      this.props.tableSort(objName)
    }    
  }

  render() {
    return (
      <table className="PlayersTable">
        <thead>
          <tr>
            <th data-objname="Jersey" onClick={this.tableSort}>#</th>
            <th data-objname="FirstName" onClick={this.tableSort}>Imię</th>
            <th data-objname="LastName" onClick={this.tableSort}>Nazwisko</th>
            <th data-objname="Position" onClick={this.tableSort}>Pozycja</th>
          </tr>
        </thead>
        <tbody>
          {this.props.rosterData.map((player, index) => {
            return (
              <tr
                key={player.PlayerID}
                data-player={player.PlayerID}
                onClick={this.handlePlayerAfterClick}
              >
                <th>{player.Jersey}</th>
                <td>{player.FirstName}</td>
                <td>{player.LastName}</td>
                <td>{player.Position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default TableRoster;