import React, { Component } from 'react';
import './App.css';
import HeaderComponents from "./Components/HeaderComponents/HeaderComponents";
import NavigationComponents from "./Components/NavigationComponents/NavigationComponents"
import BodyComponents from './Components/BodyComponents/BodyComponents';
import FooterComponents from './Components/FooterComponents/FooterComponents'
import SearchComponents from './Components/SearchComponent/SearchComponents'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('issues.json')
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }
  sortClickHandler = sort => {
    console.log("jbnvih", sort)
    this.setState(prevState => {
      let newTemp = [];
      if (sort === 'newest') {
        newTemp = prevState.data.sort((b, a) => {
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        });
      } else if (sort === 'oldest') {
        newTemp = prevState.data.sort((a, b) => {
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        });
      } else if (sort === 'recently updated') {
        newTemp = prevState.data.sort((b, a) => {
          return new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime();
        });
      } else if (sort === 'least recently updated') {
        newTemp = prevState.data.sort((a, b) => {
          return new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime();
        });
      }
      return { data: newTemp };
    })
  }

  searchHandler = (e, value) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      this.setState(prevState => {
        const newTemp = prevState.data.filter(issue => issue.title.toLowerCase().includes(value.toLowerCase()) === true);
        return { data: newTemp };
      });
      e.target.value = null;
    }
  }

  authorHandler = author => {
    this.setState((prevState) => {
      const newTemp = prevState.data.filter(issue => issue.user.login === author);
      return { data: newTemp };
    })
  }

  labelHandler = label => {
    this.setState(prevState => {
      const newTemp = prevState.data.filter(issue => {
        let data = issue.labels.filter(lab => lab.name === label);
        if (data.length > 0) {
          return true;
        } else {
          return false;
        }
      });
      return { data: newTemp };
    });
  }



  render() {
    if (this.state.data === null) {
      return (<div></div>)
    }
    else {
      return (
        <div>
          <HeaderComponents />
          <NavigationComponents data={this.state.data} />
          <SearchComponents data={this.state.data} search={this.searchHandler} click={this.sortClickHandler} author={this.authorHandler} label={this.labelHandler} />
          <BodyComponents data={this.state.data} />
          <FooterComponents />
        </div>
      );
    }
  }
}

export default App;
