//Core
import React, { Component } from 'react';
import moment from 'moment';
import { func, string, array, number} from 'prop-types';

//Components
import { Consumer } from 'components/HOC/withProfile';
import Like from 'components/Like';

// Instruments
import Styles from './styles.m.css';

export default class Post extends Component {
    static propTypes = {
        comment:   string.isRequired,
        created:   number.isRequired,
        _likePost: func.isRequired,
        likes:     array.isRequired,
        id:        string.isRequired,
    };

    render () {
        const { comment, created, _likePost, id, likes } = this.props;

        return (
            <Consumer>
                { (context) => (
                    <section className = { Styles.post }>
                        <img src = { context.avatar }/>
                        <a>{`${context.currentUserFirstName} ${context.currentUserLastName}`}</a>
                        <time>
                            {moment.unix(created).format('MMMM D h:mm:ss a')}
                        </time>
                        <p>{comment}</p>
                        <Like
                            _likePost = { _likePost } 
                            id = { id}
                            likes = { likes }
                            { ...context }
                        />
                    </section>
                )}
            </Consumer>

        );
    }
}
