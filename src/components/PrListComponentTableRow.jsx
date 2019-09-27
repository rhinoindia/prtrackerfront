/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';

const PrListComponentTableRow = (props) => {

  const filterReviewers = (reviewers) => {
    const userNames = [];
    const reviewersList = [];
    // eslint-disable-next-line no-plusplus
    for (let i = (reviewers.length - 1); i >= 0; i--) {
      if (!userNames.includes(reviewers[i].username) && !(reviewers[i].state === 'COMMENTED')) {
        userNames.push(reviewers[i].username);
        reviewersList.push(reviewers[i]);
      }
    }
    return reviewersList;
  };
  const {
    prId,
    prLink,
    jiraId,
    jiraLink,
    raisedBy,
    component,
    prOpenDate,
    prCloseDate,
    turnAroundTime,
    comments,
    reviewers,
  } = props;
  return (
    <tr>
      <td><a href={prLink} target="_blank" data-toggle="tooltip" data-placement="bottom" title={prLink}>{prId}</a></td>
      <td><a href={jiraLink} target="_blank" data-toggle="tooltip" data-placement="bottom" title={jiraLink}>{jiraId}</a></td>
      <td>{raisedBy}</td>
      <td>{component}</td>
      <td>{moment(prOpenDate).format('MMM DD YYYY') }</td>
      <td>{prCloseDate === null ? '--' : moment(prCloseDate).format('MMM DD YYYY')}</td>
      <td>{turnAroundTime === 'N/A' ? '--' : turnAroundTime}</td>
      <td>
        {filterReviewers(reviewers).map((listr) => {
          if (listr.state === 'APPROVED') {
            return (
              <div>
                <span className="ticks">&#10003;</span>
                <span data-toggle="tooltip" data-placement="bottom" title="Approved">{listr.username}</span>
              </div>
            );
          }
          if (listr.state === 'CHANGES_REQUESTED') {
            return (
              <div>
                <span className="cross">&#10007;</span>
                <span data-toggle="tooltip" data-placement="bottom" title="Changes Requested">{listr.username}</span>
              </div>
            );
          }
        })}
      </td>
      <td>{comments.length}</td>
    </tr>
  );
};

PrListComponentTableRow.propTypes = {
  prId: PropTypes.number.isRequired,
  prLink: PropTypes.string.isRequired,
  jiraId: PropTypes.number.isRequired,
  jiraLink: PropTypes.string.isRequired,
  raisedBy: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  prOpenDate: PropTypes.instanceOf(Date).isRequired,
  prCloseDate: PropTypes.instanceOf(Date),
  turnAroundTime: PropTypes.string.isRequired,
  reviewers: PropTypes.object,
  comments: PropTypes.string.isRequired,
};

export default PrListComponentTableRow;
