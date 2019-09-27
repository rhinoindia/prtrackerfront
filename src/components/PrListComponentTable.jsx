import React from 'react';
import PropTypes from 'prop-types';
import PrListComponentTableRow from './PrListComponentTableRow';
import noDataImg from '../assets/searching.png';


const PrListComponentTable = (props) => {
  const { list } = props;
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
        <div className="table-responsive-xl tableFixHead">
          <table className="table table-bordered table-striped bt-table">
            <thead>
              <tr>
                <th scope="col">PR Id</th>
                <th scope="col">Jira Id</th>
                <th scope="col">Raised By</th>
                <th scope="col">Component</th>
                <th scope="col">PR Open Date</th>
                <th scope="col">PR Close Date</th>
                <th scope="col">Turn Around Time</th>
                <th scope="col">Reviewers</th>
                <th scope="col">Comments</th>
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
                      reviewers={listItem.reviewers}
                      comments={listItem.comments}
                    />
                  ))
                  }
            </tbody>
          </table>
        </div>
      )
  );
};

PrListComponentTable.propTypes = {
  list: PropTypes.arrayOf.isRequired,
};

export default PrListComponentTable;
