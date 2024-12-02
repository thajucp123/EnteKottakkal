import { FaCommentAlt, FaShareAlt, FaSignOutAlt } from 'react-icons/fa';

export default function SearchBar() {
    return (
<div className="flex items-center justify-between bg-[#0056b3] pt-0 pb-3 px-0 mb-2.5 rounded-lg">
<input
type="text"
placeholder="Search for..."
className="w-1/2 flex-grow rounded-lg bg-[#ECE4BB] px-4 py-2"
/>
<FaCommentAlt size={24} className="mx-2 text-white" />
      <FaShareAlt size={24} className="mx-2 text-white" />
      <FaSignOutAlt size={24} className="mx-2 text-white" />
</div>

);
}