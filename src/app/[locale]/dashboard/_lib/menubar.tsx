import { FileVideo2, Gauge, Tv } from 'lucide-react'

export const Menubar = () => (
  <ul className="mt-2 capitalize text-gray-700 dark:text-gray-400">
    <li className="mt-3 rounded-lg p-2 text-blue-600 dark:text-blue-300">
      <a href="/dashboard" className=" flex flex-col items-center">
        <Gauge />
        <span className="mt-2 text-xs">dashBoard</span>
      </a>
    </li>

    <li
      className="dark-hover:text-blue-300 mt-3 rounded-lg p-2
hover:text-blue-600">
      <a href="/dashboard/channel-list" className=" flex flex-col items-center">
        <Tv />
        <span className="mt-2 text-xs">Channel</span>
      </a>
    </li>

    <li
      className="dark-hover:text-blue-300 mt-3 rounded-lg p-2
hover:text-blue-600">
      <a href="/dashboard/video" className=" flex flex-col items-center">
        <FileVideo2 />
        <span className="mt-2 text-xs">Video</span>
      </a>
    </li>
  </ul>
)
