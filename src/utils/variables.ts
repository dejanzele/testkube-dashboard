import {Variables} from '@models/variable';

export const formatVariables = (list: any[]) => {
  const variables: {
    [key in string]: {
      name: string;
      value?: string;
      type: string;
      secretRef?: {
        name: string;
        key: string;
      };
    };
  } = {};

  list.forEach(item => {
    if (item.secretRef || item.type === 'secretRef') {
      variables[item.key] = {
        name: item.key,
        type: 'secret',
        secretRef: {
          name: item.secretRefName,
          key: item.secretRefKey,
        },
      };
    } else {
      variables[item.key] = {
        name: item.key,
        value: item.value,
        type: item.type === 0 ? 'basic' : 'secret',
      };
    }
  });

  return variables;
};

export const decomposeVariables = (variables: Variables) => {
  if (!variables) {
    return [];
  }

  return Object.entries(variables).map(([key, value]: any) => {
    if (value.secretRef) {
      return {
        key: value?.name,
        type: 'secretRef',
        secretRefName: value.secretRef.name,
        secretRefKey: value.secretRef.key,
      };
    }

    return {
      ...value,
      key: value?.name,
      type: value.type === 'basic' ? 0 : 1,
    };
  });
};
