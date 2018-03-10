import React from 'react';
import objectAssign from 'object-assign';

const wrapperStyle = {
  width: '100%',
};
const headerStyle = {
  fontFamily: '"Poppins", sans-serif',
  fontSize: 24,
  paddingBottom: 15,
};
const tableStyle = {
  width: '100%',
  display: 'table',
};
const tableHeaderStyle = {
  width: '100%',
};
const tableRowStyle = {
  width: '100%',
};
const headerCellStyle = {
  borderTopWidth: 1,
};
const nameCellStyle = {
  width: '28%',
  display: 'table-cell',
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 3,
  paddingBottom: 3,
  borderBottomWidth: 1,
  borderRightWidth: 1,
  borderLeftWidth: 1,
  borderTopWidth: 0,
  borderStyle: 'solid',
  borderColor: '#d8d8d8',
};
const defaultCellStyle = {
  width: '19%',
  display: 'table-cell',
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 3,
  paddingBottom: 3,
  borderBottomWidth: 1,
  borderRightWidth: 1,
  borderLeftWidth: 0,
  borderTopWidth: 0,
  borderStyle: 'solid',
  borderColor: '#d8d8d8',
};
const typeCellStyle = {
  width: '19%',
  display: 'table-cell',
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 3,
  paddingBottom: 3,
  borderBottomWidth: 1,
  borderRightWidth: 0,
  borderLeftWidth: 0,
  borderTopWidth: 0,
  borderStyle: 'solid',
  borderColor: '#d8d8d8',
};
const descriptionCellStyle = {
  width: '29%',
  display: 'table-cell',
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 3,
  paddingBottom: 3,
  borderBottomWidth: 1,
  borderRightWidth: 1,
  borderLeftWidth: 1,
  borderTopWidth: 0,
  borderStyle: 'solid',
  borderColor: '#d8d8d8',
};
const cellTextStyle = {
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
              <div style={objectAssign({}, nameCellStyle, headerCellStyle)}>
                Prop
              </div>
              <div style={objectAssign({}, defaultCellStyle, headerCellStyle)}>
                Default
              </div>
              <div style={objectAssign({}, typeCellStyle, headerCellStyle)}>
                Type
              </div>
              <div style={objectAssign({}, descriptionCellStyle, headerCellStyle)}>
                Description
              </div>
            </div>
            {
              (propOptions).map(opt => (
                <div style={tableRowStyle}>
                  <div style={nameCellStyle}>
                    <p style={cellTextStyle}>
                      {
                        (opt.prop) ? (
                          opt.prop
                        ) : (
                          <span>&nbsp;</span>
                        )
                      }
                    </p>
                  </div>
                  <div style={defaultCellStyle}>
                    <p style={cellTextStyle}>
                      {
                        (opt.propDefault) ? (
                          opt.propDefault
                        ) : (
                          <span>&nbsp;</span>
                        )
                      }
                    </p>
                  </div>
                  <div style={typeCellStyle}>
                    <p style={cellTextStyle}>
                      {
                        (opt.propType) ? (
                          opt.propType
                        ) : (
                          <span>&nbsp;</span>
                        )
                      }
                    </p>
                  </div>
                  <div style={descriptionCellStyle}>
                    <p style={cellTextStyle}>
                      {
                        (opt.description) ? (
                          opt.description
                        ) : (
                          <span>&nbsp;</span>
                        )
                      }
                    </p>
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
