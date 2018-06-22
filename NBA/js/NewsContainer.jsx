import React from "react";

class NewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: null,
      newsIndex: 0
    };
  }

  getData = () => {
    let newsBaseURL = "https://api.fantasydata.net/v3/nba/scores/JSON/News";
    let keyURL = "b6098a2ffbe14e6ea478123779c4cb6d";

    fetch(newsBaseURL, {
      headers: {
        "Ocp-Apim-Subscription-Key": keyURL
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          newsData: data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentWillMount() {
    this.getData();
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      if (this.state.newsIndex === this.state.newsData.length - 1) {
        this.setState({
          newsIndex: 0
        });
      } else {
        this.setState({
          newsIndex: this.state.newsIndex + 1
        });
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    if (!this.state.newsData) {
      return <div />;
    } else {
      return (
        <div className="News">
          <h3>News</h3>
          {this.state.newsData[this.state.newsIndex].Content.replace(
            /&quot;/g,
            "'"
          )}
          <p>Source: {this.state.newsData[this.state.newsIndex].Source}</p>
        </div>
      );
    }
  }
}

export default NewsContainer;