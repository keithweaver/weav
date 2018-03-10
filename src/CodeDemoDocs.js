import React from 'react';

const wrapperStyle = {
  width: '100%',
};
const headerStyle = {
  fontFamily: '"Poppins", sans-serif',
  fontSize: 24,
};
const tableStyle = {
  width: '100%',
};
const tableHeaderStyle = {
  width: '100%',
};
const tableRowStyle = {
  width: '100%',
};
const nameCellStyle = {
  width: '30%',
  display: 'inline-block',
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 3,
  paddingBottom: 3,
  borderBottomWidth: 2,
  borderRightWidth: 2,
  borderLeftWidth: 0,
  borderTopWidth: 0,
  borderStyle: 'solid',
  borderColor: '#d8d8d8',
  fontSize: 12,
  fontFamily: '"Source Sans Pro", sans-serif',
};
const defaultCellStyle = {
  width: '20%',
  display: 'inline-block',
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 3,
  paddingBottom: 3,
  borderBottomWidth: 2,
  borderRightWidth: 2,
  borderLeftWidth: 0,
  borderTopWidth: 0,
  borderStyle: 'solid',
  borderColor: '#d8d8d8',
  fontSize: 12,
  fontFamily: '"Source Sans Pro", sans-serif',
};
const typeCellStyle = {
  width: '20%',
  display: 'inline-block',
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 3,
  paddingBottom: 3,
  borderBottomWidth: 2,
  borderRightWidth: 2,
  borderLeftWidth: 0,
  borderTopWidth: 0,
  borderStyle: 'solid',
  borderColor: '#d8d8d8',
  fontSize: 12,
  fontFamily: '"Source Sans Pro", sans-serif',
};
const descriptionCellStyle = {
  width: '30%',
  display: 'inline-block',
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 3,
  paddingBottom: 3,
  borderBottomWidth: 2,
  borderRightWidth: 2,
  borderLeftWidth: 0,
  borderTopWidth: 0,
  borderStyle: 'solid',
  borderColor: '#d8d8d8',
  fontSize: 12,
  fontFamily: '"Source Sans Pro", sans-serif',
};


const CodeDemoDocs = (props) => {
  const {
    propOptions,
  } = props;
  if (!propOptions) {
    return null;
  }
  return (
    <div style={wrapperStyle}>
      <h2 style={headerStyle}>Options</h2>
      {
        (propOptions) ? (
          <div style={tableStyle}>
            <div style={tableHeaderStyle}>
              <div style={nameCellStyle}>
                Prop
              </div>
              <div style={defaultCellStyle}>
                Default
              </div>
              <div style={typeCellStyle}>
                Type
              </div>
              <div style={descriptionCellStyle}>
                Description
              </div>
            </div>
            {
              (propOptions).map(opt => (
                <div style={tableRowStyle}>
                  <div style={nameCellStyle}>
                    {opt.prop}
                  </div>
                  <div style={defaultCellStyle}>
                    {opt.propDefault}
                  </div>
                  <div style={typeCellStyle}>
                    {opt.propType}
                  </div>
                  <div style={descriptionCellStyle}>
                    {opt.description}
                  </div>
                </div>
              ))
            }
          </div>
        ) : (
          <p>There are no additional props for this component.</p>
        )
      }
    </div>
  );
}

export default CodeDemoDocs;
