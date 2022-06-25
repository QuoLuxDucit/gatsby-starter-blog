import React from 'react';

import PageLayout from '../components/PageLayout';
import SEO from '../components/seo';

import styled from 'styled-components';

const Label = styled.label`
  font-size: ${props => props.theme.fontSize.small};
  text-transform: lowercase;
  font-weight: 700;
  font-variant: small-caps;
  margin-top: 1em;
  display: block;
`

const Button = styled.button`
  font-size: ${props => props.theme.fontSize.small};
  text-transform: lowercase;
  font-weight: 700;
  font-variant: small-caps;
  background: transparent;
  margin-top: 1em;
  padding: 0.5em 1em;
  border: 1px solid black;
  cursor: pointer;
  :hover {
    background: rgba(0, 0, 0, 0.05);
  }
`

class NotFoundPage extends React.Component {
  render() {
    return (
      <PageLayout>
        <SEO title="Contact me" />
        <div css={`
        input, textarea {
          padding: 0.5em;
          border: 1px solid black;
          outline: none;
          font: inherit;
          font-size: 70%;
        }

        textarea {
          width: 100%;
          height: 20em
        }

        `}>
          <h1>Contact</h1>
          <form name="contact" action="/success" netlify-honeypot="bot-field" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <Label htmlFor="name">Name</Label>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <input type="email" name="email" id="email" />
            </div>
            <p css={`display: none`}>
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <div>

              <Label htmlFor='message'>Message</Label>
              <div>
                <textarea name="message" id='message' />
              </div>
            </div>
            <div>
              <Button type="submit">Send</Button>
            </div>
          </form>
        </div>
      </PageLayout>
    );
  }
}

export default NotFoundPage;
