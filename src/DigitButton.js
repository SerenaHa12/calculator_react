import React from 'react'

export default function DigitButton({dispatch, digit}) {
    return <button onclick = {() => dispatch}>{digit}</button>
}
