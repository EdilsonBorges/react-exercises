import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
        <Family lastName='Eich'>
            <Member name='Brendan' />
            <Member name='John' />
            <Member name='Jordan' />
            <Member name='Grace' />
        </Family>
, document.getElementById('app'))


/*
Brendan Eich
John Resig
Jordan Walke
Grace Murray
 */