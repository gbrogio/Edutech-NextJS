// importações
import React from 'react';
import { useRouter } from 'next/router';

import { Container } from './stylesLogo';

// propriedades
interface props {
  fontFamily: {
    inside: string,
    text: {
      top: string,
      bottom: string,
    },
  },
  inside: string,
  description: string
}

const LogoCp: React.FC<props> = ({
  fontFamily, inside, description, children,
}) => {
  const router = useRouter(); // rota/navegação entre paginas.

  return (
    <Container onClick={() => router.reload()}>

      <section className="logo">
        <h1 style={{ fontFamily: `${fontFamily.inside}, sans-serif` }}>{inside}</h1>
      </section>

      <section className="slogan">
        <h2 style={{ fontFamily: `${fontFamily.text.top}, sans-serif` }}>{children}</h2>
        <p style={{ fontFamily: `${fontFamily.text.bottom}, sans-serif` }}>{description}</p>
      </section>
    </Container>
  );
};

export default LogoCp;
