import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Messages messages={this.props.messages}/>
        <div className="row">
          <div className="col-sm-4">
            <div className="panel">
              <div className="panel-body">
                <h3>Facebook page 업로드 영상</h3>
                <p>한글 테스트 가나다라마바사 아자카타동국대학교</p>
                <a href="#" role="button" className="btn btn-default">View details</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="panel">
              <div className="panel-body">
                <h3>Youtube 영상</h3>
                <p>팔정도를 향한 나의 마음</p>
                <a href="#" role="button" className="btn btn-default">View details</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="panel">
              <div className="panel-body">
                <h3>Soundcloud 음원</h3>
                <p>수유역 엔젤리너스으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으으
                으으으으으으으으으으으으으으으으으으</p>
                <a href="#" role="button" className="btn btn-default">View details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
