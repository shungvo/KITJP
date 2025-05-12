// import enUS from 'antd/lib/locale/en_US';
// import jaJP from 'antd/lib/locale/ja_JP';
// import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

// export enum LocaleEnum {
//   // vi = 'vi',
//   en = 'en',
//   ja = 'ja',
// }


// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Nextjs Starter',
  microCMS: {
    baseUrl: 'https://5cf7n4nbnx.microcms.io/api',
    headers: {
      'X-MICROCMS-API-KEY': 'Yy0qaokuSYIT6CNknCjNyprPHAjT1isJ3nIa',
    },
  },
};


export const ThemeConfig = {
  token: {
    colorPrimary: '#47aeed',
  },
  components: {
    Menu: {
      colorText: 'white',
      itemBg: 'white',
      itemColor: 'black',
      itemHoverColor: '#47aeed',
      popupBg: 'white',
      fontSize: 16,
      fontWeight: 500,
    },
  },
};

// export const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

// export const MAIL_TOKEN = process.env.NEXT_PUBLIC_MAIL_TOKEN;

// export const MAIL_SERVICE_URL = process.env.NEXT_PUBLIC_MAIL_SERVICE_URL;

// export const PHONE_REGEX = /^\d{10,12}$/;

// export const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
