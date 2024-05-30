import Link from "next/link";
import Logo from "./logo";

export default function Navi() {
  return (
    <footer className="top-0 w-100 px-12 py-3 flex-col">
      <div className="flex justify-between">
        <div className="flex-col gap-5">
          <Logo/>
          <div className="flex font-semibold text-sm">
            <Link
              className="px-3 py-5"
              target="_blank"
              href='https://github.com/PNU-AID'
            >
              Github
            </Link>
            <Link
              className="px-3 py-5"
              target="_blank"
              href='https://cookie-quill-a7f.notion.site/AID-1cd5b10fb16e488489be4d9f17a47f97'
            >
              Notion
            </Link>
            <Link
              className="px-3 py-5"
              target="_blank"
              href='https://velog.io/@pnuaid1020/posts'
            >
              Velog
            </Link>
          </div>
        </div>
        <div className="flex-col text-sm">
          <h1 className="font-black text-lg">Contact</h1>
          <h3>010-xxxx-xxxx</h3>
          <h3>회장 강준우 (@.com)</h3>
          <h3>부회장 손봉국 (@.com)</h3>
          <h3>부산광역시 금정구 부산대학로63번길 2(장전동), 부산대학교 제 6공학관(컴퓨터공학관)</h3>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold">AID (AI Developers) in PNU © 2022 ALL RIGHTS RESERVED</p>
        <p className="text-xs">Reproduction in whole or part without written permission is strictly prohibited</p>
      </div>
    </footer>
  );
}
