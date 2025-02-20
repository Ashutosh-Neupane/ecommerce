'use client'

import * as React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function EmptyDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='header-button h-[41px]'>
        <div className='flex items-center gap-1'>
          {/* No content here */}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        {/* No options here */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
