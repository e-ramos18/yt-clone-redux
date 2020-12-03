import React from 'react'
import Search from './Search'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Search />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail />
            </div>
            <div className="five wide column">
              <VideoList />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
