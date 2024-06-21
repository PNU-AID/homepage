export default function AidTop() {
  return (
    <section className="" id="about_us">
      <div className="gap-y-2 md:text-center md:space-y-8 md:h-screen md:items-center flex flex-col md:justify-center">
        <h1 className="font-black text-9xl md:text-6xl">AID</h1>
        <h6 className="text-2xl">AI Engineering & Research in PNU</h6>
        <p className="text-sm text-gray-500">
          AID는 AI 개발에 관심있는 사람들이 함께 스터디와 세미나를 진행하고,
          대회와 프로젝트를 하며 발전하는 동아리입니다.<br/>
          우리는 같은 진로를 꿈꾸는 사람들과의 네트워크를 넓히고
          개인 및 단체의 실력 발전을 목표로 하고 있습니다.<br/><br/>
          본 동아리는 부산대학교 AI 동아리 조준수 교수님의 지도 아래,<br/>
          부산대학교 정보컴퓨터공학 학생들을 중심으로 2022년 1학기에 설립되어
          다양한 학생들이 함께 하고 있습니다.
        </p>
        <div className="flex items-center gap-3 md:flex-col-reverse w-full">
          <button className="bg-aid-blue text-white px-4 py-2 text-nowrap md:text-sm md:px-2 md:py-2 md:w-full">
            동아리 지원하기
          </button>
          <p className="md:text-sm md:text-start w-full text-nowrap">
            모집기간 - 24.07.01~24.07.07 <span className={'md:hidden'}>|</span><br className={'hidden md:block'} /> 모집대상 - 인공지능을 좋아하는 누구나
          </p>
        </div>
      </div>

    </section>
  );
}
