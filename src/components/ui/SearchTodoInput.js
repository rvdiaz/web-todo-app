import React from 'react'

export const SearchTodoInput = () => {
    const [value, setvalue] = useState('');
    return (
      <InputBox
        placeholder="Search"
        valueInput={value}
        handlerInput={setvalue}
    />
    )
}
