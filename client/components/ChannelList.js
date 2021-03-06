import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
const RANDOM_CHANNEL = '/channels/1';
const GENERAL_CHANNEL = '/channels/2';
const DOGS_CHANNEL = '/channels/3';
const LUNCH_CHANNEL = '/channels/4';

function ChannelList(props) {
    console.log('PROPS.CHANNELS:', props.channels);
    return (
      <ul>
        { props.channels.map( (channel) => {
          return (
            <li key={channel.id}>
              <NavLink to={`/channels/${channel.id}`} activeClassName="active">
                <span># {channel.name}</span>
                <span className="badge">{ props.messages.filter(message => message.channelId === channel.id).length }</span>
              </NavLink>
            </li>
          )
        })}
        <li>
          <NavLink to="/new-channel">Create a channel...</NavLink>
        </li>
      </ul>
    );
}

function mapStateToProps(state){
  return {
    channels: state.channels,
    messages: state.messages
  };
};

/** Write your `connect` component below! **/
const ChannelListContainer = withRouter(connect(mapStateToProps)(ChannelList));
export default ChannelListContainer;
