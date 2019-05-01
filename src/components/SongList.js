import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    render() {
        console.log(this.props);
        return <div>SongList</div>
    }
}

//function used to get data from redux store
const mapStateToProps = state => {
    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);



