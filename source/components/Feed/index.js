import React, { Component } from 'react';
//Components
import Post from 'components/Post';
import Composer from 'components/Composer';
import StatusBar from 'components/StatusBar';
import Spinner from 'components/Spinner';

//Instruments
import Styles from './styles.m.css';

export default class Feed extends Component {
    state = {
        posts: [
            { id: '123', comment: 'Hi There!', created: 1548775740 }, 
            { id: '1234', comment: 'Hello', created: 1548775999 },
        ],
        postsFetch: true,  
    };

    render () {
        const { posts,  postsFetch } = this.state;

        const postsJSX = posts.map((post) => {
            return <Post key = { post.id } { ...post }/>;  
        });

        return (
            <section className = { Styles.feed }>
                <Spinner isSpinning = {  !postsFetch }/>
                <StatusBar/>
                <Composer/>
                {postsJSX}
            </section>
        );
    }
}
