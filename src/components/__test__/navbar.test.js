import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../../../src/components/Navbar';

describe('NavBar Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
  });

  
  // Check the brand icon 
  test('renders logo correctly', () => {
    const logo = screen.getByAltText('brand');
    expect(logo).toBeInTheDocument();
  });

   // Check the home link
  test('renders Home link correctly', () => {
    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')?.getAttribute('href')).toBe('/');
  });

   // Check the about link
  test('renders About link correctly', () => {
    const aboutLink = screen.getByText(/about/i);
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink.closest('a')?.getAttribute('href')).toBe('/about');
  });

   // Check the projects link
  test('renders Projects link correctly', () => {
    const projectsLink = screen.getByText(/projects/i);
    expect(projectsLink).toBeInTheDocument();
    expect(projectsLink.closest('a')?.getAttribute('href')).toBe('/project');
  });

   // Check the resume link
  test('renders Resume link correctly', () => {
    const resumeLink = screen.getByText(/resume/i);
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink.closest('a')?.getAttribute('href')).toBe('/resume');
  });

  
   // Check the github link and attributes
  test('renders GitHub fork button correctly', () => {
     const forkButton = screen.getByTestId('fork-button');
  expect(forkButton).toBeInTheDocument();

  expect(forkButton.getAttribute('href')).toBe('https://github.com/Dipeshgehlot69');
  expect(forkButton.getAttribute('target')).toBe('_blank');
  });


//navbar scroll color change check
  test('navbar changes color on scroll', () => {
    
    const navbar = document.querySelector('.navbar');
    expect(navbar).not.toHaveClass('sticky');

    // Simulate scroll
    fireEvent.scroll(window, { target: { scrollY: 30 } });
    expect(navbar?.classList).toContain('sticky');

    // Reset scroll
    fireEvent.scroll(window, { target: { scrollY: 10 } });
    expect(navbar?.classList).not.toContain('sticky');
  });
});
