import path from 'path';
import { buildConfig } from '../src/config/build';

import Admin from './collections/Admin';
import AllFields from './collections/AllFields';
import AutoLabel from './collections/AutoLabel';
import Autosave from './collections/Autosave';
import Code from './collections/Code';
import Conditions from './collections/Conditions';
// import CustomComponents from './collections/CustomComponents';
import Endpoints from './collections/Endpoints';
import File from './collections/File';
import Blocks from './collections/Blocks';
import CustomID from './collections/CustomID';
import DefaultValues from './collections/DefaultValues';
import HiddenFields from './collections/HiddenFields';
import Hooks from './collections/Hooks';
import Localized from './collections/Localized';
import LocalizedArray from './collections/LocalizedArray';
import LocalOperations from './collections/LocalOperations';
import Media from './collections/Media';
import Images from './collections/Images';
import NestedArrays from './collections/NestedArrays';
import Preview from './collections/Preview';
import PublicUsers from './collections/PublicUsers';
import RelationshipA from './collections/RelationshipA';
import RelationshipB from './collections/RelationshipB';
import RichText from './collections/RichText';
import Select from './collections/Select';
import StrictAccess from './collections/StrictAccess';
import Validations from './collections/Validations';
import Uniques from './collections/Uniques';
import Geolocation from './collections/Geolocation';

import BlocksGlobal from './globals/BlocksGlobal';
import NavigationArray from './globals/NavigationArray';
import GlobalWithStrictAccess from './globals/GlobalWithStrictAccess';
import UnstoredMedia from './collections/UnstoredMedia';
import CustomRouteWithMinimalTemplate from './client/components/views/CustomMinimal';
import CustomRouteWithDefaultTemplate from './client/components/views/CustomDefault';
import AfterDashboard from './client/components/AfterDashboard';
import AfterNavLinks from './client/components/AfterNavLinks';
import BeforeLogin from './client/components/BeforeLogin';
// import CustomProvider from './client/components/CustomProvider';

export default buildConfig({
  cookiePrefix: 'payload',
  serverURL: 'http://localhost:3000',
  typescript: {
    outputFile: path.resolve(__dirname, './payload-types.ts'),
  },
  admin: {
    user: 'admins',
    indexHTML: path.resolve(__dirname, './client/index.html'),
    // meta: {
    //   titleSuffix: '- Payload Demo',
    //   // ogImage: '/static/find-image-here.jpg',
    //   // favicon: '/img/whatever.png',
    // },
    // disable: true,
    scss: path.resolve(__dirname, './client/scss/overrides.scss'),
    components: {
      // providers: [CustomProvider, CustomProvider],
      routes: [
        {
          path: '/custom-minimal-route',
          Component: CustomRouteWithMinimalTemplate,
        },
        {
          path: '/custom-default-route',
          Component: CustomRouteWithDefaultTemplate,
        },
      ],
      afterDashboard: [
        AfterDashboard,
      ],
      beforeLogin: [
        BeforeLogin,
      ],
      afterNavLinks: [
        AfterNavLinks,
      ],
      // Nav: () => (
      //   <div>Hello</div>
      // ),
      views: {
        // Dashboard: CustomDashboardView,
        // Account: CustomAccountView,
      },
    },
    webpack: (config) => config,
  },
  collections: [
    Admin,
    AllFields,
    AutoLabel,
    Autosave,
    Blocks,
    Code,
    Conditions,
    // CustomComponents,
    CustomID,
    DefaultValues,
    Endpoints,
    File,
    Geolocation,
    HiddenFields,
    Hooks,
    Localized,
    LocalizedArray,
    LocalOperations,
    Media,
    Images,
    NestedArrays,
    Preview,
    PublicUsers,
    RelationshipA,
    RelationshipB,
    RichText,
    Select,
    StrictAccess,
    Validations,
    Uniques,
    UnstoredMedia,
  ],
  globals: [
    BlocksGlobal,
    NavigationArray,
    GlobalWithStrictAccess,
  ],
  // cors: [
  //   'http://localhost',
  //   'http://localhost:3000',
  //   'http://localhost:8080',
  //   'http://localhost:8081',
  // ],
  // csrf: [
  //   'http://localhost:3000',
  //   'https://other-app-here.com',
  // ],
  routes: {
    api: '/api',
    admin: '/admin',
    graphQL: '/graphql',
    graphQLPlayground: '/graphql-playground',
  },
  defaultDepth: 2,
  graphQL: {
    maxComplexity: 1000,
    disablePlaygroundInProduction: false,
    disable: false,
  },
  // rateLimit: {
  //   window: 15 * 60 * 100,
  //   max: 100,
  //   trustProxy: true,
  //   skip: (req) => req.ip === '127.0.0.1',
  // },
  maxDepth: 10,
  localization: {
    locales: [
      'en',
      'es',
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  // indexSortableFields: true,
  hooks: {
    afterError: (err) => {
      if (process.env.DISABLE_LOGGING !== 'true') {
        console.error('global error config handler', err);
      }
    },
  },
  upload: {
    limits: {
      fileSize: 10000000, // 10MB
    },
  },
});
