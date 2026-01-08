import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, Download, Scale, BookOpen } from 'lucide-react';
import { demoReports } from '../data/demoReports';

export default function DemoReportDetail() {
  const { id } = useParams();
  const report = demoReports.find(r => r.id === id);

  if (!report) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Rapport non trouvé</h2>
          <Link to="/reports" className="text-[#471DDF] hover:underline">
            Retour aux rapports
          </Link>
        </div>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-100 border-green-200';
    if (score >= 60) return 'bg-yellow-100 border-yellow-200';
    return 'bg-red-100 border-red-200';
  };

  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case 'critique':
        return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-500', icon: '#ef4444' };
      case 'élevé':
        return { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-500', icon: '#f97316' };
      case 'moyen':
        return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-500', icon: '#eab308' };
      default:
        return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-500', icon: '#3b82f6' };
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
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/reports"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} className="text-gray-600" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FileText className="text-[#471DDF]" size={20} />
                {report.document_name}
              </h1>
              <p className="text-gray-500 text-sm">
                ID : {report.analysis_id} • {report.contract_type}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              Mode Demo
            </span>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#471DDF] text-white rounded-xl hover:bg-[#370bc1] transition-colors">
              <Download size={18} />
              Télécharger PDF
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Score Card */}
        <div className={`rounded-2xl p-6 border-2 ${getScoreBg(report.compliance_score)}`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-1">Score de Conformité</h2>
              <p className="text-gray-500 text-sm">{formatDate(report.created_at)}</p>
            </div>
            <div className="text-center">
              <p className={`text-5xl font-bold ${getScoreColor(report.compliance_score)}`}>
                {report.compliance_score}%
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {report.compliance_score >= 80 ? 'Conforme' : report.compliance_score >= 60 ? 'À améliorer' : 'Non conforme'}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/60 rounded-xl p-4 text-center">
              <AlertTriangle className="mx-auto text-red-500 mb-2" size={24} />
              <p className="text-2xl font-bold text-red-600">{report.critical_errors}</p>
              <p className="text-sm text-gray-600">Erreurs critiques</p>
            </div>
            <div className="bg-white/60 rounded-xl p-4 text-center">
              <FileText className="mx-auto text-orange-500 mb-2" size={24} />
              <p className="text-2xl font-bold text-orange-600">{report.total_violations}</p>
              <p className="text-sm text-gray-600">Violations détectées</p>
            </div>
            <div className="bg-white/60 rounded-xl p-4 text-center">
              <CheckCircle className="mx-auto text-green-500 mb-2" size={24} />
              <p className="text-2xl font-bold text-green-600">{report.corrections_applied || 0}</p>
              <p className="text-sm text-gray-600">Corrections appliquées</p>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen size={20} className="text-[#471DDF]" />
            Résumé de l'analyse
          </h3>
          <p className="text-gray-600 leading-relaxed">{report.executive_summary}</p>
        </div>

        {/* Violations */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <Scale size={20} className="text-[#471DDF]" />
            Points d'Attention Détectés ({report.violations.length})
          </h3>

          {report.violations.map((violation, index) => {
            const style = getSeverityStyle(violation.severity);
            return (
              <div
                key={violation.id}
                className={`bg-white rounded-2xl shadow-lg border-l-4 overflow-hidden`}
                style={{ borderLeftColor: style.icon }}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${style.bg} ${style.text}`}>
                          {violation.severity.toUpperCase()}
                        </span>
                        <span className="text-sm text-gray-500">{violation.clause}</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800">{violation.label}</h4>
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <AlertTriangle size={16} className="text-orange-500" />
                        Problème identifié
                      </h5>
                      <p className="text-gray-600">{violation.details}</p>
                    </div>

                    {/* Correction */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                        <CheckCircle size={16} />
                        Correction Recommandée
                      </h5>
                      <p className="text-green-700">{violation.correction}</p>
                    </div>

                    {/* Legal Reference */}
                    {violation.article_principal && (
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <Scale size={16} />
                          Base Légale
                        </h5>
                        <p className="text-blue-700 font-medium">Article {violation.article_principal}</p>
                        {violation.fondement_juridique && (
                          <p className="text-blue-600 text-sm mt-1">{violation.fondement_juridique}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
