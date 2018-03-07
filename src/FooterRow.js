import React from 'react';

const FooterRow = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div>
      <p>{year} &copyright; Keith Weaver</p>
    </div>
  );
}


export default FooterRow;
