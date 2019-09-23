import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';

class PrListComponentTableRow extends Component {
    state= {};

    render() {
      const {
        prId,
        jiraId,
        raisedBy,
        component,
        prOpenDate,
        prCloseDate,
        turnAroundTime,
        comments,
      } = this.props;
      return (
        <tr>
          <td>{prId}</td>
          <td>{jiraId}</td>
          <td>{raisedBy}</td>
          <td>{component}</td>
          <td>{moment(prOpenDate).format('MMM Do YYYY') }</td>
          <td>{prCloseDate === null ? 'pr not closed' : prCloseDate}</td>
          <td>{turnAroundTime}</td>
          <td>{comments.length}</td>
        </tr>
      );
    }
}

PrListComponentTableRow.propTypes = {
  prId: PropTypes.number.isRequired,
  jiraId: PropTypes.number.isRequired,
  raisedBy: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  prOpenDate: PropTypes.instanceOf(Date).isRequired,
  prCloseDate: PropTypes.instanceOf(Date).isRequired,
  turnAroundTime: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
}

export default PrListComponentTableRow;
