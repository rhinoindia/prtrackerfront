import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PrListComponentTable from '../components/PrListComponentTable';
import Filter from '../components/Filter';
import { fetchPrList } from '../actions/prListAction';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      component: 'all',
      // eslint-disable-next-line react/no-unused-state
      status: 'open',
    };
  }

  componentDidMount() {
    const { fetchPrListAction } = this.props;
    fetchPrListAction(this.state.status, this.state.component);
  }

  onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    }, () => {
      this.props.fetchPrListAction(this.state.status, this.state.component)
    });
  }

  render() {
    console.log(this.state);
    const { fetchPrListAction, list } = this.props;
    return (
      <div>
        <Filter
          fetchPrListAction={fetchPrListAction}
          onHandleChange={this.onHandleChange}
        />
        <PrListComponentTable
          list={list}
          fetchPrListAction={fetchPrListAction}
        />
      </div>
    );
  }
}

MainContainer.propTypes = {
  fetchPrListAction: PropTypes.func.isRequired,
  list: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => {
  const { prTrackerReducer } = state;
  // eslint-disable-next-line no-console
  console.log(state);
  return {
    list: prTrackerReducer.list,
  };
};

const actions = {
  fetchPrListAction: fetchPrList,
};

export default connect(mapStateToProps, actions)(MainContainer);
