import {Rule} from 'antd/lib/form';

export type Option = {
  value: string;
  label: string;
};

export type FormItem = {
  itemLabel: string;
  tooltip?: string;
  fieldName: string;
  inputType: 'select' | 'radio' | 'default' | 'uploadWithInput' | 'textarea';
  rules?: Array<Rule>;
  options?: Array<Option>;
  modificator?: 'password';
  help?: string;
};
