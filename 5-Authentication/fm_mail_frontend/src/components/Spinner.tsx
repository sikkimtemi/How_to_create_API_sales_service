import { FC } from 'react';

const Spinner: FC = () => (
  <div className="flex justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
  </div>
);
export default Spinner;
