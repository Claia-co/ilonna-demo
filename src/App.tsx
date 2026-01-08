import { Routes, Route, Navigate } from 'react-router-dom';
import DemoDashboard from './pages/DemoDashboard';
import DemoChat from './pages/DemoChat';
import DemoReports from './pages/DemoReports';
import DemoReportDetail from './pages/DemoReportDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DemoDashboard />}>
        <Route index element={<Navigate to="/chat" replace />} />
        <Route path="chat" element={<DemoChat />} />
        <Route path="reports" element={<DemoReports />} />
        <Route path="reports/:id" element={<DemoReportDetail />} />
        <Route path="*" element={<Navigate to="/chat" replace />} />
      </Route>
    </Routes>
  );
}
