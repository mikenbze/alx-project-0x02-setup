// components/common/Button.tsx

import { type ButtonProps } from '@/interfaces'

export default function Button({ size, shape, children, onClick }: ButtonProps) {
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  }

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClasses[size]} ${shapeClasses[shape]} hover:bg-blue-700 transition`}
    >
      {children}
    </button>
  )
}
