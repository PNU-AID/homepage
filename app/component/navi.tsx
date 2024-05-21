export default function Navi() {
  return (
    <nav className="top-0 w-100 px-12 py-3 flex justify-between">
      <div className="flex items-center gap-3 font-baloo font-black text-xl">
        <img className="h-10" src="/aid_logo_vector.svg"/>
        AI Developer
      </div>
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
