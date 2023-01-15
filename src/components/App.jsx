import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './Page/Layout.jsx';
import './Design.css';
import Page from './Page/Page.jsx';
import { getItems } from '../services/fetch.js';

export default function App() {
  // This is just to prove we actually can get some items from Supabase without
  // having to wire everything up. This useEffect and everything in it should be
  // removed once that functionality is proven.
  useEffect(() => {
    getItems().then((items) => {
      console.info('items', items);
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Page />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
