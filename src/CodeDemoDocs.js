import React from 'react';

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
};
const defaultCellStyle = {
  width: '20%',
};
const typeCellStyle = {
  width: '20%',
};
const descriptionCellStyle = {
  width: '30%',
};


const CodeDemoDocs = (props) => {
  const {
    propOptions,
  } = props;
  if (!propOptions) {
    return null;
  }
  return (
    <div>
      <h2>Options</h2>
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
