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
import { CounterWithHook } from './components/examples/CounterWithHook';
import { CounterAsClass } from './components/examples/CounterAsClass';
import { CounterWithEffectHook } from './components/examples/CounterWithEffectHook';
import { CounterClassInsteadOfEffect } from './components/examples/CounterClassInsteadOfEffect';
import { CounterWithCustomHook } from './components/examples/CounterWithCustomHook';
import { CounterWithCustomHookWithDebugValue } from './components/examples/CounterWithCustomHookWithDebugValue';

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
            contentEditable={true}
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
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/3-counter-hook.example')}
          />
          <CounterWithHook/>
        </Slide>

        <Slide textColor="textColorLight">
          <CustomText>
            If you used classes in React before, this code should look familiar:
          </CustomText>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="0.7em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/4-counter-class.example')}
          />
          <CounterAsClass/>
        </Slide>

        <Slide textColor="textColorLight">
          <CustomText>
            Declaring multiple state variables
          </CustomText>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="1em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/5-multiple-state-variables.example')}
          />
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={2} textColor="secondary">
            Effect Hook
          </Heading>
        </Slide>

        <Slide textColor="textColorLight">
          <CustomText>
            The Effect Hook lets you perform side effects in function components:
          </CustomText>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="0.7em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/6-counter-with-effect-hook.example')}
          />
          <CounterWithEffectHook/>
        </Slide>

        <Slide textColor="textColorLight">
          <CustomText textSize="40px">
            If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as <Emphasize>componentDidMount</Emphasize>,
            {' '}
            <Emphasize>componentDidUpdate</Emphasize> and <Emphasize>componentWillUnmount</Emphasize> combined.
          </CustomText>
        </Slide>

        <Slide textColor="textColorLight">
          <CustomText>
            Example Using Classes
          </CustomText>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="0.5em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/7-counter-class-instead-of-effect.example')}
          />
          <CounterClassInsteadOfEffect/>
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={2} textColor="secondary">
            Effects with Cleanup
          </Heading>
        </Slide>

        <Slide textColor="textColorLight">
          <CustomText>
            Example Using Classes
          </CustomText>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="0.5em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/8-cleanup-effects-class.example')}
          />
        </Slide>

        <Slide textColor="textColorLight">
          <CustomText>
            Example Using Effect Hook
          </CustomText>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="0.7em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/9-cleanup-effects-hook.example')}
          />
        </Slide>

        <Slide textColor="textColorLight">
          <CustomText>
            It cleans up the previous effects before applying the next effects.
          </CustomText>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="0.8em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/10-cleanup-effects-hook-explanation.example')}
          />
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={2} textColor="secondary">
            Use Multiple Effects to Separate Concerns
          </Heading>
        </Slide>

        <CodeSlide
          transition={[]}
          textSize="0.7em"
          lang="jsx"
          code={require('raw-loader!../assets/code-examples/11-effects-hook-separate-contexts.example')}
          ranges={[
            { loc: [0, 0], title: 'Multiple Effects to Separate Concerns' },
            { loc: [1, 5] },
            { loc: [6, 17] },
          ]}
          align="flex-start flex-start"
        />

        <CodeSlide
          transition={[]}
          textSize="0.7em"
          lang="jsx"
          code={require('raw-loader!../assets/code-examples/12-effects-hook-optimize-performance.example')}
          ranges={[
            { loc: [0, 0], title: 'Optimizing Performance by Skipping Effects' },
            { loc: [0, 5] },
            { loc: [6, 9] },
            { loc: [10, 20] },
            { loc: [21, 30] },
          ]}
          align="flex-start flex-start"
        />

        <Slide textColor="textColorLight">
          <Heading size={2} textColor="secondary">
            What's happening under the hood?
          </Heading>
        </Slide>

        <Slide textColor="textColorLight">
          <CustomText>
            React hook makes use of hidden state of a component, it's stored inside a <Link href="https://github.com/acdlite/react-fiber-architecture#what-is-a-fiber">fiber</Link>, a fiber is an entity that corresponds to component instance
            {' '}
            (in a broader sense, because functional components don't create instances as class components).
          </CustomText>
          <Margin top="30px"/>
          <CustomText>
            It's React renderer that gives a hook the access to respective context, state, etc. and incidentally, it's React renderer that calls component function.
            {' '}
            So it can associate component instance with hook functions that are called inside of component function.
          </CustomText>
        </Slide>

        <Slide textColor="textColorLight" style={{ marginTop: '-100px' }}>
          <CustomText>
            This snippet explains how it works
          </CustomText>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="0.6em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/13-hooks-under-the-hood.example')}
          />
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={2} textColor="secondary">
            Rules of Hooks
          </Heading>
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={5} textColor="secondary">
            1. Only Call Hooks at the Top Level
          </Heading>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="0.9em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/14-rules-of-hooks.example')}
          />
        </Slide>

        <Slide textColor="textColorLight">
          <CustomText>
            So how does React know which state corresponds to which useState call? The answer is that React relies on the order in which Hooks are called.
          </CustomText>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="0.9em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/15-rules-of-hooks.example')}
          />
        </Slide>

        <Slide textColor="textColorLight">
          <CustomText>
            As long as the order of the Hook calls is the same between renders, React can associate some local state with each of them. But what happens if we put a Hook call (for example, the <Emphasize>persistForm</Emphasize> effect) inside a condition?
          </CustomText>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="0.9em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/16-rules-of-hooks.example')}
          />
        </Slide>

        <Slide textColor="textColorLight">
          <CustomText>
            Every next Hook call after the one we skipped would also shift by one, leading to bugs.
          </CustomText>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="0.9em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/17-rules-of-hooks.example')}
          />
        </Slide>

        <Slide textColor="textColorLight">
          <CustomText>
            This is why Hooks must be called on the top level of our components.
          </CustomText>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="0.9em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/18-rules-of-hooks.example')}
          />
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={5} textColor="secondary">
            2. Only Call Hooks from React Functions
          </Heading>
          <CustomText>Don’t call Hooks from regular JavaScript functions. Instead, you can:</CustomText>
          <List>
            <ListItem>✅ Call Hooks from React function components</ListItem>
            <ListItem>✅ Call Hooks from custom Hooks</ListItem>
          </List>
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={2} textColor="secondary">
            Building Your Own Hooks
          </Heading>
        </Slide>

        <CodeSlide
          transition={[]}
          textSize="0.8em"
          lang="jsx"
          code={require('raw-loader!../assets/code-examples/19-building-your-own-hooks.example')}
          ranges={[
            { loc: [0, 0], title: 'useCounter( ) custom hook' },
            { loc: [3, 11] },
            { loc: [12, 25] },
          ]}
          align="flex-start flex-start"
        />

        <Slide textColor="textColorLight">
          <CodePane
            lang="jsx"
            textSize="1em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/20-building-your-own-hooks.example')}
          />
          <CounterWithCustomHook/>
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={2} textColor="secondary">
            Other hooks
          </Heading>
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={2} textColor="secondary">
            Basic Hooks
          </Heading>
          <List textColor="textColorLight" style={{ listStyleType: 'none' }}>
            <ListItem><Link href="https://reactjs.org/docs/hooks-reference.html#usestate"><code>useState()</code></Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/hooks-reference.html#useeffect"><code>useEffect()</code></Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/hooks-reference.html#usecontext"><code>useContext()</code></Link></ListItem>
          </List>
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={2} textColor="secondary">
            Additional Hooks
          </Heading>
          <List textColor="textColorLight" style={{ listStyleType: 'none' }}>
            <ListItem><Link href="https://reactjs.org/docs/hooks-reference.html#usereducer"><code>useReducer()</code></Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/hooks-reference.html#usecallback"><code>useCallback()</code></Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/hooks-reference.html#usememo"><code>useMemo()</code></Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/hooks-reference.html#useref"><code>useRef()</code></Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/hooks-reference.html#useimperativehandle"><code>useImperativeHandle()</code></Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/hooks-reference.html#uselayouteffect"><code>useLayoutEffect()</code></Link></ListItem>
            <ListItem><Link href="https://reactjs.org/docs/hooks-reference.html#usedebugvalue"><code>useDebugValue()</code></Link></ListItem>
          </List>
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={4} textColor="secondary">
            useContext( )
          </Heading>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="1em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/21-use-context.example')}
          />
        </Slide>

        <Slide textColor="textColorLight" style={{ marginTop: '-100px' }}>
          <Heading size={4} textColor="secondary">
            useReducer( )
          </Heading>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="0.8em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/22-use-reducer.example')}
          />
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={4} textColor="secondary">
            useCallback( )
          </Heading>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="1em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/23-use-callback.example')}
          />
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={4} textColor="secondary">
            useMemo( )
          </Heading>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="1em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/24-use-memo.example')}
          />
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={4} textColor="secondary">
            useRef( )
          </Heading>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="1em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/25-use-ref.example')}
          />
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={4} textColor="secondary">
            useImperativeHandle( )
          </Heading>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="1em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/26-use-imperative-handle.example')}
          />
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={4} textColor="secondary">
            useLayoutEffect( )
          </Heading>
          <CustomText>
            The signature is identical to <Emphasize>useEffect</Emphasize>, but it fires synchronously after all DOM mutations.
          </CustomText>
          <CustomText>
            Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside <Emphasize>useLayoutEffect</Emphasize> will be flushed synchronously, before the browser has a chance to paint.
          </CustomText>
          <CustomText>
            Prefer the standard <Emphasize>useEffect</Emphasize> when possible to avoid blocking visual updates.
          </CustomText>
        </Slide>

        <Slide textColor="textColorLight">
          <Heading size={4} textColor="secondary">
            useDebugValue( )
          </Heading>
          <Margin/>
          <CodePane
            lang="jsx"
            textSize="1em"
            contentEditable={true}
            source={require('raw-loader!../assets/code-examples/27-use-debug-value.example')}
          />
          <CounterWithCustomHookWithDebugValue/>
        </Slide>

      </Deck>
    );
  }
}
