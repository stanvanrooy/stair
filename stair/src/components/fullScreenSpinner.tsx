import { mergeStyleSets, Spinner, SpinnerSize } from '@fluentui/react'
import React from 'react'

export const FullScreenSpinner = () => {
  const styles = mergeStyleSets({
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100vh',
      "& > div > div.ms-Spinner-circle": {
        width: 158,
        height: 158,
      }
    },
  })

  return <div className={styles.container}>
    <Spinner size={SpinnerSize.large} />
    <h1>Finding the best flights for you.</h1>
  </div>
}
