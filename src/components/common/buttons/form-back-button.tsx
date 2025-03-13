import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

interface FormBackButtonProps {
  href: string
}

export default function FormBackButton({ href }: FormBackButtonProps) {
  return (
    <Link
      href={`/${href}`}
      className={`flex items-center justify-center w-8 h-8 rounded-full
      border border-gray-300 bg-gray-100 hover:bg-gray-200
      transition`}
    >
      <ChevronLeft size={20} className="text-gray-600" />
    </Link>
  )
}
