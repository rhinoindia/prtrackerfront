/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';

class PrListComponentTableRow extends Component {
    state= {};

    render() {
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
      } = this.props;
      return (
        <tr>
          <td><a href={prLink} target="_blank" data-toggle="tooltip" data-placement="bottom" title={prLink}>{prId}</a></td>
          <td><a href={jiraLink} target="_blank" data-toggle="tooltip" data-placement="bottom" title={jiraLink}>{jiraId}</a></td>
          <td>{raisedBy}</td>
          <td>{component}</td>
          <td>{moment(prOpenDate).format('MMM DD YYYY') }</td>
          <td>{prCloseDate === null ? '--' : moment(prCloseDate).format('MMM DD YYYY')}</td>
          <td>{turnAroundTime === 'N/A' ? '--' : turnAroundTime}</td>
          <td>{comments.length}</td>
        </tr>
      );
    }
}

PrListComponentTableRow.propTypes = {
  prId: PropTypes.number.isRequired,
  prLink: PropTypes.string.isRequired,
  jiraId: PropTypes.number.isRequired,
  jiraLink: PropTypes.string.isRequired,
  raisedBy: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  prOpenDate: PropTypes.instanceOf(Date).isRequired,
  prCloseDate: PropTypes.instanceOf(Date).isRequired,
  turnAroundTime: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
}

export default PrListComponentTableRow;
