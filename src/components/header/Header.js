import React, { useContext } from 'react';
import Headroom from 'react-headroom';
import './Header.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import StyleContext from '../../contexts/StyleContext';
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
} from '../../portfolio';

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <Headroom>
      <header className={isDark ? 'dark-menu header' : 'header'}>
        <a href="" className="logo">
          
          <div class="header">
  <img src="https://m.iphoto.net/STd2d.png" alt="logo" />
</div>
          
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: 'white' }}
        >
          <span className={isDark ? 'navicon navicon-dark' : 'navicon'}></span>
        </label>
        <ul className={isDark ? 'dark-menu menu' : 'menu'}>
          {viewSkills && (
            <li>
              <a href="#skills">Sobre</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          <li>
            <a href="#contact">Contato</a>
          </li>
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
