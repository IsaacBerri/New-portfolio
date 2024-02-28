import { Icon } from '@iconify/react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Copyright: Isaac Berrio</p>
      <div>
      <div className="contact">
          <a href="www.linkedin.com/in/isaacberrio" target="_blank">
            <Icon icon="mdi:linkedin" width="24" height="24" />
          </a>
          <a href="https://github.com/IsaacBerri" target="_blank">
            <Icon icon="mdi:github" width="24" height="24" />
          </a>
          <a href="mailto:berrioisaac15@gmail.com" target="_blank">
            <Icon icon="ic:baseline-email" width="24" height="24" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer