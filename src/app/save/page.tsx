import Banner from '@/components/banner'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-800 py-16">
        <Banner />
      </div>

      <main className="relative w-3/4 mx-auto">
        <div className="py-12">
          <div className="grid grid-cols-1 gap-x10">
            <div className="flex flex-col bg-white p-6 gap-y-6">
              <div className="w-auto h-12 whitespace-nowrap text-[2rem] leading-[2.75rem]">
                찜목록
                <hr className="my-6" />
              </div>

              {/* 찜목록 테이블 영역 */}

              <table>
                <thead>
                  <tr className="border-b">
                    <th className="text-left pl-3">
                      <div className="w-auto">상품</div>
                    </th>

                    <th className="h-12"></th>
                    <th className="h-12 text-left">
                      <div className="w-auto">가격</div>
                    </th>

                    <th className="h-12">
                      <div className="flex justify-end pr-3">
                        <div className="w-auto">전체 삭제</div>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="border-b">
                  <tr className="border-b">
                    <td className="pl-3 p-4">
                      <div className="flex w-24 h-24 p-4 bg-gray-200 rounded-large"></div>
                    </td>

                    <td>
                      <div className="flex flex-col gap-y-2">
                        <div className="w-auto">상품명</div>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2">
                        <div className="w-auto">0₩</div>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2 justify-end pr-3">
                        <div className="w-auto">삭제</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-3 p-4 w-24">
                      <div className="flex w-24 h-24 p-4 bg-gray-200 rounded-large"></div>
                    </td>

                    <td className="pr-3">
                      <div className="flex flex-col gap-y-2">
                        <div className="w-32">상품명</div>
                      </div>
                    </td>

                    <td className="pr-3">
                      <div className="flex gap-2">
                        <div className="w-12">0₩</div>
                      </div>
                    </td>

                    <td className="h-12 pr-3 text-right">
                      <div className="flex gap-2 justify-end">
                        <div className="w-12">삭제</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
