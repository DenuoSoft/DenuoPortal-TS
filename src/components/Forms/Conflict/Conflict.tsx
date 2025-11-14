import { useState } from "react";
import { Input } from "../../Input/Input";
import { FormWrap } from "./Conflict.styled";

export const Conflict = () => {
  
  const [searchTerm, setSearchTerm] = useState('');

  const placeholders = [
    'Partner',
    'Fee eraner',
    'Entity',
    'Client'
  ]

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

  return (
    <FormWrap>
      {placeholders.map((placeholder) =>(
        <Input
          key={placeholder}
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder={placeholder}
      />
      ))}
    </FormWrap>
  );
}

export default Conflict;
