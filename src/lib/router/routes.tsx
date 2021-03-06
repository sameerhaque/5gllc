import type { PathRouteProps } from 'react-router-dom'

import Layout from 'lib/layout'
import Home from 'lib/pages/home'
import Login from 'lib/pages/login'
import Test from 'lib/pages/test'
import BulkUpload from 'lib/pages/Upload/Bulk'
import IndividualUpload from 'lib/pages/Upload/Individual'
import UploadMain from 'lib/pages/Upload'
import SiteSearch from 'lib/pages/SiteSearch'

export const routes: Array<PathRouteProps> = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/test',
    element: <Test />
  }
]

export const privateRoutes: Array<PathRouteProps> = [
  {
    path: '/home',
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  },
  {
    path: '/site-search',
    element: (
      <Layout>
        <SiteSearch />
      </Layout>
    )
  },
  {
    path: '/bulk-upload',
    element: (
      <Layout>
        <UploadMain>
          <BulkUpload />
        </UploadMain>
      </Layout>
    )
  },
  {
    path: '/individual-upload',
    element: (
      <Layout>
        <UploadMain>
          <IndividualUpload />
        </UploadMain>
      </Layout>
    )
  }
]
