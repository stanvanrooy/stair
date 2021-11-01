import { mergeStyleSets, Spinner, SpinnerSize } from '@fluentui/react'
import React from 'react'

export const FullScreenSpinner = () => {
  const styles = mergeStyleSets({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      "& > div > div.ms-Spinner-circle": {
        width: 102,
        height: 102,
      }
    },
  })

  return <div className={styles.container}>
    <Spinner size={SpinnerSize.large} />
  </div>
}
