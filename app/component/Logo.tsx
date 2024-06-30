import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link className="flex items-center gap-3 font-baloo text-xl font-black" href="/">
            <Image alt="aid_logo" width="30" height="1" src="/aid-web-nextjs/aid_logo_vector.svg" />
            <span className={'text-nowrap'}>AI Developer</span>
        </Link>
    );
}
