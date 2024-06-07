"use client"

import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import Stats from '@/components/Sections/Dashboard/Stats';
import RecentTransactions from '@/components/Sections/Dashboard/RecentTransactions';
import UpcomingDeadlines from '@/components/Sections/Dashboard/UpcomingDeadlines';
import Image from 'next/image';

const Dashboard = () => {
  const { user } = useUser();

  // Get the current time to determine the greeting
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting = 'Morning';
  if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Afternoon';
  } else if (currentHour >= 18) {
    greeting = 'Evening';
  }

  return (
    <>
      <div className='flex justify-between'>
        <div className="greeting text-2xl font-bold text-black sm:text-xs lg:text-lg">
          Good {greeting}, {user ? user.firstName : ''}
          <p className='lg:text-15 font-light sm:text-xs pt-1'>
            Let&apos;s get started with ☕
          </p>
        </div>
        <div className='flex'>
          <div>
            <Image
              src='/assets/icons/notix.svg'
              alt='Icon'
              width={150}
              height={50}
            />
          </div>
          <div className="order-button">
            <Link href="/order/create">
              <Button className='bg-black p-5 hover:bg-zinc-900 font-bold py-2 px-4 rounded hover:animate-shrink'>
                Create Order
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='pt-10'>
        <Stats />
      </div>

      {/* Recent Transactions Section */}
      <div>
        <RecentTransactions />
      </div>

      {/* Upcoming Deadlines Sections */}
      <div>
        <UpcomingDeadlines />
      </div>
    </>
  );
};

export default Dashboard;
