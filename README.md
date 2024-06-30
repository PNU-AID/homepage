# AID WEB 리뉴얼

## Description

부산대학교 인공지능 동아리, AID의 웹사이트를 리뉴얼하는 프로젝트입니다.

## Maintainer

-   이동훈(@bluelemon61)
-   김민석(@KimCookieYa)

## ⚠️ Caution
- localhost 실행 시 `localhost/aid-web-nextjs`로 접속

## System Architecture

### Environment

-   node ^18
-   next 14.2.3
-   react ^18
-   react-dom ^18
-   prettier ^3.2.5
-   tailwindcss ^3.4.1
-   typescript ^5
-   @notionhq/client ^2.2.15

## GitHub Action
1. `Scheduled Notion Data Fetch`: Notion API로 static file 갱신 후 `Deploy Next.js site to Pages` 실행
2. `Deploy Next.js site to Pages`: GitHub Pages 배포