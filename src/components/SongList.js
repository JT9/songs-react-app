import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {

    //helper method
    //take list of songs, map over them and return jsx
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render() {
        return <div>{this.renderList()}</div>;
    }
}

//function used to get data from redux store
const mapStateToProps = state => {
    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);



