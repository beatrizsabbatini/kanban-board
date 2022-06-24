import { render } from '@testing-library/react'
import { ThemeContext, ThemeProvider } from 'styled-components'

import Badge from '.'
import ICategory from '../../interfaces/ICategory'
import lightTheme from '../../styles/themes/light'

test('badge renders correctly', () => {
  const { debug } = render(
    <ThemeProvider theme={lightTheme}>
      <Badge category={ICategory.BUG}/>
    </ThemeProvider>
  )

  // eslint-disable-next-line testing-library/no-debugging-utils
  debug()
})

