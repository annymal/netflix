import React, { useState } from 'react'
import { DATA } from '../../../data'
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation'
import Sidebar from '../../UI/Sidebar/Sidebar'
import Epizodes from '../Episodes/Epizodes'
import Information from './Information'
import styles from './Main.module.scss'

const Main = () => {
	const [isSidebarShow, setIsSidebarShow] = useState(false)
	const [activeTab, setActiveTab] = useState(false)

	return (
		<div className={styles.wrapper}>
			<Sidebar isSidebarShow ={isSidebarShow}setIsSidebarShow={setIsSidebarShow} />
			<div 
			className={styles.main}
			style ={{ backgroundImage: `url(${DATA[0].mainImage})`,
			width: isSidebarShow ? '85%' : '90%',
		}}>
			 
			{activeTab === 1? 
				<Information movie={DATA[0]} />
				: null }

				<BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
		</div>
		{activeTab === 2 && 
          <Epizodes />}
		</div>
	)
}

export default Main