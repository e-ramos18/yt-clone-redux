import React from 'react'
import { connect } from 'react-redux'

class VideoDetail extends React.Component {
  render() {
    if (this.props.selectedVideo === null) {
      return <div>Loading</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`
    const video = this.props.selectedVideo

    return (
      <div>
        <div className="ui embed">
          <iframe title="video player" src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4 className="header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state.videos.selectedVideo)
  return {
    selectedVideo: state.videos.selectedVideo,
  }
}

export default connect(mapStateToProps)(VideoDetail)
