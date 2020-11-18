import { renderHook } from '@testing-library/react-hooks'

import useLocation from './useLocation'

const mockData = {
  location: {
    title: 'London'
  }
}

beforeEach(() => {
  // @ts-ignore
  fetch.resetMocks()
})

describe('useLocation hook', () => {
  it('should show loading state', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(JSON.stringify(mockData))
    const { result, waitForNextUpdate } = renderHook(() =>
      useLocation('london')
    )

    expect(result.current.loading).toBe(true)
    await waitForNextUpdate()
  })

  it('hide loading when have data', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(JSON.stringify(mockData))

    const { result, waitForNextUpdate } = renderHook(() =>
      useLocation('london')
    )

    expect(result.current.loading).toBe(true)

    await waitForNextUpdate()
    expect(result.current.loading).toBe(false)
    expect(result.current.data?.title).toBe('London')
  })
})
