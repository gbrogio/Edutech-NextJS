// importações
import React, { useEffect } from 'react';

import { SearchIcon, ArrowDown } from 'styles/components/Icons';
import { Container, Input } from './styleInputs';

// propriedades
export interface inputProps {
  inputType: 'text' | 'select' | 'search';
  textOptions?: {
    iD: string;
    onChange: (ev: any) => void;
    placeholder: string;
    hasIcon: 'search' | 'arrowDown';
    error: 'alertFunc' | 'msgModal';
  }
}

// componente
const InputCp: React.FC<inputProps> = ({
  inputType, textOptions //  recebendo propriedades
}) => {
  return (
    <Container>
      {inputType === 'search' ? <>
        <div className="searchBar">
          <Input
            type={inputType}
            id={textOptions.iD}
            onChange={textOptions.onChange}
            placeholder={textOptions.placeholder}
          />
          <SearchIcon />
        </div>
      </>: <></>}

    </Container>
  );
};

export default InputCp;
