import React from 'react';
import axios from 'axios';
import c from './friends.module.css';
import ava from '../../../assets/i.jpg';

class Friends extends React.Component {
	componentDidMount() {
		axios
			.get('http://social-network.samuraijs.com/api/1.0/users')
			.then((response) => {
				this.props.setUsers(response.data.item);
			});
	}

	render() {
		return (
			<div className="content owerflow ">
				<div className="content_in">
					{this.props.users.map((user) => (
						<div key={user.id}>
							<div className={c.friends_wrap}>
								<img
									className={c.avatar}
									src={user.photos.small != null ? user.photos.small : ava}
									alt=""
								/>
								<div className={c.fritnd_discrip}>
									<div className={c.first_lstName}>
										{user.firstName} {user.lastName}
									</div>
									<div className={c.status}>{user.status}</div>
									<div className={c.fits_unFits}>{user.fits}</div>
								</div>
								<div>
									{user.follow ? (
										<button
											className={c.button}
											onClick={() => {
												this.props.follow(user.id);
											}}>
											UnFollow
										</button>
									) : (
										<button
											className={c.button}
											onClick={() => {
												this.props.unFollow(user.id);
											}}>
											Follow
										</button>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Friends;
