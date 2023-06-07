import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from './Contacts/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { StyledLayout } from './Layout/Layout.styled';

import {
  StyledPhonebookWrap,
  StyledContactsTitle,
  StyledTitle,
  StyledTitleWrap,
} from './App.styled';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { AppBar } from './AppBar/AppBar';
import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
// export const App = () => {
//   // const dispatch = useDispatch();
//   // const { isRefreshing } = useAuth();

//   // useEffect(() => {
//   //   dispatch(refreshUser());
//   // }, [dispatch]);

//   //  return isRefreshing ? (
//   //   <b>Refreshing user...</b>
//   // ) :

//   return (
// <Routes>
//   <Route path="/" element={<Layout />}>
//     <Route index element={<HomePage />} />
//     <Route
//       path="/register"
//       element={
//         <RestrictedRoute
//           redirectTo="/contacts"
//           component={<RegisterPage />}
//         />
//       }
//     />
//     <Route
//       path="/login"
//       element={
//         <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
//       }
//     />
//     <Route
//       path="/contacts"
//       element={
//         <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
//       }
//     />
//   </Route>
// </Routes>
//   );
// };
// export const App = () => {
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   return (
//     <StyledLayout>
//       <StyledPhonebookWrap>
//         <StyledTitleWrap>
//           <StyledTitle>Phonebook</StyledTitle>
//           <FaBook />
//         </StyledTitleWrap>

//         <ContactForm />
//         <StyledTitleWrap>
//           <StyledContactsTitle>Contacts</StyledContactsTitle>
//           <IoMdContacts />
//         </StyledTitleWrap>

//         <Filter />
//         {isLoading && !error && <Loader />}
//         {error && <p>Something went wrong, try again!</p>}
//         <ContactList />
//       </StyledPhonebookWrap>
//     </StyledLayout>
//   );
// };
