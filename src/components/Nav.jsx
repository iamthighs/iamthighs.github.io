import React from 'react'
import StaggeredMenu from '../templates/StaggeredMenu';
import { menuItems, socialItems } from '../data/nav';


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
        colors={['#B19EEF', '#6d06f2']}
        logoUrl="/assets/img/tys-logo-512x512.png"
        accentColor="#6d06f2"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
    </div>
  )
}
