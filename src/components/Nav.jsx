import React from 'react'
import StaggeredMenu from '../templates/StaggeredMenu';

const menuItems = [
  { label: 'Skills', ariaLabel: 'Go to home page', link: '#skills' },
  { label: 'Education', ariaLabel: 'Learn about us', link: '#education' },
  { label: 'Projects', ariaLabel: 'View our services', link: '#projects' },
  { label: 'Certifications', ariaLabel: 'Get in touch', link: '#certifications' }
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/iamthighs' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/iamthighs/' },
    { label: 'Instagram', link: 'https://www.instagram.com/direct/t/106855870712537/' }
];

export default function Nav(){
  return (
    <div>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#6d06f2"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        isFixed={true}
        colors={['#B19EEF', '#5227FF']}
        logoUrl="/assets/img/tys-logo-512x512.png"
        accentColor="#6d06f2"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
    </div>
  )
}
