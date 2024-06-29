import {AID_WEB_URL} from '@/app/constants/link';
import {MetadataRoute} from 'next';


export default function sitemap(): MetadataRoute.Sitemap {
    const page: MetadataRoute.Sitemap = [{
        url: AID_WEB_URL + '/',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
    }]

    console.log('======= sitemap.xml created =======');

    return page;
}
