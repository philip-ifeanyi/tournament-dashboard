import React from 'react'
import { leaderboards } from '@/data/data'
import Image from 'next/image'

const Leaderboards = () => {
  return (
    <div className='w-full overflow-x-scroll'>
      <table className="w-full">
        <thead className=''>
          <tr className='bg-[#242424] border-t border-b border-[#2E2E2E] text-[#7E7F7F] text-left'>
            <th className='py-4 px-5 text-sm font-light'>Placement</th>
            <th className='py-4 px-5 text-sm font-light'>Player</th>
            <th className='py-4 px-5 text-sm font-light'>Games playes</th>
            <th className='py-4 px-5 text-sm font-light'>Wins</th>
            <th className='py-4 px-5 text-sm font-light'>Losses</th>
            <th className='py-4 px-5 text-sm font-light'>W/L ratio</th>
            <th className='py-4 px-5 text-sm font-light'>Points</th>
          </tr>
        </thead>
        <tbody className=''>
          {
            leaderboards.map(leaderboard => {
              return (
                <tr key={leaderboard.placement} className='bg-[#1C1C1C] border-b border-[#2E2E2E] text-[14px]'>
                  <td className='flex items-center gap-2 py-4 px-5 w-fit'>
                    <Image src={leaderboard.icon} alt='' />
                    <p>{leaderboard.placement}</p>
                  </td>
                  <td className='py-4 px-5 text-left'><p className=''>{leaderboard.player}</p></td>
                  <td className='py-4 px-5'>{leaderboard.games}</td>
                  <td className='py-4 px-5'>{leaderboard.won}</td>
                  <td className='py-4 px-5'>{leaderboard.losses}</td>
                  <td className='py-4 px-5'>{leaderboard.wlRatio}%</td>
                  <td className='py-4 px-5'>{leaderboard.points}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Leaderboards