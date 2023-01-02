import React from "react";
// import { fieldEnhance } from "semantic-ui-redux-form-fields";
// import { compose } from "redux";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

const DatePicker = (props: any) => {
  const { currentValue, input, ...rest } = props;
  const defaultProps = {
    format: "DD/MMM/YYYY",
    onChange: (event: any, data: any) => input.onChange(data.value),
    value: currentValue,
    ...rest,
  };
  return <SemanticDatepicker {...props} {...defaultProps} />;
};

// export default compose(fieldEnhance)(DatePicker);
