import React from 'react';

const wrapperStyle = {
  width: '100%',
  paddingTop: 30,
  paddingBottom: 100,
  textAlign: 'center',
};

const FooterRow = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div style={wrapperStyle}>
      <p>{year} &copy; Keith Weaver</p>
    </div>
  );
}


export default FooterRow;
