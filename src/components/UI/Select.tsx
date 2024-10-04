import React, { CSSProperties } from 'react';
import Select, {
  GroupBase,
  OptionProps,
  Props,
  SingleValueProps,
  components,
} from 'react-select';

interface IOptionType {
  value: string;
  label: string;
}

interface ISelectField
  extends Props<IOptionType, false, GroupBase<IOptionType>> {
  className?: string;
  showLabelInInput?: boolean;
  label?: string;
  customStyles?: CSSProperties;
}

const CustomSingleValue = (
  props: SingleValueProps<IOptionType, false, GroupBase<IOptionType>>
) => {
  const { data, selectProps } = props;

  const { showLabelInInput, label } = selectProps as ISelectField;

  return (
    <components.SingleValue {...props}>
      {showLabelInInput ? `${label} : ${data.label}` : data.label}
    </components.SingleValue>
  );
};

const selectStyles: Partial<any> = {
  control: (_provided: CSSProperties, state: any) => {
    return {
      background: state.selectProps.searchModule
        ? '#052354'
        : state['isDisabled']
          ? '#e9ecef'
          : '#fff',
      color: '#9ca3af',
      display: 'flex',
      width: '100%',
      height: 'auto',
      padding: '0.3rem 0.75rem',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.4,
      zIndex: 1200,
      verticalAlign: 'middle',
      border: 'none',
      appearance: 'none',
      minHeight: 'auto',
      borderRadius: '0.375rem',
      whiteSpace: 'nowrap',
      ...state.selectProps.customStyles,
    };
  },
  dropdownIndicator: (provided: CSSProperties) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    minHeight: 'auto',
    padding: '0',
  }),
  indicatorsContainer: (provided: CSSProperties) => ({
    ...provided,
  }),
  indicatorSeparator: (provided: CSSProperties) => ({
    ...provided,
    display: 'none',
  }),
  clearIndicator: (provided: CSSProperties) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    minHeight: 'auto',
    padding: '2px',
    svg: {
      fill: '#f44336 !important',
    },
  }),
  loadingIndicator: (provided: CSSProperties) => ({
    ...provided,
    color: '#000000',
    padding: '.5rem .25rem',
    marginRight: 0,
  }),
  loadingMessage: (provided: CSSProperties) => ({
    ...provided,
    paddingTop: '.25rem',
    paddingBottom: '.25rem',
    fontSize: '1rem',
  }),
  menu: (provided: CSSProperties, state: any) => ({
    ...provided,
    marginTop: '.5rem',
    marginBottom: 0,
    border: 0,
    borderRadius: '0.375rem',
    zIndex: 9999,
    boxShadow:
      ' 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    backgroundColor: state.selectProps.searchModule
      ? '#052354'
      : provided.backgroundColor,
  }),
  menuList: (provided: CSSProperties, state: any) => ({
    ...provided,
    paddingTop: 0,
    zIndex: 9999,
    paddingBottom: 0,
    backgroundColor: state.selectProps.searchModule
      ? '#052354'
      : provided.backgroundColor,
  }),
  noOptionsMessage: (provided: CSSProperties, state: any) => ({
    ...provided,
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    fontSize: '0.875rem',
    color: state.selectProps.searchModule ? '#ACD4FF' : provided.color,
    backgroundColor: state.selectProps.searchModule && '#0da3b8',
  }),
  option: (provided: CSSProperties, { data, isSelected }: any) => {
    return {
      ...provided,
      backgroundColor: isSelected ? '#98c1ff' : provided.backgroundColor,
      color: data.color ? data.color : provided.color,
      fontWeight: data.color ? '800' : provided.fontWeight,
      cursor: 'pointer',
      paddingTop: '.25rem',
      paddingBottom: '.25rem',
      fontSize: '0.875rem',

      '&:hover': { backgroundColor: '#f3f4f6' },
    };
  },
  placeholder: (provided: CSSProperties) => ({
    ...provided,
    color: '#9ca3af',
    fontSize: '0.875rem',
  }),

  singleValue: (provided: CSSProperties, { getValue, selectProps }: any) => ({
    ...provided,
    lineHeight: 1.4,
    color: selectProps.searchModule
      ? '#ACD4FF'
      : getValue().length && getValue()[0].color
        ? getValue()[0].color
        : '#9ca3af',
    fontWeight:
      getValue().length && getValue()[0].color ? 800 : provided.fontWeight,
  }),

  valueContainer: (provided: CSSProperties) => ({
    ...provided,
    minHeight: 'auto',
    padding: '0',
  }),
  container: (provided: CSSProperties) => {
    return {
      ...provided,
      padding: 0,
      flexGrow: '1',
    };
  },
};

const SelectField = (props: ISelectField) => {
  const { options, className, showLabelInInput = false } = props;

  return (
    <Select
      className={`form-element ${className}`}
      styles={selectStyles}
      components={{ SingleValue: CustomSingleValue }}
      {...props}
      options={options}
    />
  );
};

export default SelectField;
