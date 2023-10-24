import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (explorer.isFolder) {
    return (
      <div>
        <span
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer text-xl pl-4"
        >
          {explorer.name}
        </span>
        <br />
        <div className={`${isOpen ? "block" : "hidden"} pl-8`}>
          {explorer.childrenItems.map((item) => {
            return <Folder key={item.name} explorer={item} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span>
        {explorer.name}
        <br />
      </span>
    );
  }
};

export default Folder;
