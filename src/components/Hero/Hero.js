import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hello! My name is Miguel and I've been programming a couple of years now.
        Here is some of my history.
      </SectionText>
      <Button onClick={() => window.location = "https://github.com/IS727312"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;