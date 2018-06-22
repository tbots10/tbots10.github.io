import React from "react";

class SideContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleTeamKeyAfterClick = event => {
    if (typeof this.props.teamKey === "function") {
      this.props.teamKey(event.currentTarget.dataset.key);
    }
    let logosElems = document.querySelectorAll(".Logos");
    logosElems.forEach(element => {
      element.classList.remove("Active");
    });
    event.currentTarget.className = "Logos Active";
  };

  render() {
    if (!this.props.teamsData) {
      return null;
    } else {
      let teamsArr = this.props.teamsData;
      return (
        <div className="SideContainer">
          {teamsArr.map(team => {
            return (
              <div
                className="Logos"
                key={team.Key}
                data-key={team.Key}
                onClick={this.handleTeamKeyAfterClick}
                style={{ backgroundImage: `url(${team.WikipediaLogoUrl}` }}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default SideContainer;