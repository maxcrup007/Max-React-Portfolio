import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Portfolio() {
  return (
    <div id='portfolio' className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://cdn.discordapp.com/attachments/645911480017092630/1515757371631337683/image.png?ex=6a302a8e&is=6a2ed90e&hm=364212de1dd63572d13743a0d82abbf12ad295d040d9ac5463388e79da644c89&" alt="coding" />
            </Tilt>
            <p>Laboratory Management System Project</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://github.com/maxcrup007/CLEM/blob/master/Booking_Management/media/lab_image/lab_xfsHJE1.jpg?raw=true" alt="coding" />
            </Tilt>
            <p>Laboratory Management System Project</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://cdn.discordapp.com/attachments/645911480017092630/1515758150047895642/CE-02404_RdgYtm8.jpg?ex=6a302b48&is=6a2ed9c8&hm=d4c4a8fdecec1774d2ab2de695c1029ad5d4a203cf33af541caef3af6db0ac0b&" alt="coding" />
            </Tilt>
            <p>Laboratory Management System Project</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://cdn.discordapp.com/attachments/645911480017092630/1515749254457458869/image.jpg?ex=6a3022ff&is=6a2ed17f&hm=f414291d59100f5406f5c89ca63d141418de9d9d0d6d078e1646f60a0c3c5aa5&" alt="coding" />
            </Tilt>
            <p>Fertilizer management system</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="coding" />
            </Tilt>
            <p>Game Guide Wiki</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="coding" />
            </Tilt>
            <p>Game Guide Wiki</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
