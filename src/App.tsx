import Lesson from "./component/lesson-react-ts/todo/Lesson"
import GuideTS from "./component/lesson-react-ts/todo/guide/GuideTS"
import LayoutMain from "./component/main-page/LayoutMain"
import GuideReactRouter from "./component/react-router-guide/GuideReactRouter"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from "./component/react-router-guide/pages/HomePage"
import AboutPage from "./component/react-router-guide/pages/AboutPage"
import { SingPage, singlePostLoader } from "./component/react-router-guide/pages/SingPage"
import { BlogPage, blogLoader } from "./component/react-router-guide/pages/BlogPage"
import NotFoundPage from "./component/react-router-guide/pages/NotFoundPage"
import CustomLinkPage from "./component/react-router-guide/pages/CustomLinkPage"
import BasicRoutePage from "./component/react-router-guide/pages/BasicRoutePage"
import ParamsLinksPage from "./component/react-router-guide/pages/ParamsLinksPage"
import HistoryLocationPage from "./component/react-router-guide/pages/HistoryLocationPage"
import LoginPage from "./component/react-router-guide/pages/LoginPage"
import RequireAuth from "./component/hoc/RequireAuth"
import AuthProvider from "./component/hoc/AuthProvider"
import HooksPage from "./component/hooks-page/HooksPage"
import UseStateHook from "./component/hooks-page/UseStateHook"
import UseEffectHook from "./component/hooks-page/UseEffectHook"
import IndexStylesPage from "./component/screens/styles-page/IndexStylesPage"
import FlexBoxPage from "./component/screens/styles-page/flex-box/FlexBoxPage"
import GridPage from "./component/screens/styles-page/GridPage"
import BasicConcepts from "./component/screens/styles-page/flex-box/BasicConcepts"
import Direction from "./component/screens/styles-page/flex-box/Direction"
import Video from "./component/ui/Video"
import AlignPage from "./component/screens/styles-page/flex-box/AlignPage"
import UseDeferredValueHook from "./component/hooks-page/UseDeferredValueHook"
import SuspensePage from "./component/screens/suspense-page/SuspensePage"
import { Suspense, lazy } from "react"
import Loader from "./component/ui/Loader"
import ErrorBoundary from "./component/ui/ErrorBoundary"
import ErrorPage from "./component/screens/error-boundary/ErrorPage"
import UseCallbackHook from "./component/hooks-page/UseCallbackHook"
import UseRefHook from "./component/hooks-page/UseRefHook"
import InterviewsJs from "./component/screens/interviews/InterviewsJs"

const ExamplePage = lazy(() => import("./component/react-router-guide/pages/ExamplePage"))
const UseMemoHook = lazy(() => import('./component/hooks-page/UseMemoHook'))


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<LayoutMain />}>
    <Route index element={<Lesson />} />
    <Route path="router-dom/*" element={<GuideReactRouter />} >
      <Route index element={<BasicRoutePage />} />
      <Route path="custom-link" element={<CustomLinkPage />} />
      <Route path="params" element={<ParamsLinksPage />} />
      <Route path="use-navigate" element={<HistoryLocationPage />} />
      <Route path="example/*" element={

        <Suspense fallback={<Loader />}>
          <ExamplePage />
        </Suspense>
      }
      >
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route loader={blogLoader} path='blog' element={
          <RequireAuth>
            <BlogPage />
          </RequireAuth>} />
        <Route path='blog/:id' loader={singlePostLoader} element={<SingPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Route>
    <Route path="ts" element={<GuideTS />} />
    <Route path="hooks/*" element={<HooksPage />} >
      <Route index element={<UseStateHook />} />
      <Route path="use-effect" element={<UseEffectHook />} />
      <Route path="use-deferred-value" element={<UseDeferredValueHook />} />
      <Route path="use-memo" element={
        <Suspense fallback={<Loader />}>
          <UseMemoHook />
        </Suspense>
      } />
      <Route path="use-ref" element={<UseRefHook />} />
      <Route path="use-callback" element={<UseCallbackHook />} />
    </Route>
    <Route path="suspense" element={<ErrorBoundary><SuspensePage /></ErrorBoundary>} />
    <Route path="error-boundary" element={<ErrorPage />} />
    <Route path="styles/*" element={<IndexStylesPage />}>
      <Route path="flex-box/*" element={<FlexBoxPage />}>
        <Route index element={<BasicConcepts />} />
        <Route path="direction" element={<Direction />} />
        <Route path="align" element={<AlignPage />} />
        <Route path="video" element={<Video url="XXlw7TUxRVY" />} />
        <Route />
      </Route>
      <Route path="grid" element={<GridPage />} />
    </Route>
    <Route path="interviews-js" element={<InterviewsJs />} />

  </Route>
))
const App: React.FC = () => {



  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
