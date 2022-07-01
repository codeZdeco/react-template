import _ from "@lodash";
import React, { useCallback, useState } from "react";

const option: {
  [nodeType: string]: (
    event: React.ChangeEvent<HTMLElement>,
  ) => string | boolean | number | null | typeof NaN;
} = {
  checkbox: (event) => event.target.nodeValue,
  text: (event) => event.target.nodeValue,
  number: (event) =>
    _.isInteger(event.target.nodeValue)
      ? _.toInteger(event.target.nodeValue)
      : NaN,
};

const useForm = (initialState: any, onSubmit: Function) => {
  const [form, setForm] = useState<typeof initialState>(initialState);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLElement>) => {
    event.persist();

    const { nodeName, nodeType, nodeValue } = event.target;

    setForm((_form: typeof initialState) =>
      _.setIn(
        { ..._form },
        nodeName,
        _.has(option, nodeType) ? option[nodeType](event) : nodeValue,
      ),
    );
  }, []);

  const resetForm = useCallback(() => {
    if (!_.isEqual(initialState, form)) {
      setForm(initialState);
    }
  }, [form, initialState]);

  const setInForm = useCallback((name: string, value: any) => {
    setForm((_form: typeof initialState) => _.setIn(_form, name, value));
  }, []);

  const unSetInForm = useCallback((name: string) => {
    setForm((_form: typeof initialState) => _.unset(_form, name));
  }, []);

  const setAttributeForm = useCallback(
    (oldName: string, newName: string, info: any) => {
      setForm((_form: typeof initialState) => {
        let _tmp = _.cloneDeep(_form);
        _.unset(_tmp, oldName);
        _tmp = _.setIn(_tmp, newName, info);

        return _tmp;
      });
    },
    [],
  );

  const handleSubmit = useCallback(
    (event: React.SyntheticEvent) => {
      if (event) {
        event.preventDefault();
      }
      if (onSubmit) {
        onSubmit();
      }
    },
    [onSubmit],
  );

  return {
    form,
    handleChange,
    handleSubmit,
    resetForm,
    setForm,
    setInForm,
    unSetInForm,
    setAttributeForm,
  };
};

export default useForm;
