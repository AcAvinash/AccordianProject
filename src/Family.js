import React, { useState } from 'react';

const Family = ({ MyData }) => {
  const [display, setDisplay] = useState(false);

  const expand = () => {
    setDisplay(!display);
  };

  return (
    <>
      {MyData.map((parent) => {
        return (
          <div key={parent.name} className="my-3">
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                className="form-check-input"
                onClick={expand}
              />
              <label className="form-check-label btn btn-success ms-2">
                {parent.name}
              </label>
            </div>

            {display && parent.children && (
              <div className="ms-5">
                <Family MyData={parent.children} />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Family;
