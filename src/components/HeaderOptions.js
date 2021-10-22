import React from 'react'
import '../css/HeaderOptions.css';


export default function HeaderOptions({Icon, title}) {
  return (
    <div className="headerOption">
        {Icon && <Icon  className="headerOption__icon"/>}
        <h3 className="headerOption__title">{title}</h3>

    </div>
  )
}
