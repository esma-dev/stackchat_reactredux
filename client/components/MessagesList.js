import React, { Component } from 'react';
import Message from './Message';
import NewMessageEntry from './NewMessageEntry';
import store from '../store';

export default class Messages extends Component {

  constructor () {
    super();
    this.state = store.getState();
    // console.log('THIS IS STATE:', this.state);
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render () {

    const channelId = Number(this.props.match.params.channelId); // because it's a string "1", not a number!
    const messages = this.state.messages;
    console.log('THIS IS MESSAGES:', messages);
    console.log('THIS IS STATE:', this.state);

    let filteredMessages = messages.filter(message => message.channelId === channelId);
    console.log('FILTERED MESSAGES: ', filteredMessages);

    return (
      <div>
        <ul className="media-list">
          { filteredMessages.map(message => <Message message={message} key={message.id} />) }
        </ul>
        <NewMessageEntry channelId={channelId} />
      </div>
    );
  }
}
