import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PrListComponentTableRow from './PrListComponentTableRow';
import noDataImg from '../assets/searching.png';

class PrListComponentTable extends Component {
  state={};

  render() {
    const { list } = this.props;
    // eslint-disable-next-line no-console
    console.log(list);
    return (
      list.length === 0
        ? (
          <div className="no-data-container">
            <div className="no-data-img">
              <img src={noDataImg} alt="img" height="200px" />
              <div className="no-data-text">Looks like there is no PR.</div>
            </div>
          </div>
        )
        : (
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
                      prLink={listItem.prLink}
                      jiraId={listItem.jiraId}
                      jiraLink={listItem.jiraLink}
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
        )
    );
  }
}

PrListComponentTable.propTypes = {
  list: PropTypes.arrayOf.isRequired,
};

export default PrListComponentTable;
