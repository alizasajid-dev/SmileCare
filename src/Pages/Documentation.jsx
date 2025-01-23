import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Documentation = () => {
  return (
    <div className="w-full bg-gray-300 pb-20">
      <div className="p-4 pl-4">
        <h1 className="text-blue-950 text-3xl font-semibold">Documentation</h1>
        <div className="flex justify-between text-gray-500 text-sm mt-2">
          <p>Lorem ipsum</p>
          <p>Dashboard / Documentation</p>
        </div>
      </div>
      <div className="p-6 sm:p-8 md:p-14 ml-4 mr-4 bg-white shadow-xl rounded-md border border-gray-200 pb-10">
        <h1 className="text-blue-950 text-3xl font-semibold">Overview</h1>
        <div className="flex justify-between text-gray-500 text-sm mt-2">
          <p>
            Et pulvinar nec interdum integer id urna molestie porta nullam. A,
            donec ornare sed turpis pulvinar purus maecenas quam a. Erat
            porttitor pharetra sed in <br /> mauris elementum sollicitudin.
          </p>
        </div>
        <div className="p-4 ml-2 mr-2 bg-white shadow-xl rounded-md border border-gray-200 pt-10 mt-10 pl-10 pb-20">
          <div>
            <h1 className="text-2xl font-semibold">What is model prime?</h1>
            <br />
            <p className="text-gray-500">
              Quam lacinia tempor enim scelerisque risus tincidunt vel nam.
              Adipiscing quisque neque dolor varius dolor. Turpis augue
              ultricies phasellus vitae est. <br />
              Et fringilla convallis at fermentum id. Id ultrices laoreet
              sollicitudin nunc arcu scelerisque purus nunc ut.
            </p>
            <br />
            <p className="text-gray-500">
              Integer cum consectetur imperdiet quisque sapien sed bibendum quam
              penatibus. Sit dictumst eu sit quisque. In neque elit morbi et
              proin. Dui amet <br /> neque tristique tincidunt nunc. Id platea
              posuere nibh elit. Purus arcu diam aliquam senectus mauris sed
              vestibulum. Proin ultrices viverra platea <br /> lobortis eget
              vitae varius. Non euismod volutpat molestie pulvinar placerat.
            </p>
            <br />
            <p className="text-gray-500">
              Sapien mattis tellus massa eu tempus blandit arcu. Leo sit
              ullamcorper pharetra id. Tempus proin cras morbi senectus maecenas
              sem tincidunt sit. <br /> Volutpat massa nec feugiat sollicitudin
              platea duis phasellus. Amet nibh consectetur sapien vivamus
              sagittis ullamcorper tortor semper. Tellus <br /> ultricies
              vivamus viverra massa aliquet. Consequat cursus enim porttitor
              ultricies. Mi eu morbi id turpis. Interdum nullam massa arcu proin
              tincidunt <br /> vitae sed.
            </p>
            <br />
            <p className="text-gray-500">
              Sapien mattis tellus massa eu tempus blandit arcu. Leo sit
              ullamcorper pharetra id. Tempus proin cras morbi senectus maecenas
              sem tincidunt sit. <br /> Volutpat massa nec feugiat sollicitudin
              platea duis phasellus. Amet nibh consectetur sapien vivamus
              sagittis ullamcorper tortor semper. Tellus <br /> ultricies
              vivamus viverra massa aliquet. Consequat cursus enim porttitor
              ultricies. Mi eu morbi id turpis. Interdum nullam massa arcu proin
              tincidunt <br /> vitae sed.
            </p>
            <br />
            <p className="text-gray-500">
              Eget lacinia eu ultricies tincidunt purus amet enim ut sed.
              Interdum quis morbi ultrices vitae sit viverra tristique.
              Hendrerit amet phasellus quisque vel <br /> tortor. Ac neque
              aliquet viverra malesuada ridiculus dui dolor ut nisl. Arcu vitae
              duis viverra cursus convallis habitant eleifend. Fringilla turpis
              posuere <br /> elementum amet. Sed purus eget tincidunt velit
              phasellus urna integer elementum non. Faucibus cum nec vitae eros
              ut porta ornare velit aliquam.
            </p>
            <br />
            <p className="text-gray-500 text-center">
              Is this article helpful?
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <button className="text-gray-500 hover:text-blue-500 transition">
                <FaThumbsUp size={20} />
              </button>
              <button className="text-gray-500 hover:text-red-500 transition">
                <FaThumbsDown size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
