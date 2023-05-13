import React from 'react'

export default function FoundedIn() {

    const styles = {
        header: {
          backgroundImage: `url('picture.jpg')`,
          height: '100vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        },
    
        content: {
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }
      }

  return (
    <>
    <div className='container'  style={styles.header}>
      <h1  style={styles.content}>Hello</h1>
    </div>
      </>
  )
}
