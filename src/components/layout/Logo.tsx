import React from 'react';
import { FileTextIcon } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <FileTextIcon className="h-8 w-8 text-indigo-300" />
      <span className="ml-2 text-white text-xl font-bold">KingVoice Invoice</span>
    </div>
  );
};

export default Logo;