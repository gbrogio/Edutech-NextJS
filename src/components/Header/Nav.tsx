const slug = [
  '/',
  '/courses',
  '/about',
]

export const Nav = (pathname, LinkCp, tab) => (
  <nav className="linkContainer" tabIndex={tab} role="menu" style={{display: 'flex'}}>
    <LinkCp
      hRef={slug[0]}
      iD={{
        get: 'linkComp',
        lid: 'home',
      }}
      tabIndex={tab}
      isActive={
        pathname === slug[0]
      }
      isInternal={
        pathname === slug[0]
      }
    >
      Início
    </LinkCp>

    <LinkCp
      hRef={slug[1]}
      iD={{
        get: 'linkComp',
        lid: 'courses',
      }}
      tabIndex={tab}
      isActive={
        pathname === slug[1]
      }
      isInternal={
        pathname === slug[1]
      }
    >
      Todos os Cursos
    </LinkCp>

    <LinkCp
      hRef={slug[2]}
      iD={{
        get: 'linkComp',
        lid: 'about',
      }}
      tabIndex={tab}
      isActive={
        pathname === slug[2]
      }
      isInternal={
        pathname === slug[2]
      }
    >
      Sobre o Site
    </LinkCp>
  </nav>
);
export const navLeft = (verifyTabIndex, LinkCp) => (
  <>
    {/* <LinkCp // Não foi possivel encontrar os cursos para as séries abaixo
      tabIndex={verifyTabIndex}
      hRef="/courses?=6+ano"
      ariaLabel="1 de 7,"
      iD={{
        get: 'noUnder',
        lid: '6ano',
      }}
      isActive={
        false
      }
      isInternal={
        false
      }
    >
      6º ano
    </LinkCp>

    <LinkCp
      tabIndex={verifyTabIndex}
      hRef="/courses?=7+ano"
      ariaLabel="2 de 7,"
      iD={{
        get: 'noUnder',
        lid: '7ano',
      }}
      isActive={
        false
      }
      isInternal={
        false
      }
    >
      7º ano
    </LinkCp>

    <LinkCp
      tabIndex={verifyTabIndex}
      hRef="/courses?=8+ano"
      ariaLabel="3 de 7,"
      iD={{
        get: 'noUnder',
        lid: '8ano',
      }}
      isActive={
        false
      }
      isInternal={
        false
      }
    >
      8º ano
    </LinkCp>

    <LinkCp
      tabIndex={verifyTabIndex}
      hRef="/courses?=9+ano"
      ariaLabel="4 de 7,"
      iD={{
        get: 'noUnder',
        lid: '9ano',
      }}
      isActive={
        false
      }
      isInternal={
        false
      }
    >
      9º ano
    </LinkCp> */}

    <LinkCp
      tabIndex={verifyTabIndex}
      hRef="/courses?=1+ano+ensino+medio"
      ariaLabel="1 de 1,"
      iD={{
        get: 'noUnder',
        lid: '1anoEM',
      }}
      isActive={
        false
      }
      isInternal={
        false
      }
    >
      1º ano - Ensino Médio
    </LinkCp>

    {/* <LinkCp // Não foi possivel encontrar os cursos para as séries abaixo
      tabIndex={verifyTabIndex}
      hRef="/courses?=2+ano+ensino+medio"
      ariaLabel="6 de 7,"
      iD={{
        get: 'noUnder',
        lid: '2anoEM',
      }}
      isActive={
        false
      }
      isInternal={
        false
      }
    >
      2º ano - Ensino Médio
    </LinkCp>

    <LinkCp
      tabIndex={verifyTabIndex}
      ariaLabel="7 de 7,"
      hRef="/courses?=3+ano+ensino+medio"
      iD={{
        get: 'noUnder',
        lid: '3anoEM',
      }}
      isActive={
        false
      }
      isInternal={
        false
      }
    >
      3º ano - Ensino Médio
    </LinkCp> */}
  </>
);
