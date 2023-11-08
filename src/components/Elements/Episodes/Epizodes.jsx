import React from 'react'
import styles from './Epizodes.module.scss'
const photos= [
	{
		id: 1,
		img: 'https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABbWzh9UJLkDk5CVTafKw1Cx_8_MigffS8uRkwvgdueuOJHqHNlb6YwphiThiakzoB5G3rBXwix1XIHFBlqENtiaC3lLLzryl0BdSiCSwA3AhRQ11Jrty1L3dqrjdfDjyWLkcPQ.jpg?r=bfa'
	},
	{
		id: 2,
		img: 'https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABeCl6zGWQMF-fDPaGWxJJ6gXCiIfPc5blAbE1PbcUS7CvT4d6FfN5P72mo2dDiEVLze4WuxEsV-tybTiGbjvZHMpvn9ibrEQtKr0AVKEZ3Ml5FZ92GKG-KI_8sbpzzYOq3IQQg.jpg?r=2fd'
	}
]

const Epizodes = () => {
	return (
		<nav className={styles.films}>
			<h1>My list</h1>
			{photos.map(photo => <img src={photo.img} alt='' key={photo.id} width={150} /> )}
		</nav>
	)
}

export default Epizodes

