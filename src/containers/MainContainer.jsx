import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from '../components/Filter';
import { fetchPrList } from '../actions/prListAction';
import PrListComponentTable from '../components/PrListComponentTable';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: 'all',
      status: 'open',
    };
  }

  componentDidMount() {
    const { fetchPrListAction } = this.props;
    const { status, component } = this.state;
    fetchPrListAction(status, component);
  }

  onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    }, () => {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.fetchPrListAction(this.state.status, this.state.component);
    });
  }

  render() {
    // eslint-disable-next-line no-console
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
