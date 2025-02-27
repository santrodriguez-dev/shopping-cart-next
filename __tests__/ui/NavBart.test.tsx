import { expect, test, describe, vi } from 'vitest'
import { act, fireEvent, render, renderHook, screen, } from '@testing-library/react'
import { NavBar } from '@/components';
import { beforeEach } from 'node:test';
import { useUIStore } from '@/store';

describe("NavBar", () => {

  beforeEach(() => {
    vi.clearAllMocks()
  })

  // test("should render menu button", () => {
  //   render(<NavBar />)
  //   expect(screen.getByRole('button', { name: 'Menu' })).toBeDefined()
  // })

  // test("should call toggleSideMenu on menu clicked", () => {
  //   const toggleSideMenu = vi.fn()
  //   render(<NavBar />)
  //   const menuButton = screen.getByRole('button')
  //   fireEvent.click(menuButton)
  //   screen.debug()
  //   // expect(toggleSideMenu).toHaveBeenCalledTimes(1)
  // })

  test('Should change menu option on useUIStore', () => {
    const { result } = renderHook(() => useUIStore(state => state))
    const { isSideMenuOpen, toggleSideMenu } = result.current
    expect(toggleSideMenu).toEqual(expect.any(Function))
    expect(isSideMenuOpen).toBeFalsy()
    act(() => {
      toggleSideMenu()
    })
    expect(result.current.isSideMenuOpen).toBeTruthy()
  })


  test("should render navigation links", () => {
    render(<NavBar />)
    expect(screen.getByRole('link', { name: 'Clothes' })).toBeDefined()
    expect(screen.getByRole('link', { name: 'Shoes' })).toBeDefined()
    expect(screen.getByRole('link', { name: 'Electronics' })).toBeDefined()
    expect(screen.getByRole('link', { name: 'Miscellaneous' })).toBeDefined()
  })

})