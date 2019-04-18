import React, { Component } from 'react';
import './App.css';
import HeaderComponents from "./Components/HeaderComponents/HeaderComponents";
import NavigationComponents from "./Components/NavigationComponents/NavigationComponents"
import BodyComponents from './Components/BodyComponents/BodyComponents';
import FooterComponents from './Components/FooterComponents/FooterComponents'
import SearchComponents from './Components/SearchComponent/SearchComponents'
import Pagination from "react-js-pagination";
import CommentSection from "./Containers/CommentSection/CommentSection"


class Issues extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      activePage: 1,
      page: 1,
      loading: false
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues?page=')
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }

  handlePageChange = data => {
    console.log(`active page is ${data}`);
    this.setState({ activePage: data });
    fetch(`https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues?page=${data}`)
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }
  sortClickHandler = sort => {
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
      return (<div className="loader"></div>)
    }
    else {
      return (
        <div>
          <HeaderComponents />
          <NavigationComponents data={this.state.data} />
          <SearchComponents data={this.state.data} search={this.searchHandler} click={this.sortClickHandler} author={this.authorHandler} label={this.labelHandler} />
          <BodyComponents data={this.state.data} />
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={5}
            totalItemsCount={100}
            onChange={this.handlePageChange}
          />
          <FooterComponents />
          {/* <CommentSection data={this.state.data} /> */}
        </div>
      );
    }
  }
}

export default Issues;