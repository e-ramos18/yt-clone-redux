import React from 'react'
import { connect } from 'react-redux'
import { fetchVideos, selectVideo } from '../actions/index'
import './VideoList.css'

class Videolist extends React.Component {
  componentDidMount() {
    this.props.fetchVideos()
  }

  renderedList() {
    return this.props.videolist.map((video) => {
      return (
        <div
          onClick={() => this.props.selectVideo(video)}
          className="video-item item"
          key={video.snippet.title}
        >
          <img
            alt={video.snippet.title}
            className="ui image"
            src={video.snippet.thumbnails.medium.url}
          />
          <div className="content">
            <div className="header">{video.snippet.title}</div>
          </div>
        </div>
      )
    })
  }
  render() {
    return <div className="ui relaxed divided list ">{this.renderedList()}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    videolist: state.videos.videolist,
  }
}

export default connect(mapStateToProps, { fetchVideos, selectVideo })(Videolist)
