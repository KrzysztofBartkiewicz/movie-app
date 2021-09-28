import { FC } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  StyledSearchBox,
  StyledSubmitButton,
  StyledTextInput,
} from './StyledSearchBox';

type SearchBoxProps = {
  placeholder: string;
  value: string;
  onSubmit: () => void;
  onChange: () => void;
};

const SearchBox: FC<SearchBoxProps> = ({
  placeholder,
  value,
  onSubmit,
  onChange,
}) => {
  return (
    <StyledSearchBox onSubmit={onSubmit}>
      <StyledTextInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <StyledSubmitButton type="submit">
        <FontAwesomeIcon icon={faSearch} size="2x" color="#FFF" />
      </StyledSubmitButton>
    </StyledSearchBox>
  );
};

export default SearchBox;
