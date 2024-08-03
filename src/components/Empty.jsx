/* eslint-disable react/prop-types */

const Empty = ({ resourceName }) => {
  return (
    <p className="flex justify-center mt-14 font-medium text-secondary-700">
      {resourceName} یافت نشد.
    </p>
  );
};
export default Empty;
