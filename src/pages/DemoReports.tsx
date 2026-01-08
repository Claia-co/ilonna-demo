import { Link } from 'react-router-dom';
import { FileText, AlertTriangle, CheckCircle, Clock, ChevronRight } from 'lucide-react';
import { demoReports } from '../data/demoReports';

export default function DemoReports() {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critique':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'élevé':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'moyen':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="h-full overflow-y-auto">
      {/* Header */}
      <div
        className="px-6 py-4 sticky top-0 z-10 border-b border-white/30"
        style={{
          background: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FileText className="text-[#7047E6]" size={24} />
              Historique des Analyses
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {demoReports.length} rapport(s) d'analyse
            </p>
          </div>
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
            Mode Demo
          </span>
        </div>
      </div>

      {/* Reports List */}
      <div className="p-6 space-y-4">
        {demoReports.map((report) => (
          <Link
            key={report.id}
            to={`/reports/${report.id}`}
            className="block rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group border border-white/30"
            style={{
              background: 'rgba(247, 250, 255, 0.6)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#7047E6] to-[#9F7AEA] rounded-xl flex items-center justify-center">
                      <FileText size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 group-hover:text-[#7047E6] transition-colors">
                        {report.document_name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        ID : {report.analysis_id}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {formatDate(report.created_at)}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 rounded text-gray-600">
                      {report.contract_type}
                    </span>
                  </div>
                </div>

                {/* Score */}
                <div className={`px-4 py-2 rounded-xl ${getScoreColor(report.compliance_score)}`}>
                  <p className="text-2xl font-bold">{report.compliance_score}%</p>
                  <p className="text-xs">Conformité</p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={16} className="text-red-500" />
                  <span className="text-sm text-gray-600">
                    <strong className="text-red-600">{report.critical_errors}</strong> erreur(s) critique(s)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-orange-500" />
                  <span className="text-sm text-gray-600">
                    <strong>{report.total_violations}</strong> violation(s) détectée(s)
                  </span>
                </div>
                {report.corrections_applied && (
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span className="text-sm text-green-600">
                      <strong>{report.corrections_applied}</strong> correction(s) appliquée(s)
                    </span>
                  </div>
                )}
                <div className="flex-1 text-right">
                  <span className="text-[#7047E6] font-medium text-sm group-hover:underline flex items-center justify-end gap-1">
                    Voir le détail
                    <ChevronRight size={16} />
                  </span>
                </div>
              </div>

              {/* Violations Preview */}
              <div className="mt-4 flex flex-wrap gap-2">
                {report.violations.slice(0, 3).map((violation) => (
                  <span
                    key={violation.id}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityBadge(violation.severity)}`}
                  >
                    {violation.label}
                  </span>
                ))}
                {report.violations.length > 3 && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                    +{report.violations.length - 3} autres
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
