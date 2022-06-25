import React from 'react';
import styled from 'styled-components';
import profilepic from '../../content/assets/profile-pic.jpg';

const BioDiv = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: 1em;
  font-size: ${props => props.theme.fontSize.small};
`;

const Text = styled.div`
  padding-left: 1em;
  flex-grow: 0;
`;

function Bio() {
  return (
    <BioDiv>
      <img
        alt='me'
        src={profilepic}
        width={50}
        height={50}
        css={`
          flex-shrink: 0;
          border-radius: 50%
        `}
      />
      <Text>
        Written by <strong>Gilles Castel</strong>, who lives in Belgium, currently pursuing
        a PhD in pure mathematics at the university of Leuven.
      </Text>
    </BioDiv>
  );
}

export default Bio;
