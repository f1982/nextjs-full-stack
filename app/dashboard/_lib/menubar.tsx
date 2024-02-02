import { FileVideo2, Gauge, Tv } from 'lucide-react'

export const Menubar = () => (
  <ul className="mt-2 text-gray-700 dark:text-gray-400 capitalize">
    <li className="mt-3 p-2 text-blue-600 dark:text-blue-300 rounded-lg">
      <a href="/dashboard" className=" flex flex-col items-center">
        <Gauge />
        <span className="text-xs mt-2">dashBoard</span>
      </a>
    </li>

    <li
      className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
rounded-lg">
      <a href="/dashboard/channel" className=" flex flex-col items-center">
        <Tv />
        <span className="text-xs mt-2">Channel</span>
      </a>
    </li>

    <li
      className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
rounded-lg">
      <a href="/dashboard/video" className=" flex flex-col items-center">
        <FileVideo2 />
        <span className="text-xs mt-2">Video</span>
      </a>
    </li>
  </ul>
)
