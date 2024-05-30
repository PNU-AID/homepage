import Logo from "./logo";

export default function Navi() {
  return (
    <nav className="top-0 w-100 px-12 py-3 flex justify-between">
      <Logo/>
      <div className="flex items-center font-light space-x-16">
        <menu className="space-x-8">
          <a>About Us</a>
          <a>History</a>
          <a>Links</a>
        </menu>
        <menu>
          <button>한국어</button> | <button>ENG</button>
        </menu>
      </div>
    </nav>
  );
}
