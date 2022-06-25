import styled from 'styled-components';

export const SmallCaps = styled.div`
font-size: ${props => props.theme.fontSize.small};
text-transform: lowercase;
font-weight: 700;
font-variant: small-caps;
`

export const FakeSmallCaps = styled.span`
font-size: 80%;
font-weight: 700;
`
