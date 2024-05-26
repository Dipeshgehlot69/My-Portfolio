import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../../../src/components/About/About';
import AboutCard from '../../../src/components/About/AboutCard';
import Techstack from '../../../src/components/About/Techstack';
import Toolstack from '../../../src/components/About/Toolstack';
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiTailwindcss,
  SiBootstrap ,
  SiMacos,
} from "react-icons/si";
import Github from '../../../src/components/About/Github';


jest.mock('../Particle', () => () => <div data-testid="particle" />);

describe('About Component', () => {
    test('renders About component with main headings', () => {
      render(<About />);
      expect(screen.getByRole('heading', { name: /Know Who I'M/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /Professional Skillset/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /Tools I use/i })).toBeInTheDocument();
    });
  
    test('renders AboutCard with correct text', () => {
      render(<AboutCard />);
      expect(screen.getByRole('blockquote')).toBeInTheDocument();
      expect(screen.getByText(/Hi Everyone, I am/)).toBeInTheDocument();
      expect(screen.getByText(/Dipesh Gehlot/)).toBeInTheDocument();
      expect(screen.getByText(/Rajasthan, India/)).toBeInTheDocument();
    });

//tech stackkkkkkkkk testinggggggggggg

    test('renders Techstack with correct icons', () => {
      render(<Techstack />);
      const cplusplusIcon = screen.getByTestId('cplusplus-icon');
    expect(cplusplusIcon).toBeInTheDocument();
    expect(screen.queryByTestId('cplusplus-icon')).toContainHTML(
      render(<CgCPlusPlus />).container.innerHTML
  );
    
  // Check for javascript icon
    const javascriptIcon = screen.getByTestId('javascript-icon');
    expect(javascriptIcon).toBeInTheDocument();
    expect(screen.queryByTestId('javascript-icon')).toContainHTML(
      render(<DiJavascript1 />).container.innerHTML
  );
    
  // Check for nodejs icon
    const nodejsIcon = screen.getByTestId('nodejs-icon');
    expect(nodejsIcon).toBeInTheDocument();
    expect(screen.queryByTestId('nodejs-icon')).toContainHTML(
      render(<DiNodejs />).container.innerHTML
  );

  // Check for react icon
    const reactIcon = screen.getByTestId('react-icon');
    expect(reactIcon).toBeInTheDocument();
    expect(screen.queryByTestId('react-icon')).toContainHTML(
      render(<DiReact />).container.innerHTML
  );
    
    // Check for MongoDB icon
    const mongodbIcon = screen.getByTestId('mongodb-icon');
    expect(mongodbIcon).toBeInTheDocument();
    expect(screen.queryByTestId('mongodb-icon')).toContainHTML(
      render(<DiMongodb />).container.innerHTML
  );
    
    // Check for Next.js icon
    const nextjsIcon = screen.getByTestId('nextjs-icon');
    expect(nextjsIcon).toBeInTheDocument();
    expect(screen.queryByTestId('nextjs-icon')).toContainHTML(
      render(<  SiNextdotjs />).container.innerHTML
  );

    // Check for git icon
   const githubIcon = screen.getByTestId('git-icon');
   expect(githubIcon).toBeInTheDocument();
   expect(screen.queryByTestId('git-icon')).toContainHTML(
       render(<DiGit />).container.innerHTML
   );
    
    // Check for PostgreSQL icon
    const postgresqlIcon = screen.getByTestId('postgresql-icon');
    expect(postgresqlIcon).toBeInTheDocument();
    expect(screen.queryByTestId('postgresql-icon')).toContainHTML(
      render(<SiPostgresql />).container.innerHTML
  );
    
    // Check for Python icon
    const pythonIcon = screen.getByTestId('python-icon');
    expect(pythonIcon).toBeInTheDocument();
    expect(screen.queryByTestId('python-icon')).toContainHTML(
      render(<DiPython />).container.innerHTML
  );
    
    // Check for Figma icon
    const figmaIcon = screen.getByTestId('figma-icon');
    expect(figmaIcon).toBeInTheDocument();
    expect(screen.queryByTestId('figma-icon')).toContainHTML(
      render(<FaFigma />).container.innerHTML
  );
    });

      //tech stackkkkkkkkk testinggggggggggg
  

    test('renders Toolstack with correct icons', () => {
      render(<Toolstack />);

      // Check for macos Code icon
      const macosIcon = screen.getByTestId('macos-icon');
    expect(macosIcon).toBeInTheDocument();
    expect(screen.queryByTestId('macos-icon')).toContainHTML(
      render(<SiMacos />).container.innerHTML
  );
   // Check for Visual Studio Code icon
   const vscodeIcon = screen.getByTestId('vscode-icon');
   expect(vscodeIcon).toBeInTheDocument();
   expect(screen.queryByTestId('vscode-icon')).toContainHTML(
    render(<SiVisualstudiocode />).container.innerHTML
);
   
   // Check for Postman icon
   const postmanIcon = screen.getByTestId('postman-icon');
   expect(postmanIcon).toBeInTheDocument();
   expect(screen.queryByTestId('postman-icon')).toContainHTML(
    render(<SiPostman />).container.innerHTML
);
   
   // Check for Tailwind CSS icon
   const tailwindcssIcon = screen.getByTestId('tailwindcss-icon');
   expect(tailwindcssIcon).toBeInTheDocument();
   expect(screen.queryByTestId('tailwindcss-icon')).toContainHTML(
    render(<SiTailwindcss />).container.innerHTML
);
   
   // Check for Bootstrap icon
   const bootstrapIcon = screen.getByTestId('bootstrap-icon');
   expect(bootstrapIcon).toBeInTheDocument();
   expect(screen.queryByTestId('bootstrap-icon')).toContainHTML(
    render(<SiBootstrap />).container.innerHTML
);
    });

  // Check if GitHubCalendar component is present within the Row
    test('renders Github component with calendar', () => {
        render(<Github />);
        const githubCalendar = screen.getByTestId('github-calendar');
        expect(githubCalendar).toBeInTheDocument();
        expect(githubCalendar).toContainHTML('<GitHubCalendar');
      });
  });