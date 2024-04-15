import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Link from 'next/link'

const Page: React.FC = () => {
  return (
    <form className="max-w-lg mx-auto">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className="font-semibold pt-32 text-2xl text-center text-gray-900">
            회원가입
          </h1>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            개인정보 작성란
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            회원가입에 필요한 개인정보를 작성해주세요.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                성
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                이름
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                이메일
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="id"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                아이디
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="id"
                  id="id"
                  autoComplete="given-name"
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3 relative">
              <p
                className="absolute bottom-0 text-xs bg-slate-200 p-0.5 rounded-md hover:bg-slate-300 duration-300
               font-semibold text-gray-500 cursor-pointer"
              >
                중복 확인
              </p>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="password1"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                비밀번호
              </label>

              <div className="mt-2">
                <input
                  maxLength={16}
                  type="password"
                  name="password1"
                  id="password1"
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="text-xs p-1 text-gray-500">
                최소 10자 이상 영문, 숫자, 특수문자를 <br />
                포함하여 입력해 주세요.
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="password2"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                비밀번호 확인
              </label>

              <div className="mt-2">
                <input
                  maxLength={16}
                  type="password"
                  name="password2"
                  id="password2"
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="tel"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                전화번호
              </label>
              <div className="mt-2">
                <input
                  placeholder="010-0000-0000"
                  id="tel"
                  name="tel"
                  type="tel"
                  autoComplete="email"
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                이용 약관
              </legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-900 flex"
                    >
                      서비스 이용약관 동의<p className="text-red-400">*</p>
                    </label>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="candidates"
                      className="font-medium text-gray-900 flex"
                    >
                      개인정보 수집 및 이용 동의
                      <p className="text-red-400">*</p>
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-2 pb-6">
          <Link
            href="/"
            className="rounded-md bg-gray-400 hover:bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-md"
          >
            취소
          </Link>
          <Link
            href="/"
            type="submit"
            className="rounded-md bg-gray-500 hover:bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-md"
          >
            회원가입
          </Link>
        </div>
      </div>
    </form>
  )
}

export default Page
