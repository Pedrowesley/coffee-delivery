import styled from 'styled-components'

import backgroundHomeIntro from '../../assets/background-home-intro.svg'

export const ContainerHome = styled.div`
  background: url(${backgroundHomeIntro});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: calc(100vh - 6.5rem);

  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  justify-content: center;

  padding: 5.75rem 10rem;

  > img {
    width: 476px;
    height: 360px;
  }
`

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 3rem;
  line-height: 3.8rem;
  color: ${(props) => props.theme['base-title']};
  margin-bottom: 1rem;
`

export const Subtitle = styled.h4`
  font-size: 1.19rem;
  line-height: 1.62rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: 400;
  font-stretch: 100;
  white-space: nowrap;
`

export const ListFeatures = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 0;
  margin-top: 5rem;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    line-height: 1.32rem;
  }
`
const CYCLE_COLORS = {
  orange: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface CycleWithIconProps {
  bgColor: keyof typeof CYCLE_COLORS
}

export const CycleWithIcon = styled.span<CycleWithIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${(props) => props.theme[CYCLE_COLORS[props.bgColor]]};
  color: ${(props) => props.theme.background};
`
