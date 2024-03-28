import React from "react";
interface Props {
  count: number;
}
function NotiNumber({ count }: Props) {
  return (
    <div className="absolute -top-1 -right-1 z-10 bg-orange-500 rounded-full p-2 w-1 h-1 ">
      {/* {count} */}
      <p className="absolute top-0 right-1 text-center text-xs text-white">
        {count}
      </p>
    </div>
  );
}

export default NotiNumber;
