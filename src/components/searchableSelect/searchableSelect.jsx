import Select from 'react-select';

const SearchableSelect = ({ options, onChange, placeholder }) => {
    const customStyles = {
        control: (provided) => ({
          ...provided,
          minHeight: '40px',
          width: '300px',
          borderRadius: "8px"
        }),
        option: (provided) => ({
          ...provided,
          padding: '10px',
        }),
    };
  return (
    <Select
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      isSearchable
      styles={customStyles}
    />
  );
};

export default SearchableSelect;