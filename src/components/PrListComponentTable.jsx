import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPrList } from '../actions/prListAction';
import PrListComponentTableRow from './PrListComponentTableRow';

class PrListComponentTable extends Component {
    state={};


    componentDidMount() {
      const { fetchPrListAction } = this.props;
      fetchPrListAction();
    }

    render() {
      const { list } = this.props;
      // eslint-disable-next-line no-console
      console.log(list);
      return (
        <div>
          <table className="pr-list-table">
            <thead>
              <tr>
                <th>PR Id</th>
                <th>Jira Id</th>
                <th>Raised By</th>
                <th>Component</th>
                <th>PR Open Date</th>
                <th>PR Close Date</th>
                <th>Turn Around Time</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {
                list.map((listItem) => (
                  <PrListComponentTableRow
                    prId={listItem.prId}
                    jiraId={listItem.jiraId}
                    raisedBy={listItem.raisedBy}
                    component={listItem.component}
                    prOpenDate={listItem.openDate}
                    prCloseDate={listItem.closeDate}
                    turnAroundTime={listItem.trt}
                    comments={listItem.comments}
                  />
                ))
              }
            </tbody>
          </table>
        </div>
      );
    }
}

PrListComponentTable.propTypes = {
  list: PropTypes.arrayOf.isRequired,
  fetchPrListAction: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, actions)(PrListComponentTable) ;