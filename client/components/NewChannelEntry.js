import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeChannel, postChannel } from '../store'

function NewChannelEntry (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input value={props.newChannelEntry} onChange={props.handleChange} className="form-control" type="text" name="channelName" placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
function mapStateToProps (state) {
  return {
    newChannelEntry: state.newChannelEntry
  }
}
function mapDispatchToProps (dispatch, ownProps) {
  return {
    handleChange: function(e) {
      dispatch(writeChannel(e.target.value));
    },
    handleSubmit: function(e) {
      e.preventDefault();
      const name = e.target.channelName.value;
      dispatch(postChannel( { name },ownProps.history ))
      dispatch(writeChannel(''))
    }
  }
}

const newChannelEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);

export default  newChannelEntryContainer;