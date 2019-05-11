// Import React
import React from 'react';

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text, CodePane, Fit, Fill, Image, Layout } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

// Import Components
import { ReactLogo } from './components/ReactLogo';
import { CustomText } from './components/CustomText';
import { Margin } from './components/Margin';
import { CustomLink as Link } from './components/CustomLink';
import { Emphasize } from './components/Emphasize';

// Import Example Components
import { Counter } from './components/examples/Counter';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme({
  primary: '#282c34',
  secondary: '#61dafb',
  textColorLight: '#ffffff',
  textColorDark: '#778899',
  linkColor: '#4682b4'
});

const images = {
  hocHell: require('../assets/images/hoc-hell.png')
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
            <ListItem>Existing Problems</ListItem>
            <ListItem>Hooks Introduction</ListItem>
          </List>
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={1} textColor="secondary">
            Why do we need something new?
          </Heading>
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={2} textColor="secondary">
            Reusing logic
          </Heading>
          <List>
            <ListItem>render props</ListItem>
            <ListItem>HOC</ListItem>
          </List>
        </Slide>

        <Slide textColor="textColorLight">
          <Image src={images.hocHell} />
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={2} textColor="secondary">
            Huge Components
          </Heading>
        </Slide>

        <Slide textColor="textColorLight">
          <CodePane
            lang="jsx"
            textSize="0.9em"
            source={require('raw-loader!../assets/code-examples/2-component-as-class.example')}
          />
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={2} textColor="secondary">
            Confusing classes
          </Heading>
          <Margin/>
          <List>
            <ListItem>hard for humans</ListItem>
            <ListItem>hard for machines</ListItem>
          </List>
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={4} textColor="textColorLight">
            React doesn't provide a <Emphasize>stateful primitive</Emphasize> simpler than a <Emphasize>class component</Emphasize>.
          </Heading>
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={1} textColor="secondary">
            React Hooks
          </Heading>
        </Slide>

        <Slide textColor="textColorLight">
          <CustomText textSize="60px" textAlign="center">
            <Emphasize>Hooks</Emphasize> are a new addition in React 16.8.
          </CustomText>
          <CustomText textAlign="center">
            They let you use state and other React features without writing a class.
          </CustomText>
          <Margin />
          <CodePane
            lang="jsx"
            textSize="1em"
            source={require('raw-loader!../assets/code-examples/1-hook.example')}
          />
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={2} textColor="secondary">
            State Hook
          </Heading>
        </Slide>

        <Slide textColor="textColorLight">
          <CustomText>
            This example renders a counter. When you click the button, it increments the value:
          </CustomText>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="0.9em"
            source={require('raw-loader!../assets/code-examples/3-counter-hook.example')}
          />
          <Counter/>
        </Slide>
      </Deck>
    );
  }
}
