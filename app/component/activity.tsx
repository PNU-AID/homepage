export default function Activity() {
  return (
    <section className="" id="Activity">
      <div className="flex h-64">
        <div className="w-3/5 flex flex-col bg-sky-500 justify-between text-white px-4 py-4">
          <h3 className="text-4xl font-black">스터디</h3>
          <p className="text-lg font-bold">
            딥러닝, 머신러닝, Python 등 그룹 스터디
          </p>
        </div>
        <div className="flex-1 bg-gray-300">
          사진 | 일러스트
        </div>
      </div>
      <div className="flex h-64">
        <div className="flex-1 bg-gray-300">
          사진 | 일러스트
        </div>
        <div className="w-3/4 flex flex-col bg-aid-red justify-between text-white px-4 py-4">
          <h3 className="text-4xl font-black">세미나</h3>
          <p className="text-lg font-bold">
            AI 논문 리뷰, 칼럼, 취업 수기 등 발표
          </p>
        </div>
      </div>
      <div className="flex h-64">
        <div className="flex-1 bg-gray-300">
          사진 | 일러스트
        </div>
        <div className="w-3/5 flex flex-col bg-green-600 justify-between text-white px-4 py-4">
          <h3 className="text-4xl font-black">개발 및 대외 활동</h3>
          <p className="text-lg font-bold">
            사이드 프로젝트, 해커톤 등 대외 활동
          </p>
        </div>
      </div>
    </section>
  );
}
