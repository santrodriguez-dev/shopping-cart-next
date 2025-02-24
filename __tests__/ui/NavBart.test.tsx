import { expect, test, describe, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { NavBar } from '@/components';
import { beforeEach } from 'node:test';

describe("NavBar", () => {

  beforeEach(() => {
    vi.clearAllMocks()
  })

  test("should render menu button", () => {
    render(<NavBar />)
    expect(screen.getByRole('button', { name: 'Menu' })).toBeDefined()
  });

  // test("should call toggleSideMenu on menu clicked", () => {
  //   const toggleSideMenu = vi.fn()
  //   render(<NavBar toggleSideMenu={toggleSideMenu} />)
  //   const menuButton = screen.getByRole('button', { name: 'Menu' })
  //   fireEvent.click(menuButton)
  //   expect(toggleSideMenu).toHaveBeenCalledTimes(1)
  // });


  test("should render navigation links", () => {
    render(<NavBar />)
    expect(screen.getByRole('link', { name: 'Clothes' })).toBeDefined()
    expect(screen.getByRole('link', { name: 'Shoes' })).toBeDefined()
    expect(screen.getByRole('link', { name: 'Electronics' })).toBeDefined()
    expect(screen.getByRole('link', { name: 'Miscellaneous' })).toBeDefined()
  })

})