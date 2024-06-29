import { MetadataRoute } from 'next';
import {AID_WEB_URL} from '@/app/constants/link';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        host: AID_WEB_URL,
        sitemap: AID_WEB_URL + '/sitemap.xml',
    };
}
