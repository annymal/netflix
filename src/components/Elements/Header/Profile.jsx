import React from 'react'
import styles from './Header.module.scss'

const Profile = () => {
	return (
		<div className={styles['profile-wrapper']}>
			<div className={styles.notification}>
				<i class='bx bxs-bell'></i>
				<span></span>
			</div>
			<div className={styles.profile}>
				<div>
					<img src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/14/avatar.jpg?wodth=50' alt='' 
					/>
				</div>
				<i class='bx bx-caret-down'></i>
			</div>
			</div>
	)
}

export default Profile