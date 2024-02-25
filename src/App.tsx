import React from 'react';
import { FC, useCallback, useState, createContext } from 'react';
//import './i18n';
import i18n from './i18/i18n.js';
import { AComp } from './comp/AComp';
import { TComp } from './comp/TComp';
import TCompHOC from './comp/TCompHOC';
import { FCComp } from './comp/FCComp';
import { Card } from './comp/Card';
import { Cart } from './comp/Cart';
import { ChartWrap } from './comp/ChartWrap';
import { BarPlotWrap } from './comp/BarPlotWrap';
import { Sidebar } from './comp/Sidebar';
import { dataXY, dataNameVal1, dataNameVal2 } from './res/data';

//http://cheatsheets.shecodes.io/react
import { UsrAvatar } from './comp/UsrAvatar';

import './style.css';

const LineChartContext = createContext();
const BarPlotContext = createContext();

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

export const App: FC<{ name: string }> = ({ name }) => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const toggleSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  const [avatar, setAvatar] = React.useState('');
  const [avatars, setAvatars] = React.useState(['Messi', 'Ronaldo', 'Laspada']);

  function handleChangeInput(event) {
    setAvatar(event.target.value);
  }
  function handleAddAvatar() {
    setAvatars(avatars.concat(avatar));
  }
  const handleRemoveAvatar = useCallback(
    (avatar) => {
      setAvatars(avatars.filter((a) => a !== avatar));
    },
    [avatars]
  );

  return (
    <div>
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        title="side2bar"
      />
      <header>
        <h1>Hello {name}!</h1>
        <h2 onClick={() => changeLanguage('en')}>English</h2>
        <h2 onClick={() => changeLanguage('zhHK')}>Trad. Chinese</h2>
        <h2 onClick={() => changeLanguage('zhCN')}>Simp. Chinese</h2>
        <time datetime="2023-12-29">
          Friday, 29<sup>th</sup> Decemeber 2023
        </time>
        {/*<LineChart data={dataXY} width={300} height={200} />*/}
        <Cart />
        <LineChartContext.Provider value={dataXY}>
          <ChartWrap data={dataXY}/>
        </LineChartContext.Provider>
        {/* pass multi. val. need  2 layers of brackets 
        https://stackoverflow.com/questions/57840535/passing-multiple-value-and-setter-pairs-to-context-provider-in-react
        */}
        <BarPlotContext.Provider value={{dataNameVal1, dataNameVal2}}>
          <BarPlotWrap data1={dataNameVal1} data2={dataNameVal2}/>
        </BarPlotContext.Provider>
      </header>
      <cardframe>
        <Card
          title="Ace"
          subtitle="sAce"
          text="Ace cardo is the first card. Often, this card is hidden from the players.  And you should find it out by chance."
          url_label="Find out here"
          url="#"
          css_class="poker_spade_ace"
        />
        <card class="meeru-island">
          <div>
            <h2>Javascript & React</h2>
            <p>
              The 2 languages are of importance in this and coming decade and we
              will look for students who endeavour to learn these programming
              languages
            </p>
            <a href="#">Learn more</a>
          </div>
        </card>
        <card class="flamingo-beech">
          <div>
            <h2>Javascript & React</h2>
            <p>The 2 languages are of importance in this and coming decade</p>
            <a href="#">Learn more</a>
          </div>
        </card>
        <card class="protur-safari">
          <div>
            <h2>Javascript & React</h2>
            <p>The 2 languages are of importance in this and coming decade</p>
            <a href="#">Learn more</a>
          </div>
        </card>
        <card class="mountain-view">
          <div>
            <h2>Javascript & React</h2>
            <p>The 2 languages are of importance in this and coming decade</p>
            <a href="#">Learn more</a>
          </div>
        </card>
      </cardframe>
      <main>
        <articlea>
          <blockquote>Start editing to see some magic happen :)</blockquote>
          <ul>
            <li>
              Figure 4.2 shows our starting point. The styles applied to the
              HTML are the defaults provided by the browser. No author styles
              have been applied to the page yet.
            </li>
            <li>
              Figure 4.2 shows our starting point. The styles applied to the
              HTML are the defaults provided by the browser. No author styles
              have been applied to the page yet.
            </li>
            <li>
              Figure 4.2 shows our starting point. The styles applied to the
              HTML are the defaults provided by the browser. No author styles
              have been applied to the page yet.
            </li>
          </ul>

          <p>
            Figure 4.2 shows our starting point. The styles applied to the HTML
            are the defaults provided by the browser. No author styles have been
            applied to the page yet.
          </p>
          <p>
            Figure 4.2 shows our starting point. The styles applied to the HTML
            are the defaults provided by the browser. No author styles have been
            applied to the page yet.
          </p>
          <p>
            Figure 4.2 shows our starting point. The styles applied to the HTML
            are the defaults provided by the browser. No author styles have been
            applied to the page yet.
          </p>
          <p>
            Figure 4.2 shows our starting point. The styles applied to the HTML
            are the defaults provided by the browser. No author styles have been
            applied to the page yet.
          </p>
        </articlea>
        <AComp name="formulate" />
        <FCComp message="a component message..." />
        <TComp />
        <TCompHOC />
        <UsrAvatar name="avatarIgI" />
        {avatars.map((avatar) => (
          <li key={avatar} onClick={() => handleRemoveAvatar(avatar)}>
            {avatar}
          </li>
        ))}
      </main>
    </div>
  );
};
