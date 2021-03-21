import React from 'react';

class OneAvatar extends React.Component {
    state = { avatar: this.props.avatar }

    render() {
        return <>
            <div className="avatar-card">
                <h2>{this.state.avatar.name}</h2>
                <div className="avatar-img" style={{ background: `url('${this.state.avatar.picture}') center center/cover` }}>
                </div>
            </div>
        </>
    }
}
export default OneAvatar;