import React from 'react';

const DiscountCard = () => {
  return (
    <div className="w-fit flex cursor-default rounded-2xl px-6 py-5 transition-all duration-500 ease-in-out hover:shadow-slate-900/20 items-center justify-start bg-white gap-4">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.9517 13.3877L18.6125 3.04848C17.2825 1.71848 15.4458 0.958374 13.5775 0.958374H6.5C3.44416 0.958374 0.958328 3.44421 0.958328 6.50004V13.5775C0.958328 15.4775 1.70251 17.2666 3.04834 18.6124L13.3875 28.9516C14.7333 30.2974 16.5225 31.0417 18.4225 31.0417C20.3383 31.0417 22.1275 30.2974 23.4733 28.9516L28.9517 23.4733C31.7383 20.6867 31.7383 16.1744 28.9517 13.3877ZM8.875 11.25C7.56083 11.25 6.5 10.1892 6.5 8.87504C6.5 7.56087 7.56083 6.50004 8.875 6.50004C10.1892 6.50004 11.25 7.56087 11.25 8.87504C11.25 10.1892 10.1892 11.25 8.875 11.25Z"
          fill="#121225"
        />
      </svg>
      <p className="text-lg font-normal text-gray-600 text-center">Ultimate Discount</p>
    </div>
  );
};

export default DiscountCard;
