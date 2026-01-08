import { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import {
  MessageCircle,
  FileText,
  FileBarChart,
  FileCheck,
  FileSearch,
  Users,
  CreditCard,
  Layers,
  Settings,
  LogOut,
  HelpCircle,
} from 'lucide-react';

export default function DemoDashboard() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(
    location.pathname.includes('reports') ? 'reports' : 'chat'
  );

  const navItems = [
    { key: 'dashboard', path: '/', icon: FileBarChart, label: 'Tableau de bord', disabled: true },
    { key: 'analyze', path: '/', icon: FileSearch, label: 'Analyser mes documents', disabled: true },
    { key: 'corrected', path: '/', icon: FileCheck, label: 'Mes documents corrigés', disabled: true },
    { key: 'reports', path: '/reports', icon: FileText, label: 'Mes derniers rapports' },
    { key: 'chat', path: '/chat', icon: MessageCircle, label: 'Discuter avec Ilonna' },
    { key: 'teams', path: '/', icon: Users, label: 'Équipes', disabled: true },
    { key: 'subscription', path: '/', icon: CreditCard, label: 'Abonnement', disabled: true },
    { key: 'integrations', path: '/', icon: Layers, label: 'Intégrations', disabled: true },
    { key: 'account', path: '/', icon: Settings, label: 'Mon compte', disabled: true },
  ];

  return (
    <div
      className="flex min-h-screen"
      style={{
        background: 'linear-gradient(90deg, #e6e2fd, #e6e2fd, #e5e3fe, #f3ecfd, #f3ecfd, #faf0f7, #fddffa)',
      }}
    >
      {/* === Sidebar === */}
      <aside
        className="fixed left-0 top-0 bottom-0 w-72 flex flex-col border-r border-white/30"
        style={{
          background: 'rgba(255, 255, 255, 0.35)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
        }}
      >
        {/* Logo */}
        <div className="p-5 pt-12 flex justify-center mb-8">
          <img
            src="/ilonna_logo-removebg-preview.png"
            alt="iLonna"
            className="h-28"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto pt-1">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.disabled ? '#' : item.path}
              onClick={(e) => {
                if (item.disabled) {
                  e.preventDefault();
                } else {
                  setActiveMenu(item.key);
                }
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-full text-sm font-medium transition-all border border-white/30 shadow-sm ${
                !item.disabled && (activeMenu === item.key || location.pathname === item.path)
                  ? 'bg-[#7047E6] text-white'
                  : item.disabled
                  ? 'text-gray-400 cursor-not-allowed opacity-50'
                  : 'text-gray-700 hover:bg-white/30'
              }`}
              style={
                !item.disabled && activeMenu !== item.key && location.pathname !== item.path
                  ? { background: 'rgba(255, 255, 255, 0.5)' }
                  : undefined
              }
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}

          <div className="mt-8">
            <button
              disabled
              className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-400 text-sm font-medium rounded-full transition-all cursor-not-allowed opacity-50"
            >
              <LogOut size={18} />
              Déconnexion
            </button>
          </div>
        </nav>

        {/* Bouton Besoin d'aide */}
        <div className="px-4 pb-2 flex-shrink-0">
          <button
            disabled
            className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-400 text-sm font-medium rounded-full transition-all cursor-not-allowed opacity-50"
          >
            <HelpCircle size={18} />
            Besoin d'aide
          </button>
        </div>

        {/* Footer (profil utilisateur) */}
        <div className="p-3 border-t border-white/20 flex-shrink-0">
          <div className="flex items-center gap-3 p-2 rounded-lg">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0 bg-[#D1FAE4]">
              🍣
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-800 truncate">Demo User</p>
              <p className="text-xs text-gray-500 truncate">demo@ilonna.com</p>
              <p className="text-xs text-gray-600 truncate">Product Manager</p>
              <p className="text-xs font-medium text-[#471DDF] mt-0.5 truncate">Team HR</p>
            </div>
          </div>
        </div>

        {/* Badge Demo */}
        <div className="px-4 pb-4">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
            <div className="flex items-center gap-2 text-orange-700">
              <span className="text-lg">🎭</span>
              <span className="text-sm font-medium">Mode Démonstration</span>
            </div>
            <p className="text-xs text-orange-600 mt-1">
              Données statiques - Aucune connexion API
            </p>
          </div>
        </div>
      </aside>

      {/* === Contenu principal === */}
      <main className="ml-72 flex-1 flex flex-col min-h-screen overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
