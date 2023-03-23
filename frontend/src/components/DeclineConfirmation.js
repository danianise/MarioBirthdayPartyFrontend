import React from 'react'

function DeclineConfirmation() {
  return (
    <div>
        <h1>Response Confirmed!</h1>
        <h3 style={{color: 'red'}}>(Game Over)</h3>
        <hr />
        <h3>
          If you to change your mind,<br />
          please come back and accept your invitation!
        </h3>
        <a href='/'>
          <button>Back to Invitation</button>
        </a>
    </div>
  )
}

export default DeclineConfirmation