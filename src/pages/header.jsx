import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

        {/* Cards Section */}
        <div className="grid grid-cols-2 gap-8 mt-12 px-8">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://cdn.dribbble.com/userupload/1234567/file.png"
              alt="Design 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Halal Lab</h3>
              <div className="flex items-center justify-between mt-2 text-gray-600">
                <span>162 Likes</span>
                <span>82.4k Views</span>
              </div>
            </div>
          </div>
          <div className="shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://cdn.dribbble.com/userupload/1234568/file.png"
              alt="Design 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Shamim Ahsan</h3>
              <div className="flex items-center justify-between mt-2 text-gray-600">
                <span>0 Likes</span>
                <span>4.6k Views</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <button className="mt-12 px-6 py-3 bg-pink-500 text-white rounded-full">
          Sign up to continue
        </button>
    </div>
  );
};

export default Header;