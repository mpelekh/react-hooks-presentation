// Import React
import React from 'react';

// Import Spectacle Core tags
import {BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text, CodePane, Fit, Fill, Image, Layout } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

// Import Components
import { ReactLogo } from './components/ReactLogo';
import { CustomText } from './components/CustomText';
import { Margin } from './components/Margin';
import { CustomLink as Link } from './components/CustomLink';
import { Emphasize } from './components/Emphasize';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme({
  primary: '#282c34',
  secondary: '#61dafb',
  textColorLight: '#ffffff',
  textColorDark: '#778899',
  linkColor: "#4682b4"
});

const images = {

};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'fade', 'slide', 'spin']} transitionDuration={500} theme={theme} contentWidth={1200}>
        <Slide>
          <ReactLogo />
          <Heading size={1} textColor="secondary">
            React Hooks
          </Heading>
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={2} textColor="secondary">
            Agenda
          </Heading>
          <List>
            <ListItem>item</ListItem>
          </List>
        </Slide>

      </Deck>
    );
  }
}
