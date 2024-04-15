'use client'

import Link from 'next/link'
import { useState } from 'react'
import Login from '@/components/login'

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <nav
      className="sticky flex justify-between items-center 
    bg-black/90 px-8 py-4"
    >
      <Link
        href="/"
        className="text-white text-2xl font-bold hover:text-gray-400"
      >
        WANT IT.
      </Link>
      <div>
        <Link
          href="/product"
          className="text-white text-lg font-bold px-2 hover:text-gray-400"
        >
          상품
        </Link>
        <Link
          href="/message"
          className="text-white text-lg font-bold px-2 hover:text-gray-400"
        >
          채팅
        </Link>
        <Link
          href="/save"
          className="text-white text-lg font-bold px-2 hover:text-gray-400"
        >
          찜
        </Link>
        <Link
          href="/mypage"
          className="text-white text-lg font-bold px-2 hover:text-gray-400"
        >
          마이페이지
        </Link>
      </div>
      <div>
        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          className="text-white text-lg font-bold px-2 hover:text-gray-400"
          onClick={openModal}
        >
          로그인
        </button>
        {isModalOpen && <Login onClose={closeModal} isOpen={isModalOpen} />}
      </div>
    </nav>
  )
}
