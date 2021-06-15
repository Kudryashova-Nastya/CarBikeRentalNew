import React, { Component } from 'react'
import ListItem from '../ListItem'

import './style.sass'

const FullRoster = () => (
    <div>
      <ul>
        {
          PlayerAPI.all().map(p => (
            <li key={p.number}>
              <Link to={`/roster/${p.id}`}>{p.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )