import Image from 'next/image'
import React from 'react'
import { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  productImage: string
  productTitle: string
  productContent: string
  productName: string
  productPrice: string
}

// 속성값 전달 받기
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  productImage,
  productTitle,
  productContent,
  productName,
  productPrice,
}) => {
  // 모달창 고정
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      id="popup-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-hide="popup-modal"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <Image
              src={productImage}
              width={100}
              height={100}
              alt="상품사진"
              className="size-1/2 mx-auto"
            />
            <div className="font-bold py-3 text-xl">{productTitle}</div>
            <p className="mx-auto w-3/4 py-4">{productContent}</p>
            <p className="text-sm text-gray-400">{productName}</p>
            <p className="text-sm text-gray-800">{productPrice}</p>

            <button
              type="button"
              className="
              text-white bg-gray-600 hover:bg-gray-800 
              focus:ring-4 focus:outline-none focus:ring-gray-300
              font-medium rounded-lg 
              text-sm inline-flex items-center px-5 py-2.5 text-center"
              data-modal-hide="popup-modal"
              onClick={onClose}
            >
              찜하기
            </button>
            <button
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              onClick={onClose}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
