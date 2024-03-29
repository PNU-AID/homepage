import ApplyComponent from '@component/applypage/ApplyComponent';

function ApplyPage() {
  return (
    <section className="w-full bg-darkdarkgray h-fit flex flex-col items-center py-[20vh] text-white gap-12">
      <div className="text-4xl font-bold">지원서 작성하기</div>
      <div className="text-md">2024년도 1학기 AID 부원</div>

      {/* 지원서 양식 컴포넌트 */}
      <ApplyComponent />
    </section>
  );
}

export default ApplyPage;
