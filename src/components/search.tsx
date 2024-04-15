import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
  const router = useRouter()

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleClick = () => {
    setInputValue('')
    router.push(`/product?q=${inputValue}`)
  }

  return (
    <div className="bg-white w-4/5 sm:w-1/4">
      <form>
        <div className="relative flex">
          <div className="relative w-full">
            <input
              type="search"
              name="q"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 
              bg-gray-50 rounded-e-lg border border-gray-200"
              placeholder="상품명 검색"
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium 
              h-full text-white bg-slate-600 rounded-e-lg 
              border hover:bg-slate-700 "
              onClick={handleClick}
            >
              <img className="w-4 h-4" src="/magnifier.png" alt="돋보기" />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
