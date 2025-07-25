// components/common/Card.tsx

import { CardProps } from '@/interfaces'

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md mx-auto mb-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-2 text-blue-700">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  )
}
