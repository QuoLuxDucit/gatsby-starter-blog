import React from 'react';

import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import theme from '../theme';


const GlobalStyle = createGlobalStyle`
::selection {
  background: #c9ecff;
}
::-moz-selection {
  background: #c9ecff;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
  font-family: 'Inter', sans-serif;
  text-rendering: optimizeLegibility;
  line-height: 1.4;
}

body {
  background: #ffffff;
  color: #3a343a;
  font-size: 18px;
  text-rendering: optimizeLegibility;
}

a {
  outline: none;
  text-decoration: none;
  color: inherit;
}

p a, figcaption a {
  border-bottom: 1px solid ${props => props.theme.colors.border};
}

table {
  margin: 0 auto;
}

.gatsby-resp-image-link {
  border-bottom: none;
}


h1 {
  font-size: 230%;
  line-height: 1.2;
  margin-bottom: 0.2em;
}

p {
  margin-top: 1.4rem;
  margin-bottom: 1.4rem;
}

blockquote {
  font-style: italic;
  border-left: 2px solid #2E3440;
  padding-left: 1.4rem;
  margin-left: -1.4rem;
}

li {
  margin-bottom: 0.7rem;
  padding-left: 1.4rem;
}

ul, ol {
  padding-left: 1.4rem;
}

hr {
  border-top: none;
  border-bottom: 1px solid black;
}

.gatsby-highlight {
    box-shadow: ${props => props.theme.shadow};
    font-family: 'Iosevka Web', 'monospace';
    font-size:90%;
    background-color: #2e3440;
    margin: 1em 0;
    padding: 1em;
    overflow: auto;
}

.gatsby pre, .gatsby pre code {
    font-family: 'Iosevka Web', 'monospace';
}

.gatsby-highlight pre[class*="language-"] {
 background-color: transparent;
 margin: 0;
 padding: 0;
 overflow: initial;
 float: left; /* 1 */
 min-width: 100%; /* 2 */
}

.gatsby-video-aspect-ratio {
    box-shadow: ${props => props.theme.shadow};
    margin: 1em 0;
}

.gatsby-resp-image-wrapper {
    max-width: none !important;
}

img[src$=gif] {
    background-color: #2E333F;
    box-shadow: ${props => props.theme.shadow};
    width: 100%;
}

img[src$="svg"] {
  width: 100%;
}

#disqus_thread {
  position: relative;
}

#disqus_thread::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 55px;
    background: #ffffff;
}

kbd {
  font-size: 90%;
  font-family: 'Iosevka Web', 'monospace';
  padding: .05em .4em;
  border-radius: 3px;
  border: 1px solid gray;
  background: #ECEFF4;
}

figure figcaption {
  padding: 0.7em 1.4em;
  font-size: ${props => props.theme.fontSize.small};
  background: #ECEFF4;
}

`;


const Footer = styled.footer`
  padding: 1em;
  color: #d8dee9;
  text-align: center;
  max-width: 648px;
  margin: 0 auto;
  font-size: ${props => props.theme.fontSize.small};
`;

class Layout extends React.Component {
  render() {
    const {children} = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <div css={`min-height: 100vh; display: flex; flex-direction: column;`}>
          <div css={`flex-grow: 1`}>{children}</div>
          <Footer>
            © {new Date().getFullYear()} All rights reserved.
          </Footer>
        </div>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Layout;
